import React from 'react';

class FriendForm extends React.Component {
    state = {
        id: this.props.id || 0,
        friend: {
            name: this.props.name || '',
            age: this.props.age || '',
            email: this.props.email || '',
        }
    }

    componentDidUpdate = prevState => {
        console.log()
    }

    handleChange = e => {
        e.persist();
        this.setState(prevState => ({
          friend: {
            ...prevState.friend,
            [e.target.name]: e.target.value
          }
        }));
    }

    submit = e => {
        e.preventDefault();
        this.props.submit(this.state.friend, this.state.id);
        this.setState(prevState => ({
          friend: {
              name: '',
              age: '',
              email: '',
          }
        }));
    }

    render() {
        return (
            <form onSubmit={this.submit}>
                <input
                    name="name"
                    onChange={this.handleChange}
                    placeholder="name"
                    type="text"
                    value={this.state.friend.name}
                />
                <input
                    name="age"
                    onChange={this.handleChange}
                    placeholder="age"
                    type="text"
                    value={this.state.friend.age}
                />
                <input
                    name="email"
                    onChange={this.handleChange}
                    placeholder="email"
                    type="email"
                    value={this.state.friend.email}
                />
                <button type="submit">Submit</button>
            </form>
        )
    }
}

export default FriendForm;