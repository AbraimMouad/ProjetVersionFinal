const mongoose= require("mongoose");
const Schema = mongoose.Schema ;

const  User = new Schema({

    nom : {
        type:String ,
        required : true 
    } ,
password :{
    type:String ,
    required : true 

}


})


module.exports =  mongoose.model("User",User);