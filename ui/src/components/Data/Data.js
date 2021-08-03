import React from 'react'
import './Data.css'

function Data({ id, data, className }) {
    return (
        <td id={id} className={className}>{data}</td>
    )
}

export default Data
