import React, { useContext } from 'react'
import GiftContext from '../../contexts/GiftContext'

const Gift = ({gift}) => {

    const {deleteGift} = useContext(GiftContext);

  return (
    <div className='flex justify-between mb-1'>
        <li>{gift.name} x{gift.quantity}</li>
        <button className='px-1 bg-red-600 rounded text-white' onClick={() => deleteGift(gift.id)}> X </button>
    </div>
  )
}

export default Gift