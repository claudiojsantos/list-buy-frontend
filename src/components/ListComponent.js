import React from 'react'
import ItemComponent from './ItemComponent'

function ListComponent(props){
    const items = props.items

    return (
        <div>
            <h2>{props.listName}</h2>
            <ul>
                { items.map(item => <ItemComponent name={item.name} key={item.id} status={item.done} />)}
            </ul>
        </div>
    )
}

export default ListComponent