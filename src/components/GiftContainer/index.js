import React, { useContext } from 'react'
import GiftContext from '../../contexts/GiftContext'
import Gift from '../Gift'

const GiftContainer = () => {
    const {gifts, deleteAll} = useContext(GiftContext);
    
  return (
    <>
    {
        gifts.length > 0 ? (
            <>
            <div className='flex flex-col	justify-center items-center'>
                <ul className='w-full'>
                    {
                        gifts.map(gif => (
                            <Gift gift={gif} key={gif.id}/>
                        ))
                    }
                </ul>
        </div>
        <button className='px-1 py-1 bg-red-600 rounded text-white' onClick={deleteAll}>Borrar todo!</button>
            </>
        ) : (
            <h1>No hay regalos!</h1>
        )
    }
        
    </>
  )
}

export default GiftContainer