const express = require('express');
const db =require('../database');
const { Router } = require('express');
const router= Router();
const app =express();
app.use(express.json());

router.get('/get_data',async (req,res)=>{
    //res.send(200);
    const result = await db.promise().query(`select * from content`);
    //console.log(result[0]);
    res.status(200).json({'success':true,'data':result[0]});
});

router.post('/save',(req,res)=>{
    return(res.status(201).json({'succes':true}))
})


router.post('/post_data',async (req,res)=>{
    const reqbody  = JSON.parse(Object.keys(req.body)[0]) 
    const  title = reqbody.title;
    const description =  reqbody.description
    const image = reqbody.image.replace('secret','=media&token=').replace('img','images%2F')
    console.log(JSON.parse( Object.keys(req.body)[0]));       
    console.log(title,description,image);

    const  data = await db.promise().query(`INSERT INTO content (title,description,image) values('${title}','${description}','${image}')`);
    console.log('saved',data);
        return  res.status(201).json({'success':true,msg:'content filled'});
})

module.exports = router;









// router.get('/posts',(req,res)=>{
//     res.json({ name:'akash'});
// });
