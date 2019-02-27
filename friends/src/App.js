import React, { Component } from 'react';
import axios from 'axios';
import './App.sass';
import Friends from './components/Friends/Friends';
import FriendForm from './components/FriendForm/FriendForm';

class App extends Component {
  constructor() {
    super();
    this.state = {
      friends: [],
      age: '',
      email: '',
      name: '',
    };
  }

  componentDidMount() {
    axios
      .get('http://localhost:5000/friends')
      .then(res => this.setState({ friends: res.data }))
      .catch(err => console.log(err))
  }

  addNewFriend = e => {
    e.preventDefault();
    axios
      .post('http://localhost:5000/friends', {
        name: this.state.name,
        age: this.state.age,
        email: this.state.email
      })
      .then(res => this.setState({
        friends: res.data,
        age: '',
        email: '',
        name: '',
      }))
      .catch(err => console.log(err))
  }

  deleteFriend = id => {
    axios
      .delete(`http://localhost:5000/friends/${id}`)
      .then(res => this.setState({ friends: res.data }))
      .catch(err => console.log(err))
  }

  handleFormChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  updateFriend = (id, e) => {
    e.preventDefault();
    axios
      .put(`http://localhost:5000/friends/${id}`, {
        name: this.state.name,
        age: this.state.age,
        email: this.state.email
    })
      .then(res => this.setState({
        friends: res.data,
        age: '',
        email: '',
        name: '',
      }))
      .catch(err => console.log(err))

  }

  render() {
    return (
      <>
        <header className="header">
        <div className="header-container">
          <h1>Add New Friend</h1>
            <FriendForm
              submit={this.addNewFriend}
              age={this.state.age}
              email={this.state.email}
              handleChange={this.handleFormChange}
              name={this.state.name}
            />
        </div>
          
        </header>
        <Friends
          age={this.state.age}
          deleteFriend={this.deleteFriend}
          email={this.state.email}
          friends={this.state.friends}
          handleChange={this.handleFormChange}
          name={this.state.name}
          updateFriend={this.updateFriend}
        />
      </>
    );
  }
}

export default App;
