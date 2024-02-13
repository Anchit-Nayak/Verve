import React, { useEffect, useState } from 'react'
import PostContainer from '../Components/Post/PostContainer'
import Comments from '../Components/Post/Comments'
import Events from '../Components/Home/Events';
import Contact from '../Components/Home/Contact';
import { useParams } from 'react-router-dom';
import defaultImage from '../assets/default.jpeg';
import { MetroSpinner } from "react-spinners-kit";
import axios from 'axios';

const PostDetail = () => {
  const id = useParams();
  const [content, setContent] = useState([]);
  const [loading, setLoading] = useState(true);
  useEffect(()=>{
    (async function(){
      const response = await axios.post(`http://localhost:3000/post/getPostById`, {id : id});
      setContent(response.data.data);
      setLoading(false);
    })()
  }, [])
  return (
    <div className='w-full h-96 relative bg-gradient-to-b from-gray-500 to-gray-900'> 
            <img src={content.file? content.file : defaultImage} alt=""  className='w-full h-full object-cover absolute mix-blend-overlay'/>
            {loading ? <div className='w-full h-screen flex items-center justify-center'>
              <MetroSpinner/>
            </div>  :
            <div className='wrapper-container p-4 py-48 h-screen'>
                <h1 className='text-slate-200 font-lato font-bold text-3xl md:text-5xl mb-10'>{content.title}</h1>
                <div className='flex flex-col'>
                <PostContainer data={content}/>
                <div className='flex items-start flex-col md:flex-row'>
                <Comments/>
                <div className='w-full md:w-1/3 flex flex-col md:flex-col py-8 lg:py-16 ml-5'>
                <div className='flex'>
                <Events/>
                </div>
                <div className='w-full pb-3'>
                <Contact/>
                </div>
                </div>
                </div>
                </div>
            </div>
            }
    </div>
  )
}

export default PostDetail