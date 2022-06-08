import React, { useEffect, useState } from "react";
import './Projects.css';

import projectImg from '../../../../Images/project/project.jpg'
import projectImg1 from '../../../../Images/project/project1.jpg'
import projectImg2 from '../../../../Images/project/project2.jpg'

const Projects = () => {

    const [ FYP, setFYP ] = useState([]);

    const [ ProjectsInfo, setProjectsInfo ] = useState([]);

    useEffect(
        () => {

            setFYP(
                [
                    {
                        fypImg: projectImg,
                        fypTitle: 'GSM and IoT based Smart Traffic System with Geofencing',
                        fypDesc: '- A Funded project by Ignite iot.',
                        fypDesc1:'- Developed React Native Application for Android and iOS.',
                        fypDesc2:'- Hardware components ( RFID tags, Magnetometer, Arduino mega ).',
                        fypDesc3:'- A prototype project submitted to University',
                    },
                ]
            )
            
            setProjectsInfo(
                [
                    {
                        projectimg: projectImg1,
                        projectTitle: 'Employment Management System',
                        projectDesc: '- Database on Xampp( My SQL)',
                    },
                    {
                        projectimg: projectImg,
                        projectTitle: 'Library Management System',
                        projectDesc: '- Java coding on Netbeans IDE',
                    },
                    {
                        projectimg: projectImg2,
                        projectTitle: '100 Watt Inverter',
                        projectDesc: '- PCB Board Designing and Soldering.',
                        projectDesc1: '- Certificate on Presenting ( Hamdard University Project Exhibition - 2018).',
                    },
                    {
                        projectimg: projectImg,
                        projectTitle: 'School Management System',
                        projectDesc: '- C++ Coding on Visual Studio IDE',
                        projectDesc1: '- Storing records of Students, Faculty and Staff',
                        projectDesc2: '- Security Mechanism', 
                    },
                ]
            )

        }, []
    )

    return (
        <>

            <div className="Projects">
                <h4>MY PROJECTS</h4>

                <div className="mt-3">
                    <h3>- FINAL YEAR PROJECT</h3>
                    <div className="Projects_Grid">

                        {
                            FYP.map(
                                (val) => {
                                    return(
                                        <>
                                            <div className="Projects_container">

                                                <div className="Projects_image">
                                                    <img src={val.fypImg} alt="" />

                                                </div>
                                                <div className="hr-line">

                                                </div>
                                                <div className="Projects_decs">

                                                    <h5>{val.fypTitle}</h5>
                                                    <p>{val.fypDesc}</p>
                                                    <p>{val.fypDesc1}</p>
                                                    <p>{val.fypDesc2}</p>
                                                    <p>{val.fypDesc3}</p>

                                                </div>
                                            </div>
                                        </>
                                    )
                                }
                            )
                        }

                    </div>
                </div>

                <div className="">
                    <h3>- SEMESTERS PROJECT</h3>
                    <div className="Projects_Grid">

                        {
                            ProjectsInfo.map(
                                (val) => {
                                    return(
                                        <>

                                            <div className="Projects_container">

                                                <div className="Projects_image">
                                                    <img src={val.projectimg} alt="" />

                                                </div>
                                                <div className="hr-line">

                                                </div>
                                                <div className="Projects_decs">

                                                    <h5>{val.projectTitle}</h5>
                                                    <p>{val.projectDesc}</p>
                                                    <p>{val.projectDesc1}</p>
                                                    <p>{val.projectDesc2}</p>

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

export default Projects;