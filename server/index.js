import express from "express";
import mongoose from "mongoose";
import Routers from './route.js';
import cors from 'cors';
import bodyParser from 'body-parser';

const app = express();

app.use(bodyParser.json({extended: true }));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());

 app.use('/users',Routers);

const PORT = process.env.PORT || 5000;

const URL = 'mongodb+srv://nitesh:nitesh123@crud-app.euknz.mongodb.net/myFirstDatabase?retryWrites=true&w=majority';

mongoose.connect(URL, { useNewUrlParser: true, useUnifiedTopology: true,}).then(() => { 
    // we need .then becausew
    //it returns a promise 
    app.listen(PORT, () => console.log(`Server is running on PORT: ${PORT}`))
}).catch((error) => {
    console.log('Error:', error.message)
})