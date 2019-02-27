import React, { Component } from 'react';
import axios from 'axios';
import './App.css';
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
    console.log('works')
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

  render() {
    return (
      <div className="App">
        <FriendForm
          addNewFriend={this.addNewFriend}
          age={this.state.age}
          email={this.state.email}
          handleChange={this.handleFormChange}
          name={this.state.name}
        />
        <Friends
          deleteFriend={this.deleteFriend}
          friends={this.state.friends}
        />
      </div>
    );
  }
}

export default App;
