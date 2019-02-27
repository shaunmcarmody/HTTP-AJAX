import React from 'react';

const Friend = props => (
    <section>
        <h1>{props.friend.name}</h1>
        <p>Age: {props.friend.age}</p>
        <p>Email: {props.friend.email}</p>
        <div>
            <button onClick={() => props.deleteFriend(props.friend.id)}>Delete</button>
        </div>
    </section>
)

export default Friend;