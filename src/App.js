import React, { Component } from 'react'
import { v4 as uuidv4 } from 'uuid'
import logo from './logo.svg'
import './App.css'
import NewUserInput from './NewUserInput'
import UserList from './UserList'

/*
This exercise will help you put together and practice all of the concepts you've
learned thus far. It will also help you form a strong foundational knowledge of
React and prepare you for your first project.

The instructions for this project are located in the `instructions.md` file.
*/

class App extends Component {
  state = {
    newUser: {
      id: uuidv4(),
      firstName: '',
      lastName: '',
      userName: '',
      numberGames: 0
    },
    users: [
      {
        id: uuidv4(),
        firstName: 'jalal',
        lastName: 'el hazzat',
        userName: 'the-king',
        numberGames: 0
      },
      {
        id: uuidv4(),
        firstName: 'liam',
        lastName: 'elhazzat',
        userName: 'the-prince',
        numberGames: 0
      }
    ],
    isHidden: false
  }

  addItem = event => {
    event.preventDefault();
    this.setState(oldState => ({
      users: [...oldState.users, this.state.newUser],
      newUser: {
        id: uuidv4(),
        firstName: '',
        lastName: '',
        userName: '',
        numberGames: 0
      }
    }))
  }

  handleInputChange = event => {
    const name = event.target.name
    const value = event.target.value

    this.setState(() => ({ 
      newUser: { ...this.state.newUser, [name]: value} 
    }))
  }

  inputIsNotValid = () => {
    return Object.values(this.state.newUser).some(x => (x === null || x === ''))
  }

  toggleIsHidden = () => {
    this.setState(oldState => ({
      isHidden: !oldState.isHidden
    }))
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">ReactND - Coding Practice</h1>
        </header>

        <div className='grid-container'>
          <NewUserInput
            newUser={this.state.newUser}
            addItem={this.addItem}
            handleInputChange={this.handleInputChange}
            inputIsNotValid={ this.inputIsNotValid }
          />

          <UserList 
            users={ this.state.users }
            toggleIsHidden={ this.toggleIsHidden }
            isHidden={ this.state.isHidden }
          />
        </div>
      </div>
    )
  }
}

export default App
