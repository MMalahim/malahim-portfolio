import React, { useEffect, useState } from "react";
import './Certificate.css';

const Certificate = () => {

    const [CertificateInfo, setCertificateInfo] = useState([]);
    
    useEffect(
        () => {

            setCertificateInfo(
                [
                    {
                        certificateYear: '2018',
                        certificateTitle: 'WEB DEVELOPMENT - SIR SYED UNIVERSITY',
                        decs: 'Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for previewing layouts and visual mockups.',
                    },
                    {
                        certificateYear: '2019',
                        certificateTitle: 'WEB ENGINEER - IEEE',
                        decs: 'Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for previewing layouts and visual mockups.',
                    },
                ]
            )

        }, []
    )

    return (
        <>

            <div className='Certificate'>

                <div className="Certificate_Div">

                    <h4>Certificate</h4>

                    <div className="Certificate_Grid">
                        {
                            CertificateInfo.map(
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
                                                        <p>{val.certificateYear}</p>
                                                    </div>
                                                    <h5>{val.certificateTitle}</h5>
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

export default Certificate;