import React, { useState, useRef } from 'react';
import '../Assets/general.scss';
import { getAuth, signOut } from "firebase/auth";
import firebase from '../firebase';
import { useNavigate } from "react-router-dom";
import Modal from 'react-bootstrap/Modal';
import { Link } from 'react-scroll';
import Dropdown from 'react-bootstrap/Dropdown';
export const Navbar = () => {

  const navigate = useNavigate();
  const aboutref = useRef();
  const [booktable, setBookTable] = useState(false)
  const auth = firebase.auth()
  const user = auth.currentUser;

  const login = () => {
    if (user) {
      const email = user.email;
      const uid = user.uid;
      // console.log("user detaislasn", email, uid)
      signOut(auth).then(() => {
        navigate('/')
        // Sign-out successful.
      }).catch((error) => {
        // An error happened.
        console.log(error)
      });
    } else {
      // console.log("usernot available")
      navigate('/login')
    }
  }

  const handleClose = () => {
    setBookTable(false)
  }

  return (
    <>
      {booktable ? (
        <Modal show={booktable}
          onHide={handleClose}
          dialogClassName="modal-100w"
          aria-labelledby="example-custom-modal-styling-title"
          keyboard={false}
        >
          <Modal.Header closeButton>
          </Modal.Header>
          <Modal.Body>

            bfusffwefhwefk
          </Modal.Body>
        </Modal>
      ) : ""}

      <div className='header'>
        <nav className="navbar navbar-expand-lg bg-white">
          <div className="container-fluid d-flex align-item-center">
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse list" id="navbarNav">
              <a className="navbar-brand" href="#">Yummy<span>.</span></a>

              <ul className="navbar-nav">
                <li className="nav-item">
                <Link className="nav-link" activeClass="active" smooth spy to="top-part" >Home</Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" activeClass="active" smooth spy to="about" >About</Link>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#">Menu</a>
                </li>
                <li className="nav-item">
                <Link className="nav-link" activeClass="active" smooth spy to="events" >Events</Link>
                </li>
                <li className="nav-item">
                <Link className="nav-link" activeClass="active" smooth spy to="chefs" >Chefs</Link>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#">Gallery</a>
                </li>
                <li className="nav-item">
                <Link className="nav-link" activeClass="active" smooth spy to="contact-us" >Contact Us</Link>
                </li>
              </ul>
              <div className='btn-groupd d-flex'>
                <div className='first-button'>
                <Link to="booktable" smooth={true}>
                  <button type="button" className="btn btn-danger">Book A Table</button>
                </Link>  
                </div>
                <div className='second-table'>
                <button type="button" className="btn btn-danger ml-2" onClick={() => login()}> {user ? ("Log Out") : ("Log In")}</button>
                </div>
              </div>
            </div>
          </div>
        </nav>
      </div>
    </>
  )
}

