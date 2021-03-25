const { Router } = require('express');

const router= Router();

router.get('/',(req,res)=>{
    res.send(200);
});

router.get('/postsTitle',(req,res)=>{
    res.json({ title:'random ikka'});
});

module.exports = router;