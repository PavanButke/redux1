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
           
      
            ></AddShoppingCartSharpIcon>
          <Typography style={{ marginRight: 30 }}></Typography>


        </Toolbar>
      </AppBar>
    </Box>
  


    </>
    )
}

export default Navbar;