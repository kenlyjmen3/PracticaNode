const express = require('express');
const router = express.Router();

router.get('/', (req,res) => {
    res.set('Set-Cookie', 'HttpOnly;SameSite=None');
    res.render('index.html',{title:'First WebSite'})
});

router.get('/contact',(req,res) => {
    res.render('contact.html',{title:'Contact Edge'})
});

module.exports = router;