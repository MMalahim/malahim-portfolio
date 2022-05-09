import React, { useEffect, useState } from "react";
import './Projects.css';

import projectImg from '../../../../Images/project.jpg'
import projectImg1 from '../../../../Images/project1.jpg'
import projectImg2 from '../../../../Images/project2.jpg'

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
                        fypDesc: 'In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface',
                    },
                ]
            )
            
            setProjectsInfo(
                [
                    {
                        projectimg: projectImg1,
                        projectTitle: 'Employment Management System',
                        projectDesc: 'In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface',
                    },
                    {
                        projectimg: projectImg,
                        projectTitle: 'Library Management System',
                        projectDesc: 'In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface',
                    },
                    {
                        projectimg: projectImg2,
                        projectTitle: '100 Watt Inverter',
                        projectDesc: 'In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface',
                    },
                    {
                        projectimg: projectImg,
                        projectTitle: 'School Management System',
                        projectDesc: 'In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface',
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