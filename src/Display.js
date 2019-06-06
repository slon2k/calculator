import React from 'react'

const Display = ({num}) => {
    return (
        <div>
            <h3>{num === 'Error' ? num : parseFloat(num)}</h3>
        </div>
    )
}

export default Display