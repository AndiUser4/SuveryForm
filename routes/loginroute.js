const express = require('express');
const router = express.Router();

const User = require('../models/loginmodel');

// Login

router.post('/login', async (req, res) => {

try{
      const { email, name, surname, password } = req.body; 
      const newUser = new User({ email,name, surname, password});
      await newUser.save();
      res.status(201).json({ message: 'User created successfully' });
  } catch (error) {
    res.status(500).json({ message: 'Error creating user' });
  }  

});

module.exports = router;