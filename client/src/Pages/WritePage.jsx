import React, {useState} from 'react'
import ReactQuill from 'react-quill'
import 'react-quill/dist/quill.snow.css';
import { useNavigate } from 'react-router-dom';

const WritePage = () => {
  const navigate = useNavigate();

  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const modules = {
    toolbar: [
      [{ 'header': [1, 2, false] }],
      ['bold', 'italic', 'underline','strike', 'blockquote'],
      [{'list': 'ordered'}, {'list': 'bullet'}, {'indent': '-1'}, {'indent': '+1'}],
      ['link', 'image'],
      ['clean']
    ],
  }

  const formats = [
    'header',
    'bold', 'italic', 'underline', 'strike', 'blockquote',
    'list', 'bullet', 'indent',
    'link', 'image'
  ]

  const handleSubmit = async(e) =>{
    e.preventDefault();
    navigate("/summary", {state: {title: title, content : content}});
  }
  return (
    <div className='wrapper-container my-7 text-white border-white'>
      <h1 className='text-3xl font-bold mb-12'>Create your own blog here</h1>
      <form action="" className='flex flex-col mb-3' onSubmit={(e) => handleSubmit(e)}>
        <label htmlFor="" className='text-xl font-medium mb-2'>Blog Title</label>
        <input type="text" placeholder='Blog Title' className='bg-gray-700 px-3 py-2 rounded-xl text-lg mb-5' onChange={(e)=> setTitle(e.target.value)}/>

        <label htmlFor="" className='text-xl font-medium mb-2'>Cover Photo</label>
        <input type="file" name="" id="" className='py-2 rounded-xl text-lg mb-5 '/>
        <label htmlFor="" className='text-xl font-medium mb-2'>Content (Minimum words should be 20)</label>
        <ReactQuill className='mb-5' modules={modules} formats={formats} onChange={(newVal) => setContent(newVal)} placeholder={``}/>

        <button type='submit' className='bg-blue-500 px-5 py-2 w-auto rounded-lg text-lg'>Post</button>
      </form>
      
    </div>
  )
}

export default WritePage