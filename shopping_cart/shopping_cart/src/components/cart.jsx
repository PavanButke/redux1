
import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import AppBar from '@mui/material/AppBar';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';

import Toolbar from '@mui/material/Toolbar';

import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import HomeIcon from '@mui/icons-material/Home';

import SearchIcon from '@mui/icons-material/Search';

import Stack from '@mui/material/Stack';
import DeleteIcon from '@mui/icons-material/Delete';
import IconButton from '@mui/material/IconButton';




function createData(Name_of_Doggy, age, Breed) {
    return { Name_of_Doggy, age, Breed};
  }
  
  const rows = [
    createData('Ronnie', 25, "Labrador", ),
    createData('Tikku', 20,"GermanShepherd" ),
    createData('Eclair', 26, "Rotweiller"),
    createData('Cupcake', 30, "Desi"),
    createData('choco', 35, "Labrador"),
  ];

let Cart = () =>
{
    return ( <> 
            
            <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell align="right" >Name_of_Doggy</TableCell>
            <TableCell align="right" >Age(in days)&nbsp;</TableCell>
            <TableCell align="right">Breed&nbsp;</TableCell>
            
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow
              key={row.name}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {row.name}
              </TableCell>
              <TableCell align="right">{row.age}</TableCell>
              <TableCell align="right">{row.Breed}</TableCell>

            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>


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
    )
}
 export default Cart;