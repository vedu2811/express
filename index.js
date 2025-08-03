import express from 'express'
// import { userLogin, userSignup } from './controller.js'
import router from './route.js'
// import {userNameController, searchController } from './controller.js'

const app = express()

const port = 2811

// app.METHOD(PATH,HANDLER function);

// Defining a simple route
app.get('/',(req,res)=>{
    res.send('Hello, Express')
})

// Dynamic Routing
// app.get('/user/:username',userNameController)

// Query String 
// /search?keyword=express
// app.get('/search',searchController)

// // About Route
// app.get('/about',(req,res)=>{
//     res.send('This is about route')
// })

// // Contact Route
// app.get('/contact',(req,res)=>{
//     res.send('This is contact route')
// })

// app.get('/user/login',userLogin)
// app.get('/user/signup',userSignup)

app.use('/user',router)

app.post('/users',express.json(),(req,res)=>{
    const {name,email} = req.body;
    res.json({
        message: `User ${name} with email ${email} created successfully`
    })
})

app.listen(port,()=>{
    console.log(`Server is running on http://localhost:${port}`);
})