const express = require('express');
const app = express();
const port = 4000;
const route = require('./routes/routes.js')
const path = require('path')
const connectDB = require('./connectDB/connectDB.js');
const bodyParser = require('body-parser');


// Connection for Database
connectDB()

// body-parser
app.use(bodyParser.urlencoded({extended:false}));
// Initially I write this
// app.get('/', (req, res)=>{
//     res.send("Hello adnan");
// })

// setup for static files

app.use(express.static(path.join(process.cwd(),'public')))

// setup for ejs template file
app.set('view engine', 'ejs')
app.set('views', './views')

// routes
app.use('/', route);





app.listen(port, ()=>{
    console.log("Post is listen at ", port);
})