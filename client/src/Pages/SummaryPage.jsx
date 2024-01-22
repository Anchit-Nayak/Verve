import React, { useEffect, useState } from 'react'
import { useLocation, useNavigate } from 'react-router-dom';


const SummaryPage = () => {
    const {state}= useLocation();
    const title = state.title;
    const content = state.content;
    const [summary, setSummary] = useState('');


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
    
  return (
    <div className='wrapper-container text-white w-full py-5'>
        <h1 className='text-4xl font-extrabold mb-3'>Blog Summary</h1>
        <p className='mb-5'>Verify the following summary of your blog (Feel free to make any changes)</p>
        <hr />
        <h1 className='text-3xl font-semibold mb-5 mt-12'>{title}</h1>
        <textarea name="" id="" cols="30" rows="10" className='bg-gray-700 rounded-xl p-4 border border-gray-500 w-full text-xl' value={summary}></textarea>
    </div>
  )
}

export default SummaryPage