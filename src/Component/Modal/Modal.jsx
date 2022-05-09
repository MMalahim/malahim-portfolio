import React, { useEffect, useState } from 'react'
import './Modal.css';

import $ from 'jquery';
import Experience from '../pages/Component/Experience/Experience';
import Projects from '../pages/Component/Projects/Projects';
import Education from '../pages/Component/Education/Education';
import Skills from '../pages/Component/Skills/Skills';
import Certificate from '../pages/Component/Certificate/Certificate';

const Modal = () => {

    const [DetailsMode, setDetailsMode] = useState('');
    const [PrInfoleft, setPrInfoleft] = useState([]);
    const [PrInforight, setPrInforight] = useState([]);

    const [FieldInfo, setFieldInfo] = useState([]);

    useEffect(
        () => {
            setPrInfoleft(
                [
                    {
                        left: 'Name',
                        right: 'Muhammad Malahim'
                    },
                    {
                        left: 'Age',
                        right: '23 years'
                    },
                    {
                        left: 'Phone No',
                        right: '03422618990'
                    },
                    {
                        left: 'Email',
                        right: 'm.malahim57@gmail.com'
                    },

                ]
            )

            setPrInforight(
                [
                    {
                        left: 'Father Name',
                        right: 'Muhammad Ayoub'
                    },
                    {
                        left: 'Nationality',
                        right: 'Pakistani'
                    },
                    {
                        left: 'Address',
                        right: 'North Karachi'
                    },
                    {
                        left: 'Linkedin',
                        right: 'malahim/linkedin'
                    },

                ]
            )

            setFieldInfo(
                [
                    {
                        count: '01',
                        txt: 'Years Of Experience',
                        id: 'Experience'
                    },
                    {
                        count: '05',
                        txt: 'Completed Projects',
                        id: 'Projects'
                    },
                    {
                        count: '08',
                        txt: 'Certificates',
                        id: 'cer'
                    },
                    {
                        count: '01',
                        txt: 'Years Of Experience',
                        id: 'ex'
                    },
                ]
            )

        }, []
    )


    const cancle = () => {

        $('#Modal').css('top', '100%');

    }

    const showdetails = (id) => {

        // document.getElementById('Experience').style.top = 0;

        $('.modals').css('top', '-100%');
        document.getElementById(id).style.top = 0;
        setDetailsMode(id);

    }

    return (
        <>
            <div className="Modal" id="Modal">

                <div className='Modal_Content'>
                    <div className='cross' onClick={cancle}><i class="las la-times"></i></div>


                    <div className='Heading'>
                        <div style={{ position: 'relative' }}>
                            <h1 className='H1_Back'>RESUME</h1>
                            <div className='Heading2'>
                                <h1 className='H1_1'>ABOUT</h1>
                                <h1 className='H1_2'>ME</h1>
                            </div>
                        </div>
                    </div>

                    {/* PERSONAL INFORMATION */}

                    <div className='Info_Grid'>
                        <div className='Personal_Info'>
                            <h4>PERSONAL INFORMATION</h4>
                            <div className='inner_grid'>
                                <div className='left'>
                                    {
                                        PrInfoleft.map(
                                            (val, index) => {
                                                return (
                                                    <>
                                                        <div className='d-flex align-items-center my-4'>
                                                            <h6>{val.left} : </h6>
                                                            <p>{val.right}</p>
                                                        </div>
                                                    </>
                                                )
                                            }
                                        )
                                    }
                                </div>
                                <div className='right'>
                                    {
                                        PrInforight.map(
                                            (val, index) => {
                                                return (
                                                    <>
                                                        <div className='d-flex align-items-center my-4'>
                                                            <h6>{val.left} : </h6>
                                                            <p>{val.right}</p>
                                                        </div>
                                                    </>
                                                )
                                            }
                                        )
                                    }
                                </div>
                            </div>
                            <button className="button" style={{ cursor: "none" }} >
                                <span className="button-text">DOWNLOAD CV</span>
                                <span className="button-icon"><i class="las la-download"></i></span>
                            </button>
                        </div>
                        <div className='Field_Info'>
                            {
                                FieldInfo.map(
                                    (val) => {
                                        return (
                                            <>
                                                <div className='cards'>
                                                    <div>
                                                        <h1>{val.count}</h1>
                                                        <div className='d-flex'>
                                                            <div className="line"></div>
                                                            <p onClick={() => showdetails(val.id)}>{val.txt}</p>
                                                        </div>
                                                    </div>
                                                </div>
                                            </>
                                        )
                                    }
                                )
                            }
                        </div>
                    </div>

                    <div className='Hr_Line'></div>

                    {/* SKILLS */}

                    <Skills/>

                    <div className='Hr_Line'></div>

                    {/* EXPERIENCE */}

                    <Experience/>

                    <div className='Hr_Line'></div>

                    {/* EDUCATION */}

                    <Education/>

                    <div className='Hr_Line'></div>

                    {/* Projects */}

                    <Projects/>

                    <div className='Hr_Line'></div>

                    {/* Certificate */}

                    <Certificate/>

                    <div className='Hr_Line'></div>

                </div>

            </div>
        </>
    )
}
export default Modal;