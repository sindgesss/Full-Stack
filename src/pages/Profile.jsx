import React from 'react';
import { Footer, Navbar } from "../components";
import { Link } from 'react-router-dom';

const Profile = () => {
    return (
        <>
            <Navbar />
            <div className="container my-3 py-3">
                <h1 className="text-center">Profile</h1>
                <hr />
                <div className="row my-4 h-100">
                    <div className="col-md-4 col-lg-4 col-sm-8 mx-auto">
                        <form>
                            <div className="form my-3">
                                <label htmlFor="Name">Full Name</label>
                                <input
                                    type="text"
                                    className="form-control"
                                    id="Name"
                                    placeholder="Enter Your Name"
                                    defaultValue="Sooraj Sajit" // Example placeholder value
                                />
                            </div>
                            <div className="form my-3">
                                <label htmlFor="Email">Email address</label>
                                <input
                                    type="email"
                                    className="form-control"
                                    id="Email"
                                    placeholder="name@example.com"
                                    defaultValue="soorajsajit@gmail.com" // Example placeholder value
                                />
                            </div>
                            <div className="form my-3">
                                <label htmlFor="Password">Address</label>
                                <input
                                    type="text"
                                    className="form-control"
                                    id="Name"
                                    placeholder="Address"
                                    defaultValue="Karthika,Grammam,Chelakkara" 
                                />
                            </div>
                            <div className="text-center">
                               
                            </div>
                        </form>
                    </div>
                </div>
            </div>
            <Footer />
        </>
    )
}

export default Profile;