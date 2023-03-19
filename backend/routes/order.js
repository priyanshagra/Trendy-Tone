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
    body('primary_colour','Enter a valid colour'),
    body('secondary_colour','Enter a valid colour'),
    body('collar','Enter a valid collar'),
    body('sleeve','Enter a valid sleeve'),
    body('titletoshow','enter a good text').isLength({ max: 15 }),
    body('position','Enter a valid position'),
    body('size','Enter a valid size')
],async(req,res)=>{
    try {
        
   
    const{title, primary_colour,secondary_colour,collar,sleeve,titletoshow,position,size}=req.body;
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    const order= new Order({
        title,primary_colour,secondary_colour,collar,sleeve,titletoshow,position,size, user:req.user.id
    })
    const saveOrder=await order.save()
    
    res.json(saveOrder);
} catch (error){
    console.error(error.message);
    res.status(500).send(error);
}
})


module.exports = router