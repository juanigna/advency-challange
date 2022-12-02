import React, { useContext, useState } from 'react'
import GiftContext from '../../contexts/GiftContext'

const Form = () => {
  const [input, setInput] = useState("");
  const [imgText, setImg] = useState("");
  const {addGift, setQuantity, quantity} = useContext(GiftContext)

  const handleChangeQy = e => {
    setQuantity(e.target.value)
  }

  const addNewGift = (e, quantity,imgText) => {
    e.preventDefault();
    addGift(input, quantity, imgText);
    setInput("");
    setImg("");
  }

  
  return (
    <>
      <form className='flex justify-center items-center gap-2 p-2'>
          <input type="text" placeholder="Agrega un regalo!" className=' outline outline-offset-1 outline-1  p-1 rounded' value={input} onChange={(e) =>setInput(e.target.value)}/>
          <input type="text" placeholder='https://image' className='border p-1 rounded outline outline-offset-1 outline-1' value={imgText} onChange={(e) => setImg(e.target.value)}/>
          <input type="number" className="[appearance:textfield] m-4 bg-gray-100 rounded p-1 outline outline-offset-1 outline-1" min="1" max="100" onChange={handleChangeQy} />
          <button className='bg-orange-700 rounded p-1 text-white' onClick={(e) => addNewGift(e,quantity,imgText)}>Agregar!</button>
      </form>
    </>
  )
}

export default Form