import axios from 'axios';

const url = 'http://localhost:5000/users';

export const getUsers = async (id) =>{
    id = id || '';
   return await axios.get(`${url}/${id}`);
}

// export const getUsers = async (id) => {
//     id = id || '';
//     return await axios.get(`${usersUrl}/${id}`);
// }

export const addUser = async (user) => {
    return await axios.post(`${url}/add`,user);
}

export const editUser = async (id,user) => {
    return await axios.put(`${url}/${id}`,user);
}

export const deleteUsers = async (id) =>{
    return await axios.delete(`${url}/${id}`);
}