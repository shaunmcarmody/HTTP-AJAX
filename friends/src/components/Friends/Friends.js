import React from 'react';
import Friend from '../Friend/Friend';

const Friends = props => (
    <article>
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
    </article>
)

export default Friends;