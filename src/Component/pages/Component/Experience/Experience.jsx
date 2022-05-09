import React, { useEffect, useState } from "react";
import './Experience.css';

const Experience = () => {

    const [Experience, setExperience] = useState([]);
    
    useEffect(
        () => {

            setExperience(
                [
                    {
                        decs: 'Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for previewing layouts and visual mockups.',
                        company: 'SEABOARD LOGISTICS',
                        designation: 'REACT JS DEVELOPER',
                        startYear: '08/2021',
                        endYear: 'present',
                    },
                    {
                        decs: 'Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for previewing layouts and visual mockups.',
                        company: 'ABC TECH SOLUTIONS',
                        designation: 'MANUAL TESTER',
                        startYear: '09/2021',
                        endYear: '04/2022',
                    },
                ]
            )

        }, []
    )

    return (
        <>

            <div className='My_Experience'>

                <div className="Experience_Div">

                    <h4>EXPERIENCE</h4>

                    <div className="Experience_Grid">
                        {
                            Experience.map(
                                (val, index) => {
                                    return (
                                        <>
                                            <div className="LeftGrid">
                                                <div>
                                                    <div className="circle"><i class="las la-briefcase"></i></div>
                                                    <div className="line"></div>
                                                </div>
                                                <div>
                                                    <div className="timeperiod">
                                                        <p>{val.startYear} - {val.endYear}</p>
                                                    </div>
                                                    <h5>{val.designation} - {val.company}</h5>
                                                    <p style={{ color: 'rgb(197, 197, 197)' }}>{val.decs}</p>
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

export default Experience;