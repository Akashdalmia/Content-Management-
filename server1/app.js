const express = require('express');
const app =express();
const cors = require('cors')
const bodyParser = require('body-parser');
const morgan = require('morgan');
const usersRoute = require('./routes/users.js');
const postsRoute = require('./routes/posts');

app.use(cors());
app.use(express.json({extended:false}));
app.use(express.urlencoded({extended:false}));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.json());
app.use(morgan('tiny'));

// app.use((req,res,next)=>{
//    // console.log(store);
//     console.log(`${req.method} - ${req.url}`);
//     next()
// });

// app.all('*', (req, res, next) => {
//     res.header("Access-Control-Allow-Origin", "https://localhost:8000");
//     res.setHeader('Access-Control-Allow-Headers', 'Access-Control-Allow-Headers, Origin,Accept, X-Requested-With, Content-Type, Access-Control-Request-Method, Access-Control-Request-Headers,X-Access-Token,XKey,Authorization');

//     next();
// });

app.get('/*',usersRoute);
app.post('/*',usersRoute);

//app.use('/posts',postsRoute);

const PORT =    process.env.PORT || 8000;
app.listen(PORT,() => { console.log(`your application is running in $(PORT)`)});








// app.get(`/`, async(req, res) => {
//     res.send(200);
//     //const data = await User.find()
//     //res.status(200).json({ 'status': true })
// });

// app.get(`/User`, (req, res) => {
//     res.status(200).send(user);
   
// });




// const user=[
//     {name:'akash' ,age:22},
//     {name:'amit' ,age:22}   
// ]


// app.post('/',(req,res)=>{
//     console.log(req.body);
//     res.status(201).send('created user');
// });

