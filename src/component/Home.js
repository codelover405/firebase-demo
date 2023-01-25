import React, { useState } from 'react';
import { Aboutus } from './Aboutus';
import { Navbar } from './Navbar';
import { TopPart } from './TopPart';
import Modal from 'react-bootstrap/Modal';
import CarouselSlider from '../component/Carousel';
import { BookTable } from './BookTable';
import { Chefs } from './Chefs/Chefs';
import { Footer } from './Footer/Footer';
import { ContactUs } from './Contactus/ContactUs';
import { Events } from './Events/Events';
const Home = () => {

  const [modal, setModal] = useState(false);
  const handleClose = () => {
    setModal(false)
  }

  const handlechange  = (dd)  => {
    console.log("dd",dd);
    setModal(dd)
  }
  
  return (
    <div className='main-content'>
        <Navbar />
        
        <TopPart handlechange={handlechange} />
        <Aboutus handlechange={handlechange} />
        <BookTable />
        <Events/>
        <Chefs/>
        <ContactUs/>
        {/* <Footer/> */}
        <Modal show={modal}
          onHide={handleClose}
          keyboard={false}
        >
          <Modal.Header closeButton>
          </Modal.Header>
          <Modal.Body>
            <CarouselSlider />
          </Modal.Body>
        </Modal>
    </div>
  )
}

export default Home;