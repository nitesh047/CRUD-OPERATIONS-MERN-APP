import React from 'react'
import { useState,useEffect } from 'react';
import { Table, TableHead, TableCell, Paper, TableRow, TableBody, Button, makeStyles, TableContainer } from '@mui/material'
import { deleteUsers, getUsers } from '../Service/api';
import {Link} from 'react-router-dom';
 

 

const All = () => {

    const [users,setUsers]  = useState([]);

    useEffect(()=>{
         getAllUsers();
    },[])

    const getAllUsers = async () =>{
        let response = await getUsers();
         console.log(response.data);
        setUsers(response.data);

    }

    const deleteUser=async (id) =>{
        await deleteUsers(id);
        getAllUsers();
    }

  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
        <TableRow  >
                    <TableCell>Id</TableCell>
                    <TableCell>Name</TableCell>
                    <TableCell>Username</TableCell>
                    <TableCell>Email</TableCell>
                    <TableCell>Phone</TableCell>
                    <TableCell></TableCell>
                </TableRow>
        </TableHead>
        <TableBody>
                {users.map((user) => (
                    <TableRow   key={user._id}>
                        <TableCell>{user._id}</TableCell>
                        <TableCell>{user.name}</TableCell>
                        <TableCell>{user.username}</TableCell>
                        <TableCell>{user.email}</TableCell>
                        <TableCell>{user.phone}</TableCell>
                        <TableCell>
                            <Button color="primary" variant="contained" component={Link} to={`/edit/${user._id}`} style={{marginRight:10}}>Edit</Button>
                            <Button color="secondary" variant="contained" onClick={()=>deleteUser(user._id)} >Delete</Button> 
                        </TableCell>
                    </TableRow>
                ))}
            </TableBody>
      </Table>
    </TableContainer>
  );
}

export default All;