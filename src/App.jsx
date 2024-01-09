import React from 'react'
import './App.css'
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import SignUp from './components/SignUp'
import SignIn from './components/SignIn'
import Home from './Home';
import Logout from './components/Logout';
import { Toaster } from 'react-hot-toast';
import CreateBlog from './components/CreateBlog'
import BlogProfile from './pages/Profile';
import Draft from './pages/Drafts'
import EditPost from './pages/EditPost';
import BlogDetail from './pages/BlogDetail'
import Blog from './pages/Blog'
import Footer from './components/Footer';
import PrivateRoutes from "./pages/PrivateRoutes";


// ... (imports)

const App = () => {
  return (
    <>
      <Toaster />
      <BrowserRouter>
        <Routes>
          <Route path="/signup" element={<SignUp />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/signin" element={<SignIn />} />
          <Route path="/" element={<Home />} />
          <Route path="/logout" element={<Logout />} />
          <Route path="/blog/:_id" element={<BlogDetail />} />

          {/* Protected Routes */}
          <Route path='/' element={<PrivateRoutes/>}>
            <Route path='profile' element={<BlogProfile/>}/>
            <Route path='draft' element={<Draft/>}/>
            <Route path='edit' element={<EditPost/>}/>
            <Route path='create' element={<CreateBlog/>}/>
            
            </Route>
          </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
};


export default App