import React, { useContext, useState } from 'react'
import GiftContext from '../../contexts/GiftContext'

const Form = () => {
  const [input, setInput] = useState("");
  const {addGift} = useContext(GiftContext)

  const addNewGift = (e) => {
    e.preventDefault();
    addGift(input);
    setInput("");
  }

  return (
    <>
      <form className='flex justify-center items-center gap-2'>
          <input type="text" placeholder="Agrega un regalo!" className='border p-1 rounded' value={input} onChange={(e) =>setInput(e.target.value)}/>
          <button className='bg-orange-700 rounded p-1 text-white' onClick={addNewGift}>Agregar!</button>
      </form>
    </>
  )
}

export default Form