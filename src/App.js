import { useContext, useState } from 'react';
import './App.css';
import AppContainer from './components/AppContainer';
import Form from './components/Form';
import Gift from './components/Gift';
import GiftContainer from './components/GiftContainer';
import GiftContext from './contexts/GiftContext';
import GiftContextProvider from './contexts/GiftContextProvider';

function App() {
  return (
    <GiftContextProvider>
      <div className="min-h-screen w-screen place-content-center	grid ">
        <div className='w-screen'>
          <div className='card flex flex-col gap-6 p-3'>
            <h1 className='text-5xl'>Regalos!</h1>
            <AppContainer/>
          </div>
        </div>
      </div>
    </GiftContextProvider>
  );
}

export default App;
