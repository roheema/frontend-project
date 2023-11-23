import React, { useState, useEffect } from 'react';
import v1 from '../assets/images/ep_view.png';
import v2 from '../assets/images/Ellipse 1.png';
import vectorIcon from '../assets/images/Vector (1).png';
import '../components/DraftCard.css';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import mod1 from '../assets/images/fa_send.png';
import mod2 from '../assets/images/basil_edit-solid.png';
import mod3 from '../assets/images/mdi_delete.png';
import { Link } from 'react-router-dom';
import axios from 'axios';
import toast from 'react-hot-toast';


// ... (other imports)

const DraftCard = () => {
  const [show, setShow] = useState(false);
  const [selectedBlogId, setSelectedBlogId] = useState(null);
   const [currentPage, setCurrentPage] = useState(1); // Track the current page

  const handleClose = () => {
    setShow(false);
    setSelectedBlogId(null);
  };

  const handleShow = (blogId) => {
    setShow(true);
    setSelectedBlogId(blogId);
  };

   const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchApi = async () => {
    const api_url = import.meta.env.VITE_REACT_APP_BACKEND_API;
    try {
      const response = await axios.get(`${api_url}/blogs/all`);
      const blogs = response.data;
      setData(blogs);
      setLoading(false);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    fetchApi();
  }, []);

  const handleDelete = async () => {
    try {
      const api_url = import.meta.env.VITE_REACT_APP_BACKEND_API;
      await axios.delete(`${api_url}/blog/${selectedBlogId}`);
      console.log("Blog deleted successfully!");
      toast.success('Blog deleted successfully!')
      fetchApi();
      handleClose();
    } catch (err) {
      console.error("Error deleting blog:", err);
      toast.error('Error deleting Blog!')
    }
  };

  ////////////////////
  const blogsPerPage = 6;
  const pages = Math.ceil(data.filter((blog) => blog.state === "draft").length / blogsPerPage);
  const indexOfLastBlog = currentPage * blogsPerPage;
  const indexOfFirstBlog = indexOfLastBlog - blogsPerPage;
  const currentBlogs = data
    .filter((blog) => blog.state === "draft")
    .slice(indexOfFirstBlog, indexOfLastBlog);

  const paginate = (pageNumber) => setCurrentPage(pageNumber);


  return (
    <>
      <div className="content-container">
        {currentBlogs.map((blog) => (
          <div key={blog._id} className="draft-container">
              <div className="draft-img">
                <img src={blog.imageUrl} alt="" className="d-img" />
              </div>
              <div className="text-container">
                <div className="details">
                  <p className="self">{blog.category}</p>
                  <span>
                    <img src={v1} alt="" className="detail" />
                    {blog.viewCount} 3 views
                  </span>
                  <span>
                    <img src={v2} alt="" /> {blog.readCount} 4 mins read
                  </span>
                  {/* <p className="date">{blog.timestamps}</p> */}
                </div>
                <div className="div">
                  <b>{blog.title}</b>
                  <p>{blog.content}</p>
                </div>
                <div className="vector">
                  <img
                    src={vectorIcon}
                    alt=""
                    onClick={() => handleShow(blog._id)}
                  />
                </div>
                
              </div>
              
            </div>
          ))}
      </div>
      <Modal
                  show={show}
                  onHide={handleClose}
                  variant="primary"
                  className="mod-mod3"
                >
                  <Modal.Body>
                    <li>
                      <Link>
                        <img src={mod1} alt="" /> Publish
                      </Link>
                    </li>
                    <li>
                      <Link to={`/blogger/${selectedBlogId}`} className="editpost">
                        <img src={mod2} alt="" /> Edit
                      </Link>
                    </li>
                    <li>
                      <Link variant="danger" onClick={handleDelete}>
                        <img src={mod3} alt="" /> Delete
                      </Link>
                    </li>
                  </Modal.Body>
                </Modal>
       <div className="pagination">
        <button className="previous bg-primary text-light" onClick={() => paginate(currentPage - 1)} disabled={currentPage === 1}>
          Previous
        </button>
        {Array.from({ length: pages }).map((_, index) => (
          <button className="no bg-danger text-light" key={index} onClick={() => paginate(index + 1)}>
            {index + 1}
          </button>
        ))}
        <button className="next bg-primary text-light" onClick={() => paginate(currentPage + 1)} disabled={currentPage === pages}>
          Next
        </button>
      </div>
    </>
  );
};

export default DraftCard;