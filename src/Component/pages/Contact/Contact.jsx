import React, { useState } from "react";
import './Contact.css';

import ReactJsAlert from "reactjs-alert";

const Contact = () => {

    const [status, setStatus] = useState(false);
    const [type, setType] = useState("");
    const [title, setTitle] = useState("");
    const success = () => {
        setStatus(true);
        setType("success");
        setTitle("This is a success alert");
    }

    return (

        <>

            <ReactJsAlert
                status={status} // true or false
                type={type} // success, warning, error, info
                title={title}
                quotes={true}
                quote="This is a dummy design that shows an example of reactjs-alert"
                Close={() => setStatus(false)}
            />

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
                                    <p>123 Stree New York City , United States Of America 750065.</p>
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
                                    <p>+923422618990</p>
                                </div>
                            </div>

                            <div className="Contact_links">
                                <div><i class="lab la-facebook-f"></i></div>
                                <div><i class="lab la-twitter"></i></div>
                                <div><i class="lab la-google-plus"></i></div>
                                <div><i class="lab la-linkedin-in"></i></div>

                            </div>
                        </div>

                        <div className="Contact_Form">
                            <div className="input_grid">
                                <input type="text" placeholder="YOUR NAME" />
                                <input type="text" placeholder="YOUR EMAIL" />
                            </div>

                            <div className="py-3">
                                <input type="text" placeholder="YOUR SUBJECT" />
                            </div>

                            <div className="my-3">
                                <textarea placeholder="YOUR MESSAGE" name="" id="" cols="30" rows="5"></textarea>
                            </div>

                            <button className="button" style={{ cursor: "none" }} onClick={success}>
                                <span className="button-text">SEND MESSAGE</span>
                                <span className="button-icon"><i class="las la-paper-plane"></i></span>
                            </button>
                        </div>

                    </div>

                </div>

            </div>

        </>

    )

}

export default Contact;