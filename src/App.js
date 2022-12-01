import { useState } from 'react';
import './App.css';
import Form from './components/Form';
import Gift from './components/Gift';
import GiftContainer from './components/GiftContainer';
import GiftContextProvider from './contexts/GiftContextProvider';

function App() {
  
  return (
    <GiftContextProvider>
      <div className="min-h-screen place-content-center	grid ">
        <div className='card flex flex-col gap-6  w-full	p-3'>
          <h1 className='text-5xl'>Regalos!</h1>
          <Form/>
          <GiftContainer/>
        </div>
      </div>
    </GiftContextProvider>
  );
}

export default App;
