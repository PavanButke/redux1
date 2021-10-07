
import AppBar from '@mui/material/AppBar';

import Toolbar from '@mui/material/Toolbar';

import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import HomeIcon from '@mui/icons-material/Home';

import * as React from 'react';
import SearchIcon from '@mui/icons-material/Search';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import Stack from '@mui/material/Stack';
import DeleteIcon from '@mui/icons-material/Delete';
import IconButton from '@mui/material/IconButton';


import Product from "./product";
import "./home.css";

const Home = () =>
{
    return( 
    <>

        <h2>Top Breeds to Adopt</h2> 
        <div className="product-container">
          <Product/>

      </div>



        <div className="footer">
           
       
        

        <AppBar position="relative" >
            
          <Container maxWidth="md" p>
            <Toolbar align-items="center">
                
               
                 {/* <HomeIcon sx={{ fontSize: 40 }}  /> */}
                 <Stack direction="row" spacing={1}>
                  <IconButton aria-label="home">
                 <HomeIcon href="/home"/>

                 </IconButton>
                  </Stack>
                 <Typography style={{ marginRight: 300   }}></Typography>

                 < FavoriteBorderIcon  sx={{ fontSize: 40 }} />
                 <Typography style={{ marginRight: 250 }}></Typography>
                 <SearchIcon sx={{ fontSize: 40 }} />
                 <Typography style={{ marginRight: 450 }}></Typography>
               

          
       
        
            </Toolbar>
          </Container>
        </AppBar>

            </div>
          

    </>
    );
    
};

export default Home ;
