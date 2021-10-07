// import logo from './logo.svg';
// import './App.css';
// import { AppBar} from '@mui/material';
import AppBar from '@mui/material/AppBar';
// import Box from '@mui/material/Box';
// import Toolbar from '@mui/material/Toolbar';
// import Typography from '@mui/material/Typography';
// import IconButton from '@mui/material/IconButton';
// import MenuIcon from '@mui/icons-material/Menu';
// import AccountCircle from '@mui/icons-material/AccountCircle';
// import Switch from '@mui/material/Switch';
// import FormControlLabel from '@mui/material/FormControlLabel';
// import FormGroup from '@mui/material/FormGroup';
// import MenuItem from '@mui/material/MenuItem';
// import Menu from '@mui/material/Menu';
import Navbar from "./components/navbar";
import Home from "./components/home"
import Cart from "./components/cart"
import Preview from "./components/preview"

import {BrowserRouter as Router , Switch , Route } from "react-router-dom"
let App = () =>{
  return (
    <>
    <Router>

    <Navbar/>
    <Switch>

      <Route path="/cart">
        <Cart/>
      </Route>
      <Route path="/preview">
        <Preview/>
      </Route>


      <Route path="/">
      <Home/>
      </Route>
            
    </Switch>
    </Router>

    </>
  );
}

export default App;
