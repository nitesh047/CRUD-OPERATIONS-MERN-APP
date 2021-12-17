import React ,{useEffect, useState} from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import { useHistory } from 'react-router';
// import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { addUser, editUser, getUsers } from '../Service/api';
import {useParams} from 'react-router-dom';
 
const theme = createTheme();

const initialValue = {name: '',username: '',email: '',phone: ''}

const Edit=() => {

    const history = useHistory();

   const [user,setUser] = useState(initialValue);
   const { name, username, email, phone } = user;
   const {id} = useParams();

useEffect(()=>{
    console.log("1");

   loadUser();
},[])

const onValueChange = (e) => {
    console.log(user);
    setUser({...user, [e.target.name]: e.target.value})
}

const loadUser = async () => {
    
    console.log("2");
    let response =  await getUsers(id);
    console.log("3");
    console.log(response.data);
    setUser(response.data);
  }

  const editUserDetails= async () =>{

     const response =  await editUser(id,user);
    //  console.log(response);
    history.push('/all')
  }

  return (
    <ThemeProvider theme={theme}>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Box
          sx={{
            marginTop: 8,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          
          <Typography component="h1" variant="h5">
            Edit User
          </Typography>
          <Box component="form" noValidate sx={{ mt: 1 }}>
            <TextField
              margin="normal"
              required
              fullWidth
              id="name"
              label="Name"
              name="name"
              value={name}
              autoComplete="name"
              autoFocus
             onChange={(e) => onValueChange(e)}
            />
              <TextField
              margin="normal"
              required
              fullWidth
              id="userName"
              label="Username"
              name="username"
              value={username}
              autoComplete="Username"
              autoFocus
             onChange={(e) => onValueChange(e)}
            />
             <TextField
              margin="normal"
              required
              fullWidth
              value={email}
              id="email"
              label="Email"
              name="email"
              autoComplete="email"
              autoFocus
             onChange={(e) => onValueChange(e)}
            />
             <TextField
              margin="normal"
              required
              fullWidth
              id="phone"
              value={phone}
              label="Phone"
              name="phone"
              autoComplete="phone"
              autoFocus
             onChange={(e) => onValueChange(e)}
            />
            <Button
             
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
              onClick={() => editUserDetails(user.id)}
            >
              Edit User
            </Button>
             
          </Box>
        </Box>
       
      </Container>
    </ThemeProvider>
  );


}

export default Edit; 