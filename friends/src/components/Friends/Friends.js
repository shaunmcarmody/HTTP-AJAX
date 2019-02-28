import React from 'react';
import Friend from '../Friend/Friend';
import './Friends.sass';

const Friends = props => (
    <main className="friends">
        <h1>Friends List</h1>
        {
            props.friends.map(friend => (
                <Friend
                    deleteFriend={props.deleteFriend}
                    friend={friend}
                    key={friend.id}
                    updateFriend={props.updateFriend}
                />
            ))
        }
    </main>
)

export default Friends;