import React, { useEffect, useState } from 'react';
import axios from 'axios';
import '../components/Blog.css'
import Navbar from '../components/Navbar'

const Blog = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  const api_url = import.meta.env.VITE_REACT_APP_BACKEND_API;

  // Fetch all blogs
  useEffect(() => {
    const fetchBlogs = async () => {
      try {
        const response = await axios.get(`${api_url}/blogs/all`);
        setData(response.data); // Updated this line
        setLoading(false);
      } catch (error) {
        console.error('Error fetching blogs:', error);
      }
    };

    fetchBlogs();
  }, [api_url]); // Added api_url to the dependency array

  return (
    <>
    <Navbar/>
    <div className="" style={{ marginTop: '3rem' }}>
      <h1 className="w-25 bg-success text-light">Trending</h1>
      {loading && <div className="loading text-center">Loading...</div>}
      {data && (
        <div className="data row">
          {data.map((item) => {
            return (
              <div className="card col-12 col-md-4 mb-4" key={item._id}>
                <a href={`/blog/${item._id}`}>
                  <div className="card-img">
                    <img className='' src={item.imageUrl} alt="" />
                  </div>
                </a>
                <div className="card-content">
                  <h3>{item.title}</h3>
                  <p>{item.content}</p>
                  <b>{item.author}</b>
                </div>
              </div>
            );
          })}
        </div>
      )}
    </div>
    </>
  );
};

export default Blog;