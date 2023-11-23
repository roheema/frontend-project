import React, { useState, useEffect } from "react";
import axios from "axios";
// import loader from "../assets/images/Loader.png"
import { useParams } from "react-router-dom";
import BlogDetailCard from "../components/BlogDetailCard";


const BlogDetail = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const { _id } = useParams();
  const api_url = import.meta.env.VITE_REACT_APP_BACKEND_API;


  const fetchApi = async () => {
    try {
        const response = await axios.get(`${api_url}/blog/${_id}`);      
        const blog = response?.data;
      setData(blog);
      setLoading(false);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    fetchApi();
  }, []);

  return (
    <div className="" style={{ }}>
      
      {loading && (
        <div className="loading">
        </div>
      )}
      {data && (
              <BlogDetailCard {...data}/>
      )}
    </div>
  );
};

export default BlogDetail;