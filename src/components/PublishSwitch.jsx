import React, {useState} from 'react';
import './PublishSwitch.css';
import { Button } from 'react-bootstrap';
import { Modal } from 'react-bootstrap';
// import { Link } from 'react-router-dom';

const BlogButton = () => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
    
  return (
    <div>
      <div className="container mx-6 my-5">
        <div className="switch-links me-6">
          <a style={{ backgroundColor: 'lightSkyBlue', color: 'white' }} className='links'>
            Published
          </a>
          <a className="links"  href="/draft" style={{ backgroundColor: 'white', color: 'black', border: 'none'  }}>
            Drafts
          </a>
        </div>
      </div>
    </div>
  );
};

export default BlogButton;