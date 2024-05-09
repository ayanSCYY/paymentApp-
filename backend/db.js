const mongoose=require('mongoose');
mongoose.connect('mongodb://localhost:27017/paytm').then(()=>{
    console.log('connection successfull');
}).catch((e)=>{
    console.log(e);
})

const userSchema=new mongoose.Schema({
    username:String,
    password:String,
    firstName:String,
    lastName:String,
})

const accountSchema = new mongoose.Schema({
    userId: {
        type: mongoose.Schema.Types.ObjectId, // Reference to User model
        ref: 'User',
        required: true
    },
    balance: {
        type: Number,
        required: true
    }
});

const UserTokenSchema= new mongoose.Schema({
    userId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true
    },
    token:String
})


const User = mongoose.model('User',userSchema);
const Account=mongoose.model("Account",accountSchema);
const UserToken=mongoose.model("UserToken",UserTokenSchema);

 module.exports ={
    User,
    Account,
    UserToken
 };