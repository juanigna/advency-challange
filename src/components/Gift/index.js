import React from 'react'

const Gift = ({gift}) => {
  return (
    <div className='flex justify-between mb-1'>
        <li>{gift}</li>
        <button className='px-1 bg-red-600 rounded text-white'> X </button>
    </div>
  )
}

export default Gift