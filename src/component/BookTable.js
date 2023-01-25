import React, { useEffect, useState } from 'react'
import bookimg from '../Assets/pictures/booktable.jpg'
import { getAuth } from "firebase/auth";
import firebase from '../firebase';
import Modal from 'react-bootstrap/Modal';
import { Navigate, useNavigate } from 'react-router-dom';
import { Button } from 'react-bootstrap';
export const BookTable = () => {

    const [tabledata, setTableData] = useState({
        fname: '', lname: '', date: '', time: '', size: '', phone: '', message: ''
    })
    const [pleaselogin, setPleaseLogin] = useState(false)
    const auth = firebase.auth()
    const user = auth.currentUser;
    const navigate = useNavigate();
    const handelSubmit = (e) => {
        e.preventDefault()

        if (user != null) {
            // User is signed in
            console.log("not is sign in")
        } else {
            // No user is signed in
            console.log("not sign in")
            setPleaseLogin(true)
        }


        console.log("submit", tabledata)
    }
    const handelChange = (e) => {
        // e.preventDefault();
        if (e.target.name) {
            setTableData({ ...tabledata, [e.target.name]: e.target.value })
        }
    }
    const handleClose = () => { setPleaseLogin(false); }
    return (

        <div id="booktable" className='text-center'>
            {pleaselogin &&
                <Modal show={pleaselogin} onHide={handleClose}>
                    <Modal.Header closeButton>

                    </Modal.Header>
                    <Modal.Body>Please Login to Book A Table.</Modal.Body>
                    <Modal.Footer>
                        <Button variant="secondary" onClick={handleClose}>
                            Close
                        </Button>
                        <Button variant="primary" onClick={() => navigate('/login')}>
                            Login
                        </Button>
                    </Modal.Footer>
                </Modal>
            }
           <div className='heading mt-5'>
                        <p>Book A Table</p>
                        <h4 className='mb-3'>Book <span> Your Stay</span>With Us</h4>
                    </div>
            <section className="form1 bg-grey">
                <div className="container">
                    <div className="row mb-5">
                        <div className="col-lg-4 col-md-6 p-0">
                            <div className="text-block mbr-white">
                                <img src={bookimg} width="100%" height="400px"></img>
                            </div>
                        </div>
                        <div className="form-1 col-lg-8 col-md-6 p-3 " >
                            <form>
                                <div className="row">
                                    <div className="col">
                                        <input type="text"
                                            name="fname"
                                            value={tabledata.fname}
                                            className="form-control"
                                            placeholder="First name"
                                            onChange={(e) => handelChange(e)}
                                        />
                                    </div>
                                    <div className="col">
                                        <input type="text"
                                            name="lname"
                                            value={tabledata.lname}
                                            className="form-control"
                                            placeholder="Last name"
                                            onChange={(e) => handelChange(e)} />
                                    </div>
                                </div>
                                <div className="row pt-4">
                                    <div className="col">
                                        <input type="date"
                                            name="date"
                                            value={tabledata.date}
                                            className="form-control"
                                            placeholder="Date"
                                            onChange={(e) => handelChange(e)} />
                                    </div>
                                    <div className="col">
                                        <input type="time"
                                            name="time"
                                            value={tabledata.time}
                                            className="form-control"
                                            placeholder="Time"
                                            onChange={(e) => handelChange(e)} />
                                    </div>
                                </div>
                                <div className="row pt-4">
                                    <div className="col">
                                        <input type="number"
                                            name="size"
                                            value={tabledata.size}
                                            className="form-control"
                                            placeholder="Party Size"
                                            onChange={(e) => handelChange(e)} />
                                    </div>
                                    <div className="col">
                                        <input type="text"
                                            value={tabledata.phone}
                                            className="form-control"
                                            placeholder="Phone Number"
                                            onChange={(e) => handelChange(e)} />
                                    </div>
                                </div>
                                <div className="form-group">
                                    <label htmlFor="exampleFormControlTextarea1"></label>
                                    <textarea
                                        value={tabledata.message}
                                        name="message"
                                        className="form-control"
                                        rows="3"
                                        placeholder='Message'
                                        onChange={(e) => handelChange(e)}></textarea>
                                </div>
                                <button
                                    type='click'
                                    className='btn btn-danger mt-5 animation' onClick={(e) => handelSubmit(e)}>Submit</button>
                            </form>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}
