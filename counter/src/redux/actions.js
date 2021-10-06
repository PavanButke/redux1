// actions are normal objects

//while writing actions in redux we create something called action creater function

export const increamentCreator = (value) =>{

    return {
        type: "INCREAMENT",
        payload: value ,

    };
};
export const decrementCreator = () =>
{
    return {
        type: "DECREMENT",
    }
}

export const loginCreator = ()=>{

    return {
        type: "LOGIN",
    }
}

export const logoutCreator =()=>{
    return {
        type : "LOGOUT",
    }
}

