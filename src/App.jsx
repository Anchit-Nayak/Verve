import { useState } from 'react'
import './App.css'
import Home from './Pages/Home';
import { Route , Routes} from 'react-router-dom';
import Layout from './Layout';
import Signup from './Pages/Signup';
import Signin from './Pages/Signin';
import Write from './Pages/Write';
import PostDetail from './Pages/PostDetail';

function App() {

  return (
    <Routes>
      <Route path="/" element={<Layout/>}>
        <Route index element={<Home/>} />
        <Route path='/write' element={<Write/>}/>
        <Route path='/posts' element={<PostDetail/>}/>
      </Route>
      <Route path='/signup' element={<Signup/>}/>
      <Route path='signin' element={<Signin/>}/>
    </Routes>
  )
}

export default App
