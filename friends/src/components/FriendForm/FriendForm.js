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

    handleChange = e => {
        e.persist();
        let value = e.target.name === 'age' ? parseInt(e.target.value, 10) : e.target.value;
        this.setState(prevState => ({
          friend: {
            ...prevState.friend,
            [e.target.name]: value
          }
        }));
    }

    submit = e => {
        e.preventDefault();
        this.props.submit(this.state.friend, this.state.id, (name, age, email) => {
            this.setState({ friend: { name, age, email } });
        });
        
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