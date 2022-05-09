import React, { useEffect, useState } from "react";
import './Skills.css';

const Skills = () => {

    
    const [SkillsData, setSkillsData] = useState([]);

    useEffect(
        
        () => {

            setSkillsData(

                [
                    {
                        percent: '90%',
                        title: 'HTML'
                    },
                    {
                        percent: '85%',
                        title: 'CSS'
                    },
                    {
                        percent: '80%',
                        title: 'Bootstrap'
                    },
                    {
                        percent: '60%',
                        title: 'SCSS'
                    },
                    {
                        percent: '60%',
                        title: 'JavaScript'
                    },
                    {
                        percent: '85%',
                        title: 'Jquery'
                    },
                    {
                        percent: '80%',
                        title: 'React'
                    },
                    {
                        percent: '50%',
                        title: 'React Native'
                    },
                ]

            )

        },[]
        
    )

    return(

        <>

            <div className='My_Skills'>

                <h4>MY SKILLS</h4>

                <div className='Skills'>


                    {
                        SkillsData.map(
                            (val) => {
                                return (
                                    <>
                                        <div className='box'>
                                            <div class="Progress_bar">
                                                <div class="Status_bar" style={{ width: val.percent }}></div>
                                            </div>
                                            <div className='d-flex align-items-center justify-content-between mt-2'>
                                                <h5>{val.title}</h5>
                                                <div className='percentage'>
                                                    <p>{val.percent}</p>
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

        </>

    )

}

export default Skills;