import { useState } from 'react';
import './App.css';
import Form from './components/Form';
import Gift from './components/Gift';
import GiftContainer from './components/GiftContainer';

function App() {
  const [gifts, setGifts] = useState(["Netbook", "Telefono", "Mouse"])

  return (
    <div className="min-h-screen place-content-center	grid ">
      <div className='card flex flex-col gap-6 p-8 w-full	'>
        <h1 className='text-5xl'>Regalos!</h1>
        <Form/>
        <GiftContainer gifts={gifts}/>
        
      </div>
    </div>
  );
}

export default App;
