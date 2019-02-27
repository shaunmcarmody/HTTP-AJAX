import React from 'react';
import { Link, Route } from 'react-router-dom'; 
import FriendForm from '../FriendForm/FriendForm';
import './Friend.sass';

const Friend = props => (
    <section className="friend">
        <h1>{props.friend.name}</h1>
        <p>Age: {props.friend.age}</p>
        <p>Email: {props.friend.email}</p>
        <div>
            <button onClick={() => props.deleteFriend(props.friend.id)}>Delete</button>
            <Link to={`/update/${props.friend.id}`}>
                <button>Update</button>
            </Link>
        </div>
        <Route
            path={`/update/${props.friend.id}`}
            render={() => (
                <FriendForm
                    age={props.age}
                    name={props.name}
                    email={props.email}
                    handleChange={props.handleChange}
                    submit={e => props.updateFriend(props.friend.id, e)}
                />
            )}
        />
    </section>
)

export default Friend;