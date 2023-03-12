const express = require('express');
const router = express.Router();
const Order = require('../models/Order');
const fetchuser=require("../middleware/fetchuser")
const { body, validationResult } = require('express-validator');

//route1 for fetching previous order details of user
router.get('/fetchallorder',fetchuser,async(req,res)=>{
    try {
        const order = await Order.find({user:req.user.id})
        res.json(order);
        
    } catch (error){
        console.error(error.message);
        res.status(500).send("some error occured");
    }
    
})

//route2 for adding a order
router.post('/addorder',fetchuser,[
    body('title','Enter a valid title').isLength({ min: 3 }),
    body('description','description must be atleast 5 charaacters').isLength({ min: 5 })
],async(req,res)=>{
    try {
        
   
    const{title, description}=req.body;
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    const order= new Order({
        title,description, user:req.user.id
    })
    const saveOrder=await order.save()
    
    res.json(saveOrder);
} catch (error){
    console.error(error.message);
    res.status(500).send("some error occured");
}
})


module.exports = router