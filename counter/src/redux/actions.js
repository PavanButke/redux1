// actions are normal objects

//while writing actions in redux we create something called action creater function

export const increamentCreator = () =>{

    return {
        type: "INCREAMENT",
    }
}

export const decrementCreator = () =>
{
    return {
        type: "DECREMENT",
    }
}