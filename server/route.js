import express from 'express';
import {addUser, getUsers,getUserById,updateUser,deleteUser } from './controller/user.js';

const router = express.Router();

router.get('/', getUsers);
router.post('/add',addUser);
router.get('/:id',getUserById);
router.put('/:id',updateUser);
router.delete('/:id',deleteUser);


export default router;