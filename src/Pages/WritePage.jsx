import React, {useState} from 'react'
import Editor from 'ckeditor5-custom-build';
import { CKEditor } from '@ckeditor/ckeditor5-react'

const WritePage = () => {
  const [editorData, setEditorData] = useState('');

  const handleReady = (editor) => {
    console.log('Editor is ready to use!', editor);
  };

  const handleChange = (event, editor) => {
    console.log(event);
    setEditorData(editor.getData());
  };

  const handleBlur = (event, editor) => {
    console.log('Blur.', editor);
  };

  const handleFocus = (event, editor) => {
    console.log('Focus.', editor);
  };
  return (
    <div className='wrapper-container my-7 text-white border-white'>
      <h1 className='text-3xl font-bold mb-12'>Write your own blog</h1>
      <CKEditor 
        placeholder="Start writing here..."
        editor={Editor}
        data={editorData}
        onReady={handleReady}
        onChange={handleChange}
        onBlur={handleBlur}
        onFocus={handleFocus}
      />
    </div>
  )
}

export default WritePage