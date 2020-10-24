import React from 'react'
import ItemComponent from './ItemComponent'

function ListComponent(props){
    return (
        <div>
            <h2>{props.listName}</h2>
            <ul>
                <ItemComponent name="Meu Item" />
                <ItemComponent name="Meu Item 2" />
            </ul>
        </div>
    )
}

export default ListComponent