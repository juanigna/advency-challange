import { useState } from "react"
import GiftContext from "./GiftContext"
import { v4 as uuidv4 } from 'uuid';

const GiftContextProvider = ({children}) => {
    const [gifts, setGifts] = useState([])
    const [quantity, setQuantity] = useState(1);
    const addGift = (newGift, quantity) => {
        if(newGift){
            if(gifts.length > 0){
                const sameName = gifts.find(gift => gift.name.toLowerCase() === newGift.toLowerCase())
                if(sameName){
                    alert("Ya agregaste esté regalo!")
                }else{
                    setGifts([...gifts, {name: newGift, id:uuidv4(), quantity:quantity}]);
                }
            }else{
                setGifts([...gifts, {name: newGift, id:uuidv4(), quantity:quantity}]);
            }
        }else{
            console.log("You should pass a gift to send!")
        }
    }

    const deleteGift = (id) => {
        const newArray = gifts.filter(gif => gif.id !== id);
        setGifts(newArray);
    }

    const deleteAll = () => {
        setGifts([]);
    }
    return(
        <GiftContext.Provider value={{gifts, addGift, setQuantity, quantity, deleteGift, deleteAll}} >
            {children}
        </GiftContext.Provider>  
    )
      
}

export default GiftContextProvider;