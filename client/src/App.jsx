import { useState } from 'react'
import './App.css'
import Home from './Pages/Home';
import { Route , Routes} from 'react-router-dom';
import Layout from './Layout';
import Signup from './Pages/Signup';
import Signin from './Pages/Signin';
import PostDetail from './Pages/PostDetail';
import WritePage from './Pages/WritePage';
import Bookmarks from './Pages/Bookmarks';
import UserPosts from './Pages/UserPosts';
import UserProfile from './Pages/UserProfile';
import SummaryPage from './Pages/SummaryPage';


function App() {

  return (
    <Routes>
      <Route path="/" element={<Layout/>}>
        <Route index element={<Home/>} />
        <Route path='/write' element={<WritePage/>}/>
        <Route path='/posts' element={<PostDetail/>}/>
        <Route path='/bookmarks' element={<Bookmarks/>}/>
        <Route path='/userposts' element={<UserPosts/>}/>
        <Route path='/userprofile' element={<UserProfile/>}/>
        <Route path='/summary' element={<SummaryPage/>}/>
      </Route>
      <Route path='/signup' element={<Signup/>}/>
      <Route path='signin' element={<Signin/>}/>
    </Routes>
  )
}

export default App
