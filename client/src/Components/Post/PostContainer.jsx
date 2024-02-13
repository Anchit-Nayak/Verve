import React from 'react'
// import { BsBookmark, BsReddit, BsLink45Deg, BsWhatsapp} from "react-icons/bs"
// import {GoBookmark} from 'react-icons/go'
// import {RiTwitterXFill} from 'react-icons/ri'
// import {ImFacebook} from 'react-icons/im'
// import SocialMediaShare from './SocialMediaShare'
import { formatDistanceToNow } from 'date-fns';
import parse from 'html-react-parser';


const PostContainer = (props) => {
  const date = props.data.date;
  const dateObject = new Date(date);
  const rel = formatDistanceToNow(dateObject, { addSuffix: true })
  return (
    <div className='bg-gray-800 h-auto w-full rounded-lg text-gray-100 p-8 backdrop-brightness-200'>
        <div className='flex flex-row'>
         <div>
         <div className='w-full flex flex-row mb-5 justify-between'>
           <p className='text-gray-400'>By <span className='text-primary-300 hover:underline'>{props.data.author}</span> | <span>{rel}</span></p>
         </div>

        <div className='flex flex-col'>
        <div className='text-gray-400'>
        {parse(props.data.content)}
        </div>
         </div>
         </div>
        </div>
    </div>
  )
}

export default PostContainer