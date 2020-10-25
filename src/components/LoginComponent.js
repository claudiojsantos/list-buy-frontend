import React from 'react'

class LoginComponent extends React.Component {
    constructor(props) {
        super(props)
        this.state = { username: '', password: '' }

        this.handleChange = this.handleChange.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
        this.handlePassword = this.handleChangePassword(this)
    }

    handleChange(event) {
        this.setState({ username: event.target.value })
    }

    handleSubmit(event) {
        alert('A name was submitted: ' + this.state.username)
        event.preventDefault()
    }

    handleChangePassword(event) {}

    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <label>
                    Name:
                    <input type="text" value={this.state.username} onChange={this.handleChange}/>
                    <input type="password" value={this.state.password} onChange={this.handleChangePassword}/>
                </label>
                <input type="submit" value="Submit"/>
            </form>
        )
    }
}

export default LoginComponent