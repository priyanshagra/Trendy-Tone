const express = require('express');
const router = express.Router();
const User = require('../models/User');
const { body, validationResult } = require('express-validator');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const JWT_SECRET = 'Priyanshisagoodb$oy';
const fetchuser=require("../middleware/fetchuser")

//first route for signup
router.post('/createuser',[
    body('name','Enter a valid name').isLength({ min: 3 }),
    body('email','Enter a valid email').isEmail(),
    body('password','Enter a valid password').isLength({ min: 5 })
],
async(req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    try{
    let user=await User.findOne({email: req.body.email});
    if(user){
        return res.status(400).json({error:"sorry a user with this email already exist"})
    }
    const salt = await bcrypt.genSalt(10);
    const secPass = await bcrypt.hash(req.body.password,salt);

    user = await User.create({
        name: req.body.name,
        email:req.body.email,
        password: secPass,
      });
      const data ={
        user:{
            id:user.id
        }
      }
       const authtoken = jwt.sign(data, JWT_SECRET);
       
       res.json({authtoken});
    }catch (error){
        console.error(error.message);
        res.status(500).send("some error occured");
    }
}
)

//second route for login
router.post('/login',[
    body('email','Enter a valid email').isEmail(),
    body('password','Password cannot be blank').exists(),
],async(req, res) => {

    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    const {email, password}=req.body;
    try{
        let user = await User.findOne({email});
        if(!user)
        {
            return res.status(400).json({error:"Please try to login with corect credentials"});
        }

        const passwordcompare = bcrypt.compare(password,user.password)
        if(!passwordcompare){
            return res.status(400).json({error:"Please try to login with corect credentials"});
        }

        const data ={
            user:{
                id:user.id
            }
          }

          const authtoken = jwt.sign(data, JWT_SECRET);
       
       res.json({authtoken});
    } catch (error){
        console.error(error.message);
        res.status(500).send("some error occured");
    }

})

//third route for user details

router.post('/getuser'
,fetchuser,async(req, res) => {
try{
    userId=req.user.id;
    const user = await User.findById(userId).select("-password");
    res.send(user);
} catch (error){
    console.error(error.message);
    res.status(500).send("some error occured");
}

})
module.exports = router