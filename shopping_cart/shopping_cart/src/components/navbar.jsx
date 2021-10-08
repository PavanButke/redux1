import { styled, alpha } from '@mui/material/styles';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';

import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import InputBase from '@mui/material/InputBase';
import MenuIcon from '@mui/icons-material/Menu';
import SearchIcon from '@mui/icons-material/Search';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import Avatar from '@mui/material/Avatar';
import Stack from '@mui/material/Stack';
import Badge from '@mui/material/Badge';
import Button from '@mui/material/Button';
// import DeleteIcon from '@mui/icons-material/Delete';
 

import "./navbar.css" 


import {Link} from "react-router-dom";

const Search = styled('div')(({ theme }) => ({
  position: 'relative',
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  '&:hover': {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  marginLeft: 0,
  width: '100%',
  [theme.breakpoints.up('sm')]: {
    marginLeft: theme.spacing(1),
    width: 'auto',
  },

}));

const SearchIconWrapper = styled('div')(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: '100%',
  position: 'absolute',
  pointerEvents: 'none',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
}));

let Navbar = () =>
{
    return( 

      <>

    <Box sx={{ flexGrow: 1 }}
        position= "static"
        
   
    >
      <AppBar position="relative">
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="open drawer"
            sx={{ mr: 2 }}
          >
            <MenuIcon />
            
          </IconButton>
          <Typography
            variant="h6"
            noWrap
            component="div"
            sx={{ flexGrow: 1, display: { xs: 'none', sm: 'block' } }}
          >
            <img className="image" src="data:image/jpeg;base64,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"
         
             ></img>
            <h5 href='/home'> Welcome to Breedy.com</h5>
          </Typography>
       
            
          <Search   position= "absolute">
            <SearchIconWrapper>
              <SearchIcon />
            </SearchIconWrapper>
            <InputBase
              placeholder="Search…"
              inputProps={{ 'aria-label': 'search' }}
            

            />
            
          </Search>
          {/* <Stack direction="row" spacing={2} >
             <Button variant="contained" startIcon={<ShoppingCartIcon />} href='/cart'>
              </Button>
      </Stack> */}
    <Typography style={{ marginRight: 30 }}></Typography>
      <Stack direction="row" spacing={2} >
             <Button variant="circular" startIcon={<ShoppingCartIcon />} href='/cart'>
              </Button>
              
    </Stack>
          
          {/* <Stack direction="row" spacing={2}>
          <Button href="/Cart" Icon={<AddShoppingCartSharpIcon
             style={{ fontSize: 40 , }}
             sx={{
                bgcolor: 'primary',
                '&:hover': {
                backgroundColor: 'primary.main',
                opacity: [0.9, 0.5, 0.7],
              },
                
          
             }}
         
      
            >
          

            </AddShoppingCartSharpIcon> 
          }
           > </Button> 
            </Stack> */}
       
          <Typography style={{ marginRight: 30 }}></Typography>
          

          <Stack direction="row" spacing={2}>
        <Avatar
          alt="Remy Sharp"
        src="data:image/jpeg;base64,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"
        sx={{ width: 56, height: 56 }}
      />
        <Badge color="secondary" overlap="circular" badgeContent="" variant="dot">
        </Badge>
      
      </Stack>
   </Toolbar>
            
      </AppBar>
    </Box>


              

    </>
    )
}

export default Navbar;