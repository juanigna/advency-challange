import React from 'react'
import Gift from '../Gift'

const GiftContainer = ({gifts}) => {
  return (
    <>
    {
        gifts.length > 0 ? (
            <>
            <div className='flex flex-col	justify-center items-center'>
                <ul className='w-full'>
                    {
                        gifts?.map(gif => (
                        <Gift gift={gif}/>
                        ))
                    }
                </ul>
        </div>
        <button className='px-1 py-1 bg-red-600 rounded text-white'>Borrar todo!</button>
            </>
        ) : (
            <h1>No hay regalos!</h1>
        )
    }
        
    </>
  )
}

export default GiftContainer