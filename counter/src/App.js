import {useDispatch, useSelector} from "react-redux";

import  {increamentCreator , decrementCreator} from "./redux/actions";




let  App =()=> {
  let state= useSelector(function(state){
    return state

  });

  let dispatch = useDispatch();

  return(
    <>
    <button  onClick = {() =>{
        dispatch(increamentCreator());
    }}>
        +
    </button>
    <p>{state}</p>

    <button  onClick = {() =>{
        dispatch(decrementCreator());
    }}>
        -
    </button>

    </>
  ) ;
  
};

export default App;
