import React from 'react';
import Friend from '../Friend/Friend';

const Friends = props => (
    <ul>
        {
            props.friends.map(friend => <Friend friend={friend} />)
        }
    </ul>
)

export default Friends;