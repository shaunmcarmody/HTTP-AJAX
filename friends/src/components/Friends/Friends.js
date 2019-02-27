import React from 'react';
import Friend from '../Friend/Friend';

const Friends = props => (
    <article>
        {
            props.friends.map(friend => <Friend friend={friend} key={friend.id} deleteFriend={props.deleteFriend} />)
        }
    </article>
)

export default Friends;