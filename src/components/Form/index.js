import React, { useContext, useState } from 'react'
import GiftContext from '../../contexts/GiftContext'


const Form = () => {
  const [input, setInput] = useState("");
  const [imgText, setImg] = useState("");
  const {addGift, setQuantity, quantity} = useContext(GiftContext)
  const {setToggle} = useContext(GiftContext)

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
      <form className='flex justify-center items-center gap-2 form-pop'>
          <h1 className='text-3xl my-5	'>Agrega tu regalo a la lista!</h1>
          <input type="text" placeholder="Agrega un regalo!" className='text-center w-full outline outline-offset-1 outline-1  p-1 rounded' value={input} onChange={(e) =>setInput(e.target.value)}/>
          <input type="text" placeholder='https://image' className='text-center w-full border p-1 rounded outline outline-offset-1 outline-1' value={imgText} onChange={(e) => setImg(e.target.value)}/>
          <input type="number" className="[appearance:textfield] w-full text-center m-4 bg-gray-100 rounded p-1 outline outline-offset-1 outline-1" min="1" max="100" placeholder="Ingrese la cantidad!" onChange={handleChangeQy} />
          <button className='bg-orange-700 rounded p-1 text-white w-full' onClick={(e) => addNewGift(e,quantity,imgText)}>Agregar!</button>
          <button className='bg-orange-700 rounded p-1 text-white w-full' onClick={setToggle}>Cerrar</button>
      </form>
    </>
  )
}

export default Form