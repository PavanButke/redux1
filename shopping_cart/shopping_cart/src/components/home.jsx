
import AppBar from '@mui/material/AppBar';

import Toolbar from '@mui/material/Toolbar';

import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import HomeIcon from '@mui/icons-material/Home';
import PropTypes from 'prop-types';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';

import Avatar from '@mui/material/Avatar';
import Grid from '@mui/material/Grid';
import Skeleton from '@mui/material/Skeleton';


import * as React from 'react';
import SearchIcon from '@mui/icons-material/Search';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import Stack from '@mui/material/Stack';
import DeleteIcon from '@mui/icons-material/Delete';
import IconButton from '@mui/material/IconButton';


import Product from "./product";
import "./home.css";

const Image = styled('img')({
  width: '100%',
});

function SkeletonChildrenDemo(props) {
  const { loading = false } = props;

  return (
  

    <div>

      <Box sx={{ display: 'flex', alignItems: 'center' }}>
        <Box sx={{ margin: 1 }}>
          {loading ? (
            <Skeleton variant="circular">
              <Avatar />
            </Skeleton>
          ) : (
            <Avatar src="data:image/jpeg;base64,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" />
          )}
        </Box>
        <Box sx={{ width: ' 100%' }}>
          {loading ? (
            <Skeleton width="100%">
              <Typography>.</Typography>
            </Skeleton>
          ) : (
            <Typography>Ted</Typography>
          )}
        </Box>
      </Box>
      {loading ? (
        <Skeleton variant="rectangular" width="100%">
          <div style={{ paddingTop: '57%' }} />
        </Skeleton>
      ) : (
        <Image
          src="https://i.ytimg.com/vi/DeDcWpvtEVw/maxresdefault.jpg"
          alt=""
        />
      )}
    </div>
  );
}

SkeletonChildrenDemo.propTypes = {
  loading: PropTypes.bool,
};


const Home = () =>
{
    return( 
    <>
         <Grid container spacing={8}>
      <Grid item xs>
        <SkeletonChildrenDemo loading />
      </Grid>
      <Grid item xs>
        <SkeletonChildrenDemo />
      </Grid>
    </Grid>

    
        <h2>Top Breeds to Adopt</h2> 
        <div className="product-container">
          <Product/>

      </div>



      <div className="footer" >
           
       
        

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
                     <IconButton aria-label="FavoriteBorderIcon" href="/Cart"    >
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
    );
    
};

export default Home ;
