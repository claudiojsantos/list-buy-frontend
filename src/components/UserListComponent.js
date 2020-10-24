import React from 'react'
import ListComponent from './ListComponent'

class UserListComponent extends React.Component {
    state = { lists: null, loading: true }

    async componentDidMount(){
        const config = {
            headers: {
                'content-type': 'application/json'
            }
        }
        config.headers['Authorization'] = 'Token e74d9fdf6d929a4f141793618e4804a5394c7511'

        var url = 'http://localhost:8000/list/'
        const response = await fetch(url, config)
        const data = await response.json()
        
        console.log(data)
        this.setState({lists: data, loading: false})
    }

    render() {
        return (
            <div>
                <ListComponent listName='Minha Lista' />
                <ListComponent listName='Minha Lista 2' />
            </div>
        )
    }
}

export default UserListComponent