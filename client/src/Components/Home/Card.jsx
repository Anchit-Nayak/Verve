import React from 'react'

const Card = (props) => {
  if(props.id % 2 === 0){
    return (
      <a href="/posts" class="mb-5 h-[500px] flex flex-col justify-between md:flex-row md:h-[250px] bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700">
        <img class="h-1/2 md:h-auto md:rounded-lg object-cover w-full md:w-[300px] rounded-t-lg" src={props.image} alt=""/>
        <div class="flex flex-col p-4 leading-normal justify-between pr-12">
          <div>
           <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{props.title}</h5>
           <p><span className='text-primary-500 hover:underline'>{props.author}</span> <span className='text-gray-500'>| {props.date}</span></p>
           <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">{props.content}</p>
           </div>
           <div className='flex justify-end w-full'>
           <a href="/posts" className='text-primary-600 hover:underline'>Read more...</a>
           </div>
        </div>
      </a>
    )
  }
  else{
    return(
      <a href="/posts" class="mb-5 h-[500px] flex flex-col justify-between md:flex-row md:h-[250px] bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700">
        <div class="flex flex-col p-4 leading-normal justify-between">
          <div>
           <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{props.title}</h5>
           <p><span className='text-primary-500 hover:underline'>{props.author}</span> <span className='text-gray-500'>| {props.date}</span></p>
           <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">{props.content}</p>
           </div>
           <div className='flex md:justify-start justify-end w-full md:pr-0 pr-8'>
           <a href="/posts" className='text-primary-600 hover:underline'>Read more...</a>
           </div>
        </div>
        <img class="h-1/2 md:h-auto overflow-hidden md:rounded-lg object-cover w-full md:w-2/3 rounded-b-lg" src={props.image} alt=""/>
      </a>
    )
  }
}

export default Card