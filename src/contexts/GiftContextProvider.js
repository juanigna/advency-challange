import { useState } from "react"
import GiftContext from "./GiftContext"
import { v4 as uuidv4 } from 'uuid';

const GiftContextProvider = ({children}) => {
    const [gifts, setGifts] = useState([])

    const addGift = (newGift) => {
        if(newGift){
            if(gifts.length > 0){
                const sameName = gifts.find(gift => gift.name.toLowerCase() === newGift.toLowerCase())
                if(sameName){
                    alert("Ya agregaste esté regalo!")
                }else{
                    setGifts([...gifts, {name: newGift, id:uuidv4()}]);
                }
            }else{
                setGifts([...gifts, {name: newGift, id:uuidv4()}]);
            }
        }else{
            console.log("You should pass a gift to send!")
        }
    }

    return(
        <GiftContext.Provider value={{gifts, addGift}} >
            {children}
        </GiftContext.Provider>  
    )
      
}

export default GiftContextProvider;