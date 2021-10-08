
import * as React from 'react';

import AppBar from '@mui/material/AppBar';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';

import Toolbar from '@mui/material/Toolbar';

import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import HomeIcon from '@mui/icons-material/Home';

import SearchIcon from '@mui/icons-material/Search';

import Stack from '@mui/material/Stack';
import IconButton from '@mui/material/IconButton';




let Cart = () =>
{
    return ( <> 
            
            <table class="table">
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">Product Name</th>
            <th scope="col">Price</th>
            <th scope="col">Qty</th>
            <th scope="col">Amount</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {filteredArr.map((el, index) => {
            let amount = el.qty * el.price;
            total += amount;
            return (
              <tr>
                <td>{index + 1}</td>
                <td>{el.name}</td>
                <td>Rs {el.price}</td>
                <td>{el.qty}</td>
                <td>Rs {amount}</td>
                <td>
                  <button
                    onClick={() => {
                      dispatch(removeCreator(el.id));
                    }}
                  >
                    Remove
                  </button>
                </td>
              </tr>
            );
          })}

          <tr>
            <td></td>
            <td></td>
            <td></td>
            <td>Total</td>
            <td>{total}</td>
          </tr>
        </tbody>
      </table>
 


    <div className="footer">
           
       
        

        <AppBar position="relative" >
            
          <Container maxWidth="md" p>
            <Toolbar align-items="center">
                
               
                 {/* <HomeIcon sx={{ fontSize: 40 }}  /> */}
                 <Stack direction="row" spacing={1}>
                  <IconButton aria-label="home" href="/home"    >
                 <HomeIcon />

                 </IconButton>
                  </Stack>
                 <Typography style={{ marginRight: 300   }}></Typography>

                 {/* < FavoriteBorderIcon  sx={{ fontSize: 40 }} /> */}
                 <Stack direction="row" spacing={1}>
                  <IconButton aria-label="FavoriteBorderIcon" href="/Preview"    >
                 <FavoriteBorderIcon />

                 </IconButton>
                  </Stack>




                 <Typography style={{ marginRight: 250 }}></Typography>
                <Stack direction="row" spacing={1}>
                  <IconButton aria-label="FavoriteBorderIcon"     >
                 <SearchIcon />

                 </IconButton>
                  </Stack>
                 <Typography style={{ marginRight: 450 }}></Typography>
               

          
       
        
            </Toolbar>
          </Container>
        </AppBar>

            </div>
          



    
    </>
    )
}
 export default Cart;