import React, { useState, useEffect } from "react";
import "./Createblog.css";
import img1 from "../assets/images/basil_edit-solid.png";
import img2 from "../assets/images/mdi_tag.png";
import img3 from "../assets/images/ic_round-image.png";
import Navbar from "./Navbar";
import axios from "axios";
import toast from "react-hot-toast";
import { useNavigate, Navigate } from "react-router-dom";
import { useAuth } from "../AuthContext";

function CreateBlog() {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [author, setAuthor] = useState("");
  const [category, setCategory] = useState("");
  const [image, setImage] = useState(null);
  const [publishLoading, setPublishLoading] = useState(false);

    const navigate = useNavigate();
    const { token } = useAuth();

    useEffect(() => {
      const storedUsername = localStorage.getItem("auth");
      const parsedUsername = storedUsername ? JSON.parse(storedUsername).user.username : "";
      setAuthor(parsedUsername);
      // console.log(parsedUsername)

    }, []);

  const handleSubmit = async (e, isDraft) => {
    e.preventDefault();

    
        setPublishLoading(true);
      

    const formData = new FormData();
    formData.append("title", title);
    formData.append("content", content);
    formData.append("author", author);
    formData.append("imageUrl", image);
    formData.append("category", category);

    const api_url = import.meta.env.VITE_REACT_APP_BACKEND_API;

    try {
      const { data } = await axios.post(`${api_url}/create-blog`, formData, {
        headers: {
          "Content-Type": "multipart/form-data",
          Authorization: token,
        },
      });

      if (data?.message === "Blog created successfully") {
        toast.success("Blog created successfully");
        navigate("/profile");
      } else {
        toast.error("Failed to create a blog. Please try again.");
      }
    } catch (error) {
      toast.error("An error occurred while creating the blog.");
      console.error("Error:", error);
    } finally {
         
            setPublishLoading(false);
          
    }
  };
  return (
    <>
      <Navbar />
      <div className="container">
        <h1 className="head">Create a New Blog</h1>
        <div className="blog1">
          <form onSubmit={handleSubmit}>
            <div className="pro">
              <label htmlFor="Title">Title</label>
              <br />
              <div className="input-container">
                <img src={img1} alt="" className="icon" />
                <input
                  className="author"
                  type="text"
                  placeholder="Enter title here"
                  value={title}
                  onChange={(e) => setTitle(e.target.value)}
                  required
                />
              </div>
            </div>

            <div className="pro1 mt-3">
              <label htmlFor="Tag">Author</label>
              <br />
              <div className="input-container">
                <img src={img2} alt="" className="icon" />
                <input
                  className="author"
                  type="text"
                  placeholder="Write your username here"
                  value={author}
                  onChange={(e) => setAuthor(e.target.value)}
                  required
                  disabled
                />
              </div>
              <div className="input-container mt-3">
              <label htmlFor="Tag">Category</label>
                <input
                  className="author"
                  type="text"
                  placeholder="Write a category for your post"
                  value={category}
                  onChange={(e) => setCategory(e.target.value)}
                  required
                  
                />
              </div>
            </div>

            <div className="pro2 mt-3">
              <label htmlFor="Text">Add your cover image here</label>
              <div className="input-container form-group">
                  <input
                    type="file"
                    accept="image/*"
                    onChange={(e) => setImage(e.target.files[0])}
                    required
                  />
                  <img src={img3} alt="" className="icon2" />
              </div>
            </div>

            <div className="pro3 mt-3">
              <label htmlFor="Read time">Content</label>
              <div className="input-container">
                <textarea
                  className="form-control"
                  placeholder="Write your story here..."
                  value={content}
                  onChange={(e) => setContent(e.target.value)}
                  required
                />
              </div>
            </div>
            <div className="pub">
      <button
        className="pp"
        type="submit"
        disabled={publishLoading}
        onClick={(e) => handleSubmit(e, false)}
      >
        {publishLoading ? "Loading" : "Save to Drafts"}
      </button>
      
    </div>
          </form>
        </div>
      </div>
    </>
  );
}

export default CreateBlog;
