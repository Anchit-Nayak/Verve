import React from 'react'
import UserPostCards from '../Components/UserPosts/UserPostCards';
import Card from '../Components/Home/Card';
import Events from '../Components/Home/Events';
import Contact from '../Components/Home/Contact';
import { MetroSpinner } from "react-spinners-kit";
import axios from 'axios';
import { useEffect, useState } from 'react';

const UserPosts = () => {
  const [user, setUser] = useState({});
  const [loading, setLoading] = useState(true);
  const userId = localStorage.getItem('userId');
  const username = localStorage.getItem('username');
  useEffect(() => {
     axios.post(`http://localhost:3000/user/userdetails`, { id: userId })
     .then((res) => {
        console.log(res.data);
        setUser(res.data);
        setLoading(false);
     })
  }, []);
  return (
    <div className='wrapper-container my-7'>
      
      <div className='w-full h-full'>
      <h1 className='text-4xl font-bold text-gray-50 mb-4'>My Posts</h1>
      <div className='flex flex-row'>
      <div className='w-full md:w-4/5'>
      { loading ? 
      <div className='w-full h-full flex items-center justify-center'>
      <MetroSpinner/>
      </div> : 
      <div className='w-full h-full'>
      { 
        user.recentPosts.length ?
        user.recentPosts.map((post) => {
          return <Card key={post.id} author={post.author} date={post.date} id ={post.id} image={post.image} title={post.title} content={post.body}/>
        }):
        <div className='flex items-center justify-center py-20'>
        <h1 className='text-2xl font-bold text-gray-400'>No posts found</h1>
        </div>
      }
      </div>
      }
      </div>
      <div className='hidden md:flex flex-col w-1/3 ml-5'>
        <Events/>
        <Contact/>
      </div>
      </div>
      </div>
    </div>
  )
}

export default UserPosts