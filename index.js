import express from 'express'

const app = express()

const port = 2811

// Define a simple route
// app.METHOD(PATH,HANDLER function);
app.get('/',(req,res)=>{
    res.send('Hello, Express')
})

app.listen(port,()=>{
    console.log(`Server is running on http://localhost:${port}`);
})