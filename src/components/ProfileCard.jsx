import React, { useState, useEffect } from 'react';
import { Form, Button } from 'react-bootstrap';
import defaultPic from '../assets/images/Ellipse 2.png';
import v1 from "../assets/images/Ellipse 1.png";
import './ProfileCard.css';
import Navbar from './Navbar';

const BlogProfileCard = () => {
  const [isEditing, setIsEditing] = useState(false);
  const [user, setUser] = useState('Jane Doe');
  const [description, setDescription] = useState('Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ridiculus in tellus cras vitae donec pellentesque condimentum feugiat. Massa id vestibulum enim nunc netus aliquet id feugiat hac. Vel malesuada odio volutpat magna quis. Feugiat sodales cras diam dictum se.');
  const [imageUrl, setImageUrl] = useState(defaultPic); // Set default picture here
  const [views, setViews] = useState("15,000");
  const [published, setPublished] = useState(60);

  useEffect(() => {
    // Load data from localStorage on component mount
    const storedUser = localStorage.getItem('user');
    const storedDescription = localStorage.getItem('description');
    const storedImageUrl = localStorage.getItem('imageUrl');

    if (storedUser) setUser(storedUser);
    if (storedDescription) setDescription(storedDescription);

    // Use the default picture if there's no stored image or the user hasn't changed it
    if (storedImageUrl) {
      setImageUrl(storedImageUrl);
    } else {
      setImageUrl(defaultPic);
    }
  }, []); // Empty dependency array to run the effect only once on mount

  const toggleEdit = () => {
    setIsEditing((prevState) => !prevState);
  };

  const handleNameChange = (e) => {
    setUser(e.target.value);
  };

  const handleDescriptionChange = (e) => {
    setDescription(e.target.value);
  };

  const handleImageChange = (e) => {
    const newPic = URL.createObjectURL(e.target.files[0]);
    setImageUrl(newPic);
  };

  const saveChanges = () => {
    // Save changes or update state values here
    setIsEditing(false);

    // Save data to localStorage
    localStorage.setItem('user', user);
    localStorage.setItem('description', description);
    localStorage.setItem('imageUrl', imageUrl);

    // Reload the page to reflect the changes
  window.location.reload();
  };

  return (
    <>
    <Navbar/>
      <div className="profile-container">
        <div className="profile">
          <img
            src={imageUrl}
            alt="Profile"
            className="profile-picture"
          />
          <div className="text-container">
            {isEditing ? (
              <Form>
                <Form.Group controlId="formName">
                  <Form.Label>Name</Form.Label>
                  <Form.Control type="text" value={user} onChange={handleNameChange} />
                </Form.Group>
                <Form.Group controlId="formDescription">
                  <Form.Label>Description</Form.Label>
                  <Form.Control as="textarea" rows={3} value={description} onChange={handleDescriptionChange} />
                </Form.Group>
                <Form.Group controlId="formImage">
                  <Form.Label>Change Profile Picture</Form.Label>
                  <Form.Control type="file" onChange={handleImageChange} />
                </Form.Group>
              </Form>
            ) : (
              <>
                <h1>{user}</h1>
                <p className='para-text'>{description}</p>
              </>
            )}
            {!isEditing && (
              <div className="details">
                <p>{views} views <img src={v1} /> {published} Published</p>
              </div>
            )}
            <div className="edit-button">
              {isEditing ? (
                <Button variant="primary" onClick={saveChanges} className='edit-save'>Save</Button>
              ) : (
                <Button variant="info" onClick={toggleEdit} className='edit'>Edit</Button>
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default BlogProfileCard;