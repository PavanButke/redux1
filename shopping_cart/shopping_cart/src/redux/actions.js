import {add_to_cart , remove_from_cart} from "./constants";

export const addCreator =(id)=>
{
    return {
        type: add_to_cart ,
        payload: id,
    }
}

export const removeCreator =(id)=>
{
    return {
        type: remove_from_cart,
        payload: id,
    }
}