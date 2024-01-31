import React, { useState } from 'react'
import ReactQuill from 'react-quill'
import 'react-quill/dist/quill.snow.css';
import { useNavigate } from 'react-router-dom';

const WritePage = () => {
  const navigate = useNavigate();

  const [title, setTitle] = useState('');
  const [file, setFile] = useState(null);
  const [content, setContent] = useState('');
  const modules = {
    toolbar: [
      [{ 'header': [1, 2, false] }],
      ['bold', 'italic', 'underline', 'strike', 'blockquote'],
      [{ 'list': 'ordered' }, { 'list': 'bullet' }, { 'indent': '-1' }, { 'indent': '+1' }],
      ['link'],
      ['clean']
    ],
  }

  const formats = [
    'header',
    'bold', 'italic', 'underline', 'strike', 'blockquote',
    'list', 'bullet', 'indent',
    'link'
  ]

  const handleSubmit = async (e) => {
    e.preventDefault();
    navigate("/summary", { state: { title: title, file: file, content: content } });
  }
  return (
    <div className='wrapper-container my-7 text-white border-white'>
      <h1 className='text-3xl font-bold mb-12'>Create your own blog here</h1>
      <form action="" className='flex flex-col mb-3' onSubmit={(e) => handleSubmit(e)}>
        <label htmlFor="" className='text-xl font-medium mb-2'>Blog Title</label>
        <input type="text" placeholder='Blog Title' className='bg-gray-700 px-3 py-2 rounded-xl text-lg mb-5' onChange={(e) => setTitle(e.target.value)} />


        <label htmlFor="" className='text-xl font-medium mb-2'>Blog Category</label>
        <select id="countries" class="mb-5 border rounded-lg  block w-full p-2.5 bg-gray-700 border-gray-600 placeholder-gray-400 text-white focus:ring-blue-500 focus:border-blue-500">
          <option value="Programming" selected>Programming</option>
          <option value="Web Development">Web Development</option>
          <option value="Cloud And DevOps">Cloud And DevOps</option>
          <option value="AI/ML">AI/ML</option>
          <option value="Cybersecurity">Cybersecurity</option>
          <option value="Interview Experience">Interview Experience</option>
          <option value="Others">Others</option>
        </select>


        <label htmlFor="" className='text-xl font-medium mb-2'>Cover Photo</label>
        <input type="file" name="" id="" className='rounded-xl text-lg mb-5 bg-gray-700 hover:bg-gray-600' onChange={e => setFile(e.target.files)} />
        <label htmlFor="" className='text-xl font-medium mb-2'>Content (Minimum words should be 20)</label>
        <ReactQuill className='mb-5' modules={modules} formats={formats} onChange={(newVal) => setContent(newVal)} placeholder={``} />

        <button type='submit' className='bg-blue-500 px-5 py-2 w-auto rounded-lg text-lg hover:bg-blue-600'>Next</button>
      </form>

    </div>
  )
}

export default WritePage