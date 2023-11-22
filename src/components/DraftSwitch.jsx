import React from 'react';
import '../components/DraftSwitch.css';
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const BlogDraft = () => {
  return (
    <div>
      <div className="container mx-6 my-5">
        <div className="switch-links me-6">
          <a href='/profile'style={{ backgroundColor: 'white', color: 'black', border: 'none' }} className='links'>
            Published
          </a>
          <a className="links"  href="#" style={{ backgroundColor: 'lightSkyBlue', color: 'white' }}>
            Drafts
          </a>
        </div>
      </div>
    </div>
  );
};

export default BlogDraft;