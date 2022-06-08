import React, { useState } from "react";
import './Contact.css';

import axios from "axios";


const Contact = () => {

    const [Form, setForm] = useState({
        full_name: '',
        email: '',
        subject: '',
        message: '',
    });

    const OnChangeHandler = (e) => {
        const { value, name } = e.target;

        let val = {
            ...Form,
            [name]: value
        }


        setForm(val);
    }


    const Submit = (e) => {

        e.preventDefault();

        axios.post(
            'https://portfoliocontact-c33f2-default-rtdb.firebaseio.com/users.json',
            {
                full_name: Form.full_name,
                email: Form.email,
                subject: Form.subject,
                message: Form.message
            }
        ).then(
            res => {

                setForm({
                    full_name: '',
                    email: '',
                    subject: '',
                    message: '',
                });

            }
        ).catch(
            err => {

                console.log(err)

            }
        )

    }

    return (

        <>

            <div className="Contact" id='Contact'>

                <div className="Contact_Content">

                    <div className='Heading'>
                        <div style={{ position: 'relative' }}>
                            <h1 className='H1_Back'>CONTACT</h1>
                            <div className='Heading2'>
                                <h1 className='H1_1'>GET IN</h1>
                                <h1 className='H1_2'>TOUCH</h1>
                            </div>
                        </div>
                    </div>

                    <div className="Contact_Grid">

                        <div className="Contact_Details">
                            <h3>DON'T BE SHY !</h3>
                            <p>Feel free to get in touch with me. I am always open to discussing new projects,
                                creative ideas or opportunities to be part of your visions.</p>
                            <div className="Contact_Info">
                                <div>
                                    <i class="las la-map"></i>
                                </div>
                                <div>
                                    <h6>ADDRESS POINT</h6>
                                    <p>House No : R-874 Sector 09 North Karachi, Karachi, Pakistan 75850.</p>
                                </div>
                            </div>
                            <div className="Contact_Info">
                                <div>
                                    <i class="las la-envelope-open"></i>
                                </div>
                                <div>
                                    <h6>MAIL ME</h6>
                                    <p>m.malahim57#@gmail.com</p>
                                </div>
                            </div>
                            <div className="Contact_Info">
                                <div>
                                    <i class="las la-phone"></i>
                                </div>
                                <div>
                                    <h6>CALL ME</h6>
                                    <p>+92-342-2618990</p>
                                </div>
                            </div>

                            <div className="Contact_links">
                                <a href="https://www.facebook.com/malahim.ayoub" target="_blank"><i class="lab la-facebook-f"></i></a>
                                <a href="#" target="_blank"><i class="lab la-twitter"></i></a>
                                <a href="#" target="_blank"><i class="lab la-google-plus"></i></a>
                                <a href="https://www.linkedin.com/in/muhammad-malahim-314846142" target="_blank"><i class="lab la-linkedin-in"></i></a>

                            </div>
                        </div>

                        <form className="Contact_Form" onSubmit={Submit} >
                            <div className="input_grid">
                                <input type="text" placeholder="YOUR NAME" onChange={OnChangeHandler} name='full_name' value={Form.full_name} required />
                                <input type="text" placeholder="YOUR EMAIL" onChange={OnChangeHandler} name='email' value={Form.email} required />
                            </div>

                            <div className="py-3">
                                <input type="text" placeholder="YOUR SUBJECT" onChange={OnChangeHandler} name='subject' value={Form.subject} required />
                            </div>

                            <div className="my-3">
                                <textarea placeholder="YOUR MESSAGE" id="" cols="30" rows="5" onChange={OnChangeHandler} name='message' value={Form.message} required></textarea>
                            </div>

                            <button className="button" type="submit" style={{ cursor: "none" }}>
                                <span className="button-text">SEND MESSAGE</span>
                                <span className="button-icon"><i class="las la-paper-plane"></i></span>
                            </button>
                        </form>

                    </div>

                </div>

            </div>

        </>

    )

}

export default Contact;