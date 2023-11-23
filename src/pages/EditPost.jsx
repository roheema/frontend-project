// EditBlog.jsx
import React, { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import { toast, Toaster } from 'react-hot-toast';
import { useNavigate } from "react-router-dom";



const EditBlog = () => {
  const { _id } = useParams();
  const navigate = useNavigate();

  const [blogData, setBlogData] = useState({
    title: "",
    content: "",
    author: "",
    state: "", // draft or published
    category: "",
    imageUrl: "",
  });

  const [loading, setLoading] = useState(true);
  const api_url = import.meta.env.VITE_REACT_APP_BACKEND_API;

  const fetchBlog = async () => {
    try {
      const response = await axios.get(`${api_url}/blog/${_id}`);
      const blog = response.data;
      setBlogData(blog);
      setLoading(false);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    fetchBlog();
  }, [_id]);

  const handleChange = (e) => {
    const { name, value, files } = e.target;

    // Check if the input is a file input
    const newValue = files ? files[0] : value;

    setBlogData((prevData) => ({
      ...prevData,
      [name]: newValue,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append("title", blogData.title);
    formData.append("content", blogData.content);
    formData.append("author", blogData.author);
    formData.append("state", blogData.state);
    formData.append("category", blogData.category);
    formData.append("imageUrl", blogData.image); // Assuming 'image' is the key for the image file

    try {
      await axios.put(`${api_url}/blogger/${_id}`, formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });

      console.log("Blog updated successfully!");
      toast.success("Blog updated successfully!");
      navigate("/profile");
    } catch (err) {
      console.log(err);
      toast.error("Error updating blog. Please try again.");
    }
  };

  return (
    <div className="">
      <Toaster position="top-right" />
      <h1 className="bg-success text-light">Edit Blog</h1>
      {loading ? (
        <div className="loading">Loading...</div>
      ) : (
        <form className="col-12 col-md-6 offset-md-3" onSubmit={handleSubmit}>
          <div className="form-control">
            <label>Title:</label>
            <input
            className="form-control p-3"
              type="text"
              name="title"
              value={blogData.title}
              onChange={handleChange}
            />
          </div>
          <div className="form-control my-3">
            <label>Author:</label>
            <input
            className="form-control p-3"
              type="text"
              name="author"
              value={blogData.author}
              onChange={handleChange}
            />
          </div>
          <div className="form-control">
            <label>Content:</label>
            <textarea
            className="form-control"
              name="content"
              value={blogData.content}
              onChange={handleChange}
            />
          </div>
          
          <div className="form-control my-3">
  <label>State (draft or published):</label>
  <select
    className="form-control p-3"
    name="state"
    value={blogData.state}
    onChange={handleChange}
  >
    <option value="draft">Draft</option>
    <option value="published">Published</option>
  </select>
</div>

          <div className="form-control">
            <label>Category:</label>
            <input
            className="form-control p-3"
              type="text"
              name="category"
              value={blogData.category}
              onChange={handleChange}
            />
          </div>
          <div className="form-control my-3">
            <label htmlFor="image">Choose Image:</label>
          <input
            type="file"
            accept="image/*"
            name="image"
            onChange={handleChange}
          />
            
          </div>
          <button className="btn btn-primary" type="submit">Save Changes</button>
        </form>
      )}
    </div>
  );
};



export default EditBlog;