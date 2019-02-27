import React from 'react';
import Friend from '../Friend/Friend';
import './Friends.sass';

const Friends = props => (
    <main className="friends">
        <h1>Friends List</h1>
        {
            props.friends.map(friend => (
                <Friend
                    age={props.age}
                    email={props.email}
                    friend={friend}
                    key={friend.id}
                    name={props.name}
                    handleChange={props.handleChange}
                    deleteFriend={props.deleteFriend}
                    updateFriend={props.updateFriend}
                />
            ))
        }
    </main>
)

export default Friends;