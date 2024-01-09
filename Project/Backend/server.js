// server.js

const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors')
const bcrypt = require('bcrypt');
const saltRounds = 10;

const app = express();
const PORT = 5924;

// Connect to MongoDB
connectDatabase().then(e => console.log("connected successfully")).catch((e)=>console.log(e))
  
  async function connectDatabase(){
  await mongoose.connect("mongodb+srv://taraz:taraz12@todos.g2clqpo.mongodb.net/test?retryWrites=true&w=majority")}

// Define User Schema
const userSchema = new mongoose.Schema({
  username: String,
  email: String,
  password: String,
});

// Define User Model
const User = mongoose.model('User', userSchema);

// Middleware
app.use(express.json());
app.use(cors());

// Routes
const router = express.Router();

// Signup
router.post('/signup', async (req, res) => {
  try {
    const { username, email, password } = req.body;
    //console.log(username, email, password)
    // Hash the password before saving it
    if(!password||username,!email) {
     return res.status(500).send('Password required');
    }
    const hashedPassword = await bcrypt.hash(password, saltRounds);
    const newUser = new User({
      username,
      email,
      password: hashedPassword,
    });

    const savedUser = await newUser.save();
    res.status(201).json(savedUser);
  } catch (error) {
    console.log(error);
    res.status(500).send('Error creating user');
  }
});

// Login
router.post('/login', async (req, res) => {
  try {
    const { email, password } = req.body;

    const user = await User.findOne({ email });

    if (!user) {
      return res.status(401).send('Invalid credentials,enail not found');
    }
    console.log(password,user)
    const isPasswordValid = await bcrypt.compare(password, user.password);
    console.log(isPasswordValid)
    if (!isPasswordValid) {
      return res.status(401).send('Invalid credentials wrong password');
    }

    res.status(200).json(user);
  } catch (error) {
    console.error(error);
    res.status(500).send('Error finding user');
  }
});

// Get all users
router.get('/users', async (req, res) => {
  try {
    const users = await User.find();
    res.status(200).json(users);
  } catch (error) {
    console.error(error);
    res.status(500).send('Error fetching users');
  }
});

// Get a user by ID
router.get('/users/:id', async (req, res) => {
  try {
    const user = await User.findById(req.params.id);
    if (!user) {
      return res.status(404).send('User not found');
    }
    res.status(200).json(user);
  } catch (error) {
    console.error(error);
    res.status(500).send('Error fetching user');
  }
});

// Update a user by ID
router.put('/users/:id', async (req, res) => {
  try {
    const updatedUser = await User.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!updatedUser) {
      return res.status(404).send('User not found');
    }
    res.status(200).json(updatedUser);
  } catch (error) {
    console.error(error);
    res.status(500).send('Error updating user');
  }
});

// Delete a user by ID
router.delete('/users/:id', async (req, res) => {
  try {
    const deletedUser = await User.findByIdAndDelete(req.params.id);
    if (!deletedUser) {
      return res.status(404).send('User not found');
    }
    res.status(200).json(deletedUser);
  } catch (error) {
    console.error(error);
    res.status(500).send('Error deleting user');
  }
});

// Use routes
app.use('/api', router);

// Start the server
router.all("/", (req,res) => {
        res.json({message : " Succesfully we are live 🥳🥳🚀🚀🎥"})
    })
    
    app.listen(PORT,()=> {
        console.log("server started");
    })
    