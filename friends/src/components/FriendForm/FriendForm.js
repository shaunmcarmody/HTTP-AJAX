import React from 'react';

class FriendForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            age: '',
            email: '',
            name: '',
        }
    }

    render() {
        return (
            <form onSubmit={this.props.submit}>
                <input
                    name="name"
                    onChange={this.props.handleChange}
                    placeholder="name"
                    type="text"
                    value={this.props.name}
                />
                <input
                    name="age"
                    onChange={this.props.handleChange}
                    placeholder="age"
                    type="text"
                    value={this.props.age}
                />
                <input
                    name="email"
                    onChange={this.props.handleChange}
                    placeholder="email"
                    type="email"
                    value={this.props.email}
                />
                <button type="submit">Submit</button>
            </form>
        )
    }
}

export default FriendForm;