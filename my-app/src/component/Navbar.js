import React from 'react'
import  {AppBar, Toolbar} from '@mui/material';
import {Link} from 'react-router-dom';

function Navbar() {
    return (
        <>
         <AppBar style={{position:'static', background:'black'}}>
            <Toolbar>
            <Link to='/'  style={{color:'white', marginRight:'9px', textDecoration:'none', fontSize:'18px'}} variant="h6">Navbar</Link>
             <Link to='/all' style={{color:'white', marginRight:'9px', textDecoration:'none', fontSize:'18px'}} variant="h6">All-User</Link>
             <Link to='/add'  style={{color:'white', marginRight:'9px', textDecoration:'none', fontSize:'18px'}}variant="h6">Add-User</Link>
            </Toolbar>
         </AppBar>
        </>
    )
}

export default Navbar
