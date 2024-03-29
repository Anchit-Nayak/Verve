import React, { useEffect, useState } from 'react'
import Events from '../Components/Home/Events';
import Contact from '../Components/Home/Contact';
import Filter from '../Components/Home/Filter';
import Card from '../Components/Home/Card';
import { getPosts } from '../api';
import { MetroSpinner } from "react-spinners-kit";

const Home = () => {
  const [type, setType] = useState("all");
  const [content, setContent] = useState([]);
  const [loading, setLoading] = useState(false);

  const handleFilter = (option) =>{
    setType(option);
  }
  
  useEffect(()=>{
    setLoading(true);
    (async function(){
      const response = await getPosts({type})
      setContent(response.data);
      setLoading(false);
    })()
  },[type])

  return (
    <div className='wrapper-container my-7'>

      <div className='flex flex-row'>
      <div className='w-full md:w-4/5'>
      <form className='mb-5'>   
    <label for="default-search" class="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white">Search</label>
    <div class="relative">
        <div class="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
            <svg class="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"/>
            </svg>
        </div>
        <input type="search" id="default-search" class="block w-full p-4 pl-10 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Search By Post Title..." required/>
        <button type="submit" class="text-white absolute right-2.5 bottom-2.5 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Search</button>
    </div>
</form>
    <div className='md:hidden'>
      <Filter handleFilter={handleFilter}/>
    </div>
    <div className='h-full'>
    {loading?
    <div className='w-full flex items-center justify-center'>
      <MetroSpinner/>
    </div>:
      content.length==0?<div className='text-center text-2xl font-bold text-gray-400'>No Posts Found</div>:
        content.map((card, index)=>{
           return (<Card key={card._id} author={card.author} category={card.type} date={card.date} id ={card._id} k={index} image={card.file} title={card.title} summary={card.summary}/>)
        })
    }
    </div>
      </div>
      <div className='hidden md:flex flex-col w-1/3 ml-5'>
      <Filter handleFilter={handleFilter}/>
        <Events/>
        <Contact/>
      </div>
      </div>
    </div>
  )
}

export default Home