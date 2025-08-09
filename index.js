import express from 'express'
import multer from 'multer'
// import { userLogin, userSignup } from './controller.js'
// import router from './route.js'
// import {userNameController, searchController } from './controller.js'

const storage = multer.diskStorage({
    destination:'uploads'
})

const app = express()
const upload = multer({storage:storage})

const port = 2811

app.use(express.urlencoded({extended:true}))
app.use(upload.single('image'))

app.get('/',(req,res)=>{
    res.send("Hello, Express")
})

app.post('/form',(req,res)=>{
    console.log(req.body);
    console.log(req.file);
    res.send("Form received")
})

// // Serving static files
// app.use('/public',express.static('public'))
// app.use('/images',express.static('images'))

// // SET ejs as the view engine
// app.set('view engine','ejs')

// app.METHOD(PATH,HANDLER function);
// Defining a simple route


// // Dynamic Routing

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

// // MIDDLEWARE

// app.use((req,res,next)=>{
//     console.log("Start");

//     res.on('finish',()=>{
//         console.log('End');
//     })
//     next()
// })

// app.use('/welcome',(req,res,next)=>{
//     console.log('A new request received at '+Date.now());
//     next()
// })

// app.get('/welcome',(req,res)=>{
//     res.send('Welcome to Express App')
// })

// Handling error using middleware

// app.get('/error',()=>{
//     throw new Error('This is a test error')
// })

// app.use((err,req,res,next)=>{
//     console.error(err.message)
//     res.send('Internal Server Error')
// })

app.listen(port,()=>{
    console.log(`Server is running on http://localhost:${port}`);
})
