import React from 'react'
import { BsBookmark, BsReddit, BsLink45Deg, BsWhatsapp} from "react-icons/bs"
import {GoBookmark} from 'react-icons/go'
import {RiTwitterXFill} from 'react-icons/ri'
import {ImFacebook} from 'react-icons/im'

const SocialMediaShare = () => {
  return (
    <div className='hidden md:flex justify-between text-gray-200 gap-6'>
          <ImFacebook size={25}/>
          <RiTwitterXFill size={25}/>
          <BsReddit size={25}/>
          <GoBookmark size={25}/>
          <BsWhatsapp size={25}/>
          <BsLink45Deg size={30}/>
    </div>
  )
}

export default SocialMediaShare