const  express= require('express');
const ConnectDB = require('./db/Connection.js');
const mongoose = require('mongoose');
const {User} = require('./db/User');
const bodyParser = require('body-parser');
const cors = require('cors')
const app =express();

ConnectDB();
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.post('/save_data',async(req,res)=>{
    //const {title,description,image} =req.body;
    console.log('saving data',req.body)
    console.log(req.body.title)
    console.log(req.body.description)
    console.log(req.body.image)

    var user = new User({
        title:req.body.title,
        description:req.body.description,
        image:req.body.image,
    })
    console.log(user);
    const data = await user.save();
    if(data){
        return res.status(200).json({'success':true,'data':data})
    }
    return res.status(400).json({'success':false,'data':data})

});

app.get(`/get_data`,async(req,res)=>{
    //const {title,description,image} =req.body;
    const data = await User.find()
    console.log(data)
    if(data){
        return res.status(200).json({'success':true,'data':data})
    }
    return res.status(400).json({'success':false,'data':data})
});

app.use(express.json({extended:false}));
//app.post('/api/usermodel',save_data);
app.get(`/`, async(req, res) => {
    const data = await User.find()
    res.status(200).json({ 'status': true })
})
const PORT = process.env.PORT || 5000;
app.listen(PORT,() => { console.log(`your application is running in $(PORT)`)});
