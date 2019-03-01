import React from 'react';
import { Link, Route, withRouter } from 'react-router-dom'; 
import FriendForm from '../FriendForm/FriendForm';
import './Friend.sass';

const Friend = props => (
    <section className="friend">
        <h1>{props.friend.name}</h1>
        <p>Age: {props.friend.age}</p>
        <p>Email: {props.friend.email}</p>
        <div>
            <button onClick={() => props.deleteFriend(props.friend.id)}>Delete</button>
            <Link
                to={
                    props.location.pathname === '/' ?
                    `/update/${props.friend.id}` :
                    `/`
                }
            >
                <button>{ props.location.pathname === '/' ? 'Update' : 'Close'}</button>
            </Link>
        </div>
        <Route
            path={`/update/${props.friend.id}`}
            render={() => (
                <FriendForm
                    age={props.friend.age}
                    email={props.friend.email}
                    name={props.friend.name}
                    id={props.friend.id}
                    submit={props.updateFriend}
                />
            )}
        />
    </section>
)

export default withRouter(Friend);