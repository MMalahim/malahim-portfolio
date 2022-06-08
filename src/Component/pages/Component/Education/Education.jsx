import React, { useEffect, useState } from "react";
import './Education.css';

const Education = () => {

    const [Education, setEducation] = useState([]);

    useEffect(
        () => {

            setEducation(
                [
                    {
                        decs: 'Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for previewing layouts and visual mockups.',
                        company: 'HAMDARD UNIVERSITY',
                        designation: 'BE COMPUTER SYSTEM ENGINEERING',
                        startYear: '02/2017',
                        endYear: '03/2021',
                        icon: 'las la-university' 
                    },
                    {
                        decs: 'Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for previewing layouts and visual mockups.',
                        company: 'GOVT. ISLAMIA COLLEGE',
                        designation: 'PRE-ENGINEERING',
                        startYear: '2014',
                        endYear: '2016',
                        icon: 'las la-graduation-cap'
                    },
                    {
                        decs: 'Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for previewing layouts and visual mockups.',
                        company: 'KARACHI ACADEMY',
                        designation: 'MATRICULATION',
                        startYear: '2010',
                        endYear: '2014',
                        icon: 'las la-school'
                    },
                ]
            )

        }, []
    )

    return (
        <>

            <div className='My_Education'>

                <div className="Education_Div">

                    <h4>EDUCATION</h4>

                    <div className="Education_Grid">
                        {
                            Education.map(
                                (val, index) => {
                                    return (
                                        <>
                                            <div className="LeftGrid">
                                                <div>
                                                    <div className="circle"><i class={val.icon}></i></div>
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

export default Education;