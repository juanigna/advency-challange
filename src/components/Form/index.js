import React from 'react'

const Form = () => {
  return (
    <>
      <form className='flex justify-center items-center gap-2'>
          <input type="text" placeholder="Agrega un regalo!" className='border p-1 rounded'/>
          <button className='bg-orange-700 rounded p-1 text-white'>Agregar!</button>
      </form>
    </>
  )
}

export default Form