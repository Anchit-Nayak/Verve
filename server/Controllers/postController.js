const post = require("../Models/post");
const user = require('../Models/user');
const mongoose = require('mongoose');
const moment = require('moment')

const getPosts = async(req, res) => {
    try {
        const { type } = req.body;
    
        if (!type) {
          return res.status(400).json({ success: false, message: 'Type parameter is required in the request body' });
        }

        if(type === 'all'){
            const posts = await post.find({});
            return res.json({ success: true, data: posts });          
        }
        const query = { type };
        const posts = await post.find(query);
    
        res.json({ success: true, data: posts });
      } catch (error) {
        console.error(error);
        res.status(500).json({ success: false, message: 'Internal Server Error' });
      }
}

const getPostById = async (req, res) => {
    try {
      const { id } = req.body;  // Assuming you are using 'id' in the request body
  
      if (!id) {
        return res.status(400).json({ success: false, message: 'Id parameter is required in the request body' });
      }
  
      const isValidObjectId = mongoose.Types.ObjectId.isValid(id);
  
      if (!isValidObjectId) {
        return res.status(400).json({ success: false, message: 'Invalid ObjectId format' });
      }
  
      const query = { _id: new mongoose.Types.ObjectId(id) };
      const content = await post.findOne(query);
  
      if (!content) {
        return res.status(404).json({ success: false, message: 'Post not found' });
      }
  
      res.json({ success: true, data: content });
    } catch (error) {
      console.error("Error fetching post by ID:", error);
      res.status(500).json({ success: false, message: 'Internal Server Error' });
    }
  };

module.exports = {getPosts, getPostById}