import React from 'react'

function ItemComponent(props) {
    const status = props.status


    return (
        <div>
            <li>Item desc.: {props.name}</li>
            <p>{props.status ? 'Finalizado' : 'Em aberto'}</p>
        </div>
    )
}

export default ItemComponent