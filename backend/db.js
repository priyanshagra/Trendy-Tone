var mongoose = require('mongoose');
mongoose.set('strictQuery',false);

const db='mongodb+srv://priyansh:9893449249@cluster0.mai7d0l.mongodb.net/login?retryWrites=true&w=majority';

const connectToMongo=()=>
{
mongoose.connect(db,{ 
    useNewUrlParser:true,
    useUnifiedTopology:true
}).then(()=>{
    console.log("connection established");
}).catch((err)=>console.log(err));  
}

module.exports = connectToMongo;
