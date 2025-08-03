import express from 'express'
// import { userLogin, userSignup } from './controller.js'
// import router from './route.js'
// import {userNameController, searchController } from './controller.js'

const app = express()

const port = 2811

app.use((req,res,next)=>{
    console.log('A new request received at '+Date.now());
    next()
})

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

// app.use('/user',router)
// app.use(express.json())

// HTTP METHODS

// app.post('/users',(req,res)=>{
//     const {name,email} = req.body;
//     res.json({
//         message: `User ${name} with email ${email} created successfully`
//     })
// })

// app.put('/users/:id',(req,res)=>{
//     const userId = req.params.id;
//     const {name,email} =req.body;
//     res.json({
//         message:`User ${userId} updated to ${name}, ${email}`
//     })
// })

// app.delete('/users/:id',(req,res)=>{
//     const userId=req.params.id;
//     res.json({
//         message: `User with ID ${userId} deleted successfully`
//     })
// })

// app.get('/things/:name/:id',(req,res)=>{
//     const {name,id}=req.params
//     if (!/^\d{5}$/.test(id)) {
//       return res.status(404).json({ error: 'ID must be exactly 5 digits' });
//     }
//     res.json({
//         id,
//         name
//     })
// })

// // Catching all invalid routes
// app.get('*any',(req,res)=>{
//     res.send('Sorry, Invalid URL..')
// })

app.listen(port,()=>{
    console.log(`Server is running on http://localhost:${port}`);
})
