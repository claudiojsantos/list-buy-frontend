import React from 'react'
import ListComponent from './ListComponent'

class UserListComponent extends React.Component {
    state = { lists: [], loading: true }

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
        const listApi = this.state.lists

        return (
            <div>
                { listApi.map((list => <ListComponent key={list.id} listName={list.name} />))}
            </div>
        )
    }
}

export default UserListComponent