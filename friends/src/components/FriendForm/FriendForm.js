import React from 'react';

const FriendForm = props => (
    <form onSubmit={props.addNewFriend}>
        <input
            name="name"
            onChange={props.handleChange}
            placeholder="name"
            required={true}
            type="text"
            value={props.name}
        />
        <input
            name="age"
            onChange={props.handleChange}
            placeholder="age"
            required={true}
            type="text"
            value={props.age}
        />
        <input
            name="email"
            onChange={props.handleChange}
            placeholder="email"
            required={true}
            type="email"
            value={props.email}
        />
        <button type="submit">Submit</button>
    </form>
)

export default FriendForm;