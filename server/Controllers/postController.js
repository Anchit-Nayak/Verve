const post = require("../Models/post");
const user = require('../Models/user')
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

const getPostById = async(req, res) =>{
    try{
        const { _id} = req.body;
        if(!_id){
            return res.status(400).json({success:false, message: 'Id parameter is required in the request body'})
        }
        const query = {_id};
        const content = await post.findOne(query);
        res.json({success:true, data:content})
    }catch (error) {
        console.error(error);
        res.status(500).json({ success: false, message: 'Internal Server Error' });
    }
}

module.exports = {getPosts, getPostById}