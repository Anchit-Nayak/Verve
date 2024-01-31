import React, { useEffect, useState } from 'react'
import { useLocation, useNavigate } from 'react-router-dom';


const SummaryPage = () => {
    const {state}= useLocation();
    const title = state.title;
    const content = state.content;
    const file = state.file;
    const [summary, setSummary] = useState('');
    const navigate = useNavigate();
    useEffect(()=>{
        async function query(data) {
            const response = await fetch("https://api-inference.huggingface.co/models/Falconsai/text_summarization",{
                    headers: { Authorization: `Bearer ${import.meta.env.VITE_HF_TOKEN}` },
                    method: "POST",
                    body: JSON.stringify(data),
                }
            );
            const result = await response.json();
            return result;
        }
        query({"inputs": `${content}`}).then((response) => {
            const s = response;
            setSummary(s[0].summary_text)
        });
    })

    const handleCancel = () => {
        navigate('/write')
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        // const response = axios.post('http://localhost:5000/api/blog', {
        //     title: title,
        //     content: content,
        //     file: file,
        //     summary: summary
        // })
    }
  return (
    <div className='wrapper-container text-white w-full py-5'>
        <h1 className='text-4xl font-extrabold mb-3'>Blog Summary</h1>
        <p className='mb-5'>Verify the following summary of your blog (Feel free to make any changes)</p>
        <hr />
        <h1 className='text-3xl font-semibold mb-5 mt-12'>{title}</h1>
        <form action="" onSubmit={e => handleSubmit(e)}>
        <textarea name="" id="" cols="30" rows="10" className='bg-gray-700 rounded-xl p-4 border border-gray-500 w-full text-xl' value={summary}></textarea>
        <div className='flex flex-row justify-between py-5'>
            <button className='bg-blue-500 hover:bg-blue-600 px-6 py-3 rounded-xl font-bold' onClick={handleCancel}>Cancel</button>
            <button className='bg-blue-500 hover:bg-blue-600 px-6 py-3 rounded-xl font-bold' type='submit'>Post</button>
        </div>
        </form>
    </div>
  )
}

export default SummaryPage