import React, { Component } from 'react'
import './App.css'
import Person from './Person/Person'

class App extends Component {
  state = {
    persons: [
      {id: 'asdfgh', name: 'Tomo', age: '25'},
      {id: 'zxcvb', name: 'Toto', age: '5'},
      {id: 'qwert', name: 'Totoro', age: '250'},
    ],
    showPersons: false
  }

  nameChangedHandler = (e, id) => {
    const personIndex = this.state.persons.findIndex(p => {
      return p.id === id
    })
    const person = {
      ...this.state.persons[personIndex]
    }
    person.name = e.target.value

    const persons = [...this.state.persons]
    persons[personIndex] = person

    this.setState({persons: persons})
  }

  toggleHandler = () => {
    const showAndHide = this.state.showPersons
    this.setState({showPersons: !showAndHide})
  }

  delerePersonHandler = personIndex => {
    const persons = [...this.state.persons]
    persons.splice(personIndex, 1)
    console.log(persons[personIndex])
    this.setState({persons: persons})
  } 

  render() {
    const style = {
      backgroundColor: 'green',
      color: 'white',
      font: 'inherit',
      border: '1px solid blue',
      padding: '8px',
      cursor: 'pointer'
    }

    let persons = null

    if(this.state.showPersons) {
      
      persons = (
        <div>
          {this.state.persons.map((person, index) => {
            return <Person 
              click={() => this.delerePersonHandler(index)}
              name={person.name}
              age={person.age}
              key={person.id}
              changed={e => this.nameChangedHandler(e, person.id)} />
          })}
        </div>
      )
      style.backgroundColor = 'red'
      style[':hover'] = {
        backgroundColor: 'salmon',
        color: 'black'
      }
    }

    let classes = []
    if(this.state.persons.length <=2) {
      classes.push('red')
    } 
    if(this.state.persons.length <=1) {
      classes.push('bold')
    } 

    return(
        <div className='App'>
          <h1>Hello World!</h1>
          <p className={classes.join(' ')}>Have lots of fun coding!!</p>
          <button 
            style={style}
            onClick={this.toggleHandler}>Toggle</button>
          {persons}
        </div>
    )
  }
}

export default App