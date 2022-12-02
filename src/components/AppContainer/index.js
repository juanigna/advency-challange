import React, { useContext } from 'react'
import GiftContext from '../../contexts/GiftContext'
import Form from '../Form';
import GiftContainer from '../GiftContainer'

const AppContainer = () => {
    const {toggle} = useContext(GiftContext);

  return (
    <>  
        {toggle && <Form/>}
        <GiftContainer/>
    </>
  )
}

export default AppContainer