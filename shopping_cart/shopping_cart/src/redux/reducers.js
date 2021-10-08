import {add_to_cart , remove_from_cart} from "./constants";

let initialState =
[
{

    id: 0,
    name: "rocky",
    img: "",
    donation: "3500/-",
    qty: 0,

},

{

    id: 1,
    name: "Chinu",
    img: "",
    donation: "3000/-",
    qty: 0,

},
]


let reducer = (state = initialState, action) => {
    switch (action.type) {
      case ADD_TO_CART:
        let cp = state.map((el) => el);
        let id = action.payload;
        cp[id].qty = cp[id].qty + 1;
        return cp;
  
      case REMOVE_FROM_CART:
        let cp = state.map((el) => el);
        let id = action.payload;
        if (cp[id].qty > 0) cp[id].qty = cp[id].qty - 1;
        return cp;
  
      default:
        return state;
    }
  };
  
  export default reducer;