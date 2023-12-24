const express = require("express");
const mongoose = require("mongoose");

const app = express();
const PORT = 5924;
app.use(express.json());

connectDatabase().then(e=>console.log("connected ss")).catch((e)=>console.log(e))
async function connectDatabase(){
    await mongoose.connect("mongodb+srv://taraz:taraz12@todos.g2clqpo.mongodb.net/test?retryWrites=true&w=majority")
}

const router = express.Router();
app.use(router)


const UserSchema = new mongoose.Schema({
    username : {type:String},
    password : {type:Boolean},
    email : {type:string}
})

const UserModel = mongoose.model("user",UserSchema);

router.get("/got", async (req,res) => {
    const userList = await UserModel.find();
    res.status(200).json({userList})
});

router.all("/", (req,res) => {
    res.json({message : " Succesfully we are live 🥳🥳🚀🚀🎥"})
})
app.listen(PORT,()=> {
    console.log("server started");
})