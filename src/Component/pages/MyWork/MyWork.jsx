import React, { useEffect, useState } from "react";
import './MyWork.css';

import img from '../../../Images/work/Screenshot (5).png'
import img2 from '../../../Images/work/Screenshot (86).png'
import img3 from '../../../Images/work/Screenshot (87).png'
import img4 from '../../../Images/work/about.png'
import img5 from '../../../Images/work/cards.png'
import img6 from '../../../Images/work/items details.png'
import img7 from '../../../Images/work/items list.png'
import img8 from '../../../Images/work/login.png'


const MyWork = () => {

    const [ MyWorkDetails, setMyWorkDetails ] = useState([]);


    useEffect(
        () => {
            setMyWorkDetails(
                [
                    {
                        work_img: img,
                        work_desc: 'History Cycle'
                    },
                    {
                        work_img: img2,
                        work_desc: 'Login form sample'
                    },
                    {
                        work_img: img3,
                        work_desc: 'Bio Data form sample'
                    },
                    {
                        work_img: img4,
                        work_desc: 'About Us'
                    },
                    {
                        work_img: img5,
                        work_desc: 'Our Team'
                    },
                    {
                        work_img: img6,
                        work_desc: 'Items Details'
                    },
                    {
                        work_img: img7,
                        work_desc: 'Items List'
                    },
                    {
                        work_img: img8,
                        work_desc: 'Login form sample'
                    },

                ]
            )
        }, []
    )

    return (

        <>

            <div className="MyWork" id='MyWork'>

                <div className="MyWork_Content">

                    <div className='Heading'>
                        <div style={{ position: 'relative' }}>
                            <h1 className='H1_Back'>WORK</h1>
                            <div className='Heading2'>
                                <h1 className='H1_1'>MY</h1>
                                <h1 className='H1_2'>PORTFOLIO</h1>
                            </div>
                        </div>
                    </div>

                    <div className="MyWork_Grid">

                        {
                            MyWorkDetails.map(
                                (val, index) => {
                                    return (
                                        <>
                                            <div key={index}>
                                                <img src={val.work_img} alt="" />
                                                <div className="work_desc">
                                                    <h4>{val.work_desc}</h4>
                                                </div>
                                            </div>
                                        </>
                                    )
                                }
                            )
                        }

                    </div>

                </div>

            </div>

        </>

    )

}

export default MyWork;