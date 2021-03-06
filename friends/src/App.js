import React, { Component } from 'react';
import axios from 'axios';
import './App.sass';
import Friends from './components/Friends/Friends';
import FriendForm from './components/FriendForm/FriendForm';

class App extends Component {
  constructor() {
    super();
    this.state = {
      friends: []
    };
  }

  componentDidMount() {
    axios
      .get('http://localhost:5000/friends')
      .then(res => this.setState({ friends: res.data }))
      .catch(err => console.log(err))
  }

  addNewFriend = (friend, id, cb) => {
    axios
        .post('http://localhost:5000/friends', friend)
        .then(res => {
          this.setState({ friends: res.data })
          cb('', '', '');
        })
        .catch(err => console.log(err));
    }

  updateFriend = (friend, id, cb) => {
    axios
        .put(`http://localhost:5000/friends/${id}`, friend)
        .then(res => {
          this.setState({ friends: res.data })
          cb(friend.name, friend.age, friend.email);
        })
        .catch(err => console.log(err));
  }

  deleteFriend = id => {
    axios
      .delete(`http://localhost:5000/friends/${id}`)
      .then(res => this.setState({ friends: res.data }))
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
              />
          </div>
        </header>
        <Friends
          deleteFriend={this.deleteFriend}
          friends={this.state.friends}
          updateFriend={this.updateFriend}
        />
      </>
    );
  }
}

export default App;
