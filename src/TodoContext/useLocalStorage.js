import React,{useState,useEffect} from "react";

function useLocalStorage(itemName,initalValue){

const [error,setError] = useState(false);
const [loading,setLoading] = useState(true);
const [item,setItem] = useState(initalValue);

useEffect(()=>{
    setTimeout(()=>{
        try{
        const localStorageItem = localStorage.getItem(itemName);
        let parsedItem;

        if (!localStorageItem) {
        localStorage.setItem(itemName,initalValue)
        parsedItem = initalValue;
        } else {
        parsedItem = JSON.parse(localStorageItem);
        }

        setItem(parsedItem);
        setLoading(false);

    } catch (error) {
        setError(true)
    }
    },2000)
})

const saveItem = (newItem) => {
    try {
    setItem(newItem);
    const stringifyItem = JSON.stringify(newItem);
    localStorage.setItem(itemName, stringifyItem);
    } catch (error) {
    setError(true);
    }
}

return {
    item,
    saveItem,
    loading,
    error
}
};

export {useLocalStorage};