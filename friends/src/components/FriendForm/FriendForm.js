import React from 'react';

const FriendForm = props => (
    <form onSubmit={props.submit}>
        <input
            name="name"
            onChange={props.handleChange}
            placeholder="name"
            type="text"
            value={props.name}
        />
        <input
            name="age"
            onChange={props.handleChange}
            placeholder="age"
            type="text"
            value={props.age}
        />
        <input
            name="email"
            onChange={props.handleChange}
            placeholder="email"
            type="email"
            value={props.email}
        />
        <button type="submit">Add Friend</button>
    </form>
)

export default FriendForm;