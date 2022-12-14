import { useEffect, useState } from "react"
import GiftContext from "./GiftContext"
import { v4 as uuidv4 } from 'uuid';

const GiftContextProvider = ({children}) => {
    const initialGifts = JSON.parse(window.localStorage.getItem("gifts")) || [];
    const [gifts, setGifts] = useState(initialGifts)
    const [quantity, setQuantity] = useState(1);
    const [toggle, setToggle] = useState(false);


    useEffect(() => {
        window.localStorage.setItem("gifts", JSON.stringify(gifts))
    },[gifts])

    const addGift = (newGift, quantity, img) => {
        if(newGift){
            if(gifts.length > 0){
                const sameName = gifts.find(gift => gift.name.toLowerCase() === newGift.toLowerCase())
                if(sameName){
                    alert("Ya agregaste esté regalo!")
                }else{
                    setGifts([...gifts, {name: newGift, id:uuidv4(), quantity:quantity, img:img}]);   
                }
            }else{
                setGifts([...gifts, {name: newGift, id:uuidv4(), quantity:quantity,img:img}]);
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

    const handleToggle = () => {
        setToggle((lastValue) => !lastValue);
    }
    return(
        <GiftContext.Provider value={{gifts, addGift, setQuantity, quantity, deleteGift, deleteAll, handleToggle, toggle}} >
            {children}
        </GiftContext.Provider>  
    )
      
}

export default GiftContextProvider;