import React, { useContext, useState } from 'react'
import GiftContext from '../../contexts/GiftContext'
import Form from '../Form';
import Gift from '../Gift'

const GiftContainer = () => {
    const {gifts, deleteAll, handleToggle} = useContext(GiftContext);
   

  return (
    <>
    <button className='bg-red-700 p-1 rounded text-white' onClick={handleToggle}>{"Agregar regalo!" }</button>
    {
        (
            gifts.length > 0 ? (
                <>
                <div className='flex flex-col justify-center items-center'>
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
        )
    }
    </>
  )
}

export default GiftContainer