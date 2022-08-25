const mongoose = require("mongoose");

const connection=async()=>{
    try{
        const connectionParams={
            useNewUrlParser:true,
            useUnifiedTopology:true
        };
        await mongoose.connect(process.env.MONGO_URI,connectionParams);
        console.log(`database connected `)

    }
    catch(error){
        console.log('error in database connection');
    }
}
module.exports={connection};