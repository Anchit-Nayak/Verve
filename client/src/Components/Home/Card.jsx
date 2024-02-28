import React from 'react'
import defImg from '../../assets/images.jpeg'
import { formatDistanceToNow } from 'date-fns';

const Card = ({author, date, id, k, image, title, summary}) => {
  const dateObject = new Date(date);
  const rel = formatDistanceToNow(dateObject, { addSuffix: true })
  if(k % 2 === 0){
    return (
      <a href={`/posts/${id}`} className="mb-5 h-auto md:h-[250px] flex flex-col justify-between md:flex-row border rounded-lg shadow border-gray-700 bg-gray-800 hover:bg-gray-700 overflow-hidden">
      <img className="h-1/2 md:h-auto md:rounded-lg object-cover w-full md:w-[300px] rounded-t-lg" src={`${!image ? defImg : image}`} alt="" />
      <div className="flex flex-col p-4 leading-normal justify-between md:w-2/3 h-auto text-justify">
        <div className="h-full">
          <h5 className="mb-1 text-2xl font-bold tracking-tighter text-white">{title}</h5>
          <p><span className="text-primary-500 hover:underline">{author}</span> <span className="text-gray-500">| {rel}</span></p>
          <p className="mb-3 font-normal text-gray-400 pb-3 tracking-tighter">{summary}</p>
        </div>
      </div>
    </a>
    
    )
  }
  else{
    return(
      <a href={`/posts/${id}`} class="mb-5 h-auto flex flex-col justify-between md:flex-row md:h-[250px]  border  rounded-lg shadow border-gray-700 bg-gray-800 hover:bg-gray-700 overflow-hidden">
        <div class="flex flex-col p-4 leading-normal justify-between md:w-2/3 text-justify">
          <div>
           <h5 class="mb-1 text-2xl font-bold tracking-tight text-white">{title}</h5>
           <p><span className='text-primary-500 hover:underline'>{author}</span> <span className='text-gray-500'>| {rel}</span></p>
           <p class="mb-3 font-normal text-gray-400 tracking-tighter">{summary}</p>
           </div>
        </div>
        <img className="h-1/2 md:h-auto md:rounded-lg object-cover w-full md:w-[300px] rounded-b-lg" src={`${!image ? defImg : image}`} alt="" />
      </a>
    )
  }
}

export default Card