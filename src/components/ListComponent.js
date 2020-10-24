import React from 'react'
import ItemComponent from './ItemComponent'
import UserListComponent from './UserListComponent'

function ListComponent(props){
    return (
        <div>
            <h2><UserListComponent nomeLista={props.lista} /></h2>
            <ul>
                <ItemComponent name="Meu Item" />
                <ItemComponent name="Meu Item 2" />
            </ul>
        </div>
    )
}

export default ListComponent