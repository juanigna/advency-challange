import { useState } from 'react';
import './App.css';
import Form from './components/Form';

function App() {
  const [gifts, setGifts] = useState(["Netbook", "Telefono", "Mouse"])

  return (
    <div className="min-h-screen place-content-center	grid ">
      <div className='card flex flex-col gap-6 p-8'>
        <h1 className='text-5xl'>Regalos!</h1>
        <Form/>
        <div className='flex flex-col	justify-center items-center'>
          <ul>
            {
              gifts?.map(gif => (
                <li>{gif}</li>
              ))
            }
          </ul>
        </div>
      </div>
    </div>
  );
}

export default App;
