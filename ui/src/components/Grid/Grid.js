import './Grid.css'
import Data from '../Data/Data'
import { useState, useEffect } from 'react'

function Grid({ allElements, spell }) {
    const currentTime = spell
    const [element, setElement] = useState()

    useEffect(() => {
        setElement(renderTable)
    }, [])

    const renderTable = () => {
        return <>{allElements.map((row, index) => (
            <tbody key={index}>
                <tr key={index}>
                    {row.map((ele, idx) =>
                        <Data key={idx}
                            data={Object.keys(ele)[0]}
                            className={currentTime.includes(ele[Object.keys(ele)[0]]) ? 'light' : 'dark'}
                            id={ele[Object.keys(ele)[0]]} />)
                    }</tr>
            </tbody>
        ))}</>
    }

    return (
        <>
            <table className='center'>
                {element}
            </table>
        </>
    )
}

export default Grid
