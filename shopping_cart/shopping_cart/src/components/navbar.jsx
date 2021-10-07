import { styled, alpha } from '@mui/material/styles';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';

import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import InputBase from '@mui/material/InputBase';
import MenuIcon from '@mui/icons-material/Menu';
import SearchIcon from '@mui/icons-material/Search';
import AddShoppingCartSharpIcon from '@mui/icons-material/AddShoppingCartSharp';
import Avatar from '@mui/material/Avatar';
import Stack from '@mui/material/Stack';
import Badge from '@mui/material/Badge';

import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import PopupState, { bindTrigger, bindMenu } from 'material-ui-popup-state';

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
            <h1>HomePage</h1>
            <h5> Welcome to Breedy.com</h5>
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
          <Typography style={{ marginRight: 30 }}></Typography>
          <AddShoppingCartSharpIcon 
             style={{ fontSize: 40 , }}
             sx={{
                bgcolor: 'primary',
                '&:hover': {
                backgroundColor: 'primary.main',
                opacity: [0.9, 0.5, 0.7],
              },
                
          
            }}
           
      
            >
                 <Link  class="AppBar" to='/'></Link>

            </AddShoppingCartSharpIcon>
          <Typography style={{ marginRight: 30 }}></Typography>

          <Stack direction="row" spacing={2}>
        <Avatar
          alt="Remy Sharp"
        src="data:image/jpeg;base64,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"
        sx={{ width: 56, height: 56 }}
      />
        {/* <Badge color="secondary" overlap="circular" badgeContent="" variant="dot">
        </Badge>
       */}
      </Stack>
   </Toolbar>
            
      </AppBar>
    </Box>

    <PopupState variant="popover" popupId="demo-popup-menu">
        
        {(popupState) => (
          <React.Fragment>
            <Button variant="contained" {...bindTrigger(popupState)}>
              Dashbord
            </Button>
            <Menu {...bindMenu(popupState)}>
            
              <MenuItem onClick={popupState.close}>Profile</MenuItem>
              <MenuItem onClick={popupState.close}>My account</MenuItem>
              <MenuItem onClick={popupState.close}>Logout</MenuItem>
            </Menu>
          </React.Fragment>
        )}
      </PopupState>   
              

    </>
    )
}

export default Navbar;