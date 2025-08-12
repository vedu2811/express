import express from "express";
// import bcrypt from "bcryptjs";
// import jwt from "jsonwebtoken";
// import cookieParser from "cookie-parser";
// import session from "express-session";
// import { connectDB } from './config/db.js'
// import { Person } from './models/person.js'
// import multer from 'multer'
// import { storage } from './config/multer.js'
// import { userLogin, userSignup } from './controller.js'
// import router from './route.js'
// import {userNameController, searchController } from './controller.js'

const app = express();
// const upload = multer({
//     storage:storage,
//     limits: {
//         fileSize:1024000
//     }
// })

const port = 2811;
app.use(express.json());
// app.use(cookieParser());
// app.use(
//   session({
//     secret: "sample-secret",
//     resave: false,
//     saveUninitialized: false,
//   })
// );

// const users = [];  // USED FOR AUTHENTICATION

// await connectDB()

// app.use(express.json())

// app.use(express.urlencoded({extended:true}))
// app.use(upload.single('image'))

app.get("/", (req, res) => {
  // res.cookie('name','express-app',{maxAge:360000})
  res.send("Hello, Express");
});

// GET ALL Product
app.get("/api/products", (req, res) => {
  const products = [
    { id: 1, name: "laptop", price: 100000 },
    { id: 2, name: "mobile", price: 10000 },
  ];
  res.status(200).json({ products });
});

// GET a SINGLE Product
app.get("/api/products/:id", (req, res) => {
  const products = [
    { id: 1, name: "laptop", price: 100000 },
    { id: 2, name: "mobile", price: 10000 },
  ];
  const product = products.find((p) => p.id === Number(req.params.id));

  if (!product) {
    return res.status(404).json({ message: "Product Not Found" });
  }
  res.status(200).json(product);
});

// // Using JWT (Json Web Token) for authentication
// app.post("/register", async (req, res) => {
//   const { username, password } = req.body;
//   const hashedPassword = await bcrypt.hash(password, 10);
//   users.push({
//     username,
//     password: hashedPassword,
//   });
//   res.send("User Registered");
// });

// app.post("/login", async (req, res) => {
//   const { username, password } = req.body;
//   const user = users.find((u) => u.username === username);
//   if (!user || !(await bcrypt.compare(password, user.password))) {
//     return res.send("Invalid credentials");
//   }
//   const token = jwt.sign({ username: username }, "test#secret");
//   res.json({ token });
// });

// app.get("/dashboard", (req, res) => {
//   try {
//     const token = req.header("Authorization");
//     const decodedToken = jwt.verify(token, "test#secret");
//     if (decodedToken.username) {
//       res.send(`Welcome, ${decodedToken.username}`);
//     } else {
//       res.send("Access Denied");
//     }
//   } catch (error) {
//     res.send("Access Denied");
//   }
// });

// Using sessions for user Authentication
// app.post("/register", async (req, res) => {
//   const { userName, passWord } = req.body;
//   users.push({
//     userName,
//     passWord,
//   });
//   res.send("User Registered");
// });

// app.post("/login", async (req, res) => {
//   const { userName, passWord } = req.body;
//   const user = users.find((u) => u.userName === userName);
//   if (!user || passWord !== user.passWord) {
//     res.send("Invalid Credentials..");
//   }
//   req.session.user = user;
//   res.send("User Logged In..");
// });

// app.get("/dashboard", (req, res) => {
//   if (!req.session.user) {
//     res.send("Unauthorized");
//   } else {
//     res.send(`Welcome, ${req.session.user.userName}`);
//   }
// });

// app.get('/visit',(req,res)=>{
//     if(req.session.page_views){
//         req.session.page_views++;
//         res.send(`You visited this page ${req.session.page_views} times`)
//     }else{
//         req.session.page_views = 1
//         res.send("Welcome to this page for the first time")
//     }
// })

// app.get('/remove-visit',(req,res)=>{
//     req.session.destroy()
//     res.send('Session removed')
// })

// app.get('/fetch',(req,res)=>{
//     console.log(req.cookies);
//     res.send('API called')
// })

// app.get('/remove-cookie',(req,res)=>{
//     res.clearCookie('name')
//     res.send('Cookie cleared')
// })

// // Saving data in MONGO DB
// app.post('/person',async (req,res)=>{
//     // console.log(req.body);
//     try{
//         const {email,name,age}=req.body;
//         const newPerson = new Person({
//             name,
//             age,
//             email
//         })
//         await newPerson.save()
//         console.log(newPerson);

//         res.send('Person Added')
//     }catch(err){
//         res.send(err.message)
//     }
// })

// // Updating data in MONGO DB
// app.put('/person',async (req,res)=>{
//     // console.log(req.body);
//     const {id}=req.body;

//     const personData=await Person.findByIdAndUpdate(id,{age:'28'})

//     console.log(personData);

//     res.send('Person Updated')
// })

// // Deleting data from MONGO DB
// app.delete('/person/:id', async (req,res)=>{
//     const{id}=req.params
//     await Person.findByIdAndDelete(id)
//     res.send('Person Deleted')
// })

// app.post('/form',(req,res)=>{
//     console.log(req.body);
//     console.log(req.file);
//     res.send("Form received")
// })

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

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
