var express = require('express');
var router = express.Router();
var userModel = require.main.require('./models/userModel');

router.get('/', (req, res)=>{
    res.render('login.ejs');
});

router.post('/', (req, res)=>{
    var email = req.body.email;
    var password = req.body.password;

    userModel.validateUser(email, password, function(result){
        if(result.length == 0){
          res.send('Invalid');
        }
        else{
          console.log(result);
          console.log(result.is_admin);
          if(result.is_admin == 1)
            res.redirect('/admin/home');
          else
            res.redirect('/customer/home');
        }
    });
});

module.exports = router;
