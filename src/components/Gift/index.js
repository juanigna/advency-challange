import React from 'react'

const Gift = ({gift}) => {
  return (
    <div className='flex justify-between mb-1'>
        <li>{gift.name}</li>
        <button className='px-1 bg-red-600 rounded text-white'> X </button>
    </div>
  )
}

export default Gift