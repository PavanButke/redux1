import { useDispatch, useSelector } from "react-redux";

import {
  increamentCreator,
  decrementCreator,
  loginCreator,
  logoutCreator,
} from "./redux/actions";

let App = () => {
  let count = useSelector(function (state) {
    return state.count;
  });

  let logged = useSelector(function (state) {
    return state.logged;
  });

  let dispatch = useDispatch();

  return (
    <>
      <button
        onClick={() => {
          dispatch(loginCreator());
        }}
      >
        login
      </button>
      <button
        onClick={() => {
          dispatch(logoutCreator());
        }}
      >
        logout
      </button>
      <br></br>
      {logged ? (
        <>
          <button
            onClick={() => {
              dispatch(increamentCreator(1));
            }}
          >
            +1
          </button>
          <button
            onClick={() => {
              dispatch(increamentCreator(10));
            }}
          >
            +10
          </button>
          <p>{count}</p>
          <button
            onClick={() => {
              dispatch(decrementCreator());
            }}
          >
            -
          </button>
        </>
      ) : (
        ""
      )}
    </>
  );
};

export default App;