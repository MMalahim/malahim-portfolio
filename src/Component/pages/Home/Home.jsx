import React from "react";
import './Home.css';

const Home = () => {

    const OpenModal = () => {

        document.getElementById('Modal').style.top = 0;
        document.getElementById('MyWork').style.top = '100%';
        document.getElementById('Contact').style.top = '100%';

    }

    const openHome = () => {

        document.getElementById('Modal').style.top = '100%';
        document.getElementById('MyWork').style.top = '100%';
        document.getElementById('Contact').style.top = '100%';

    }
    const openWork = () => {

        document.getElementById('Modal').style.top = '100%';
        document.getElementById('MyWork').style.top = 0;
        document.getElementById('Contact').style.top = '100%';

    }

    const openContact = () => {
 
        document.getElementById('Modal').style.top = '100%';
        document.getElementById('MyWork').style.top = '100%';
        document.getElementById('Contact').style.top = 0;

    }


    return (


        <>
            <div className="Home">

                <div className="Left">

                    <div className="left_design">

                    </div>

                    <div className="Picture">

                    </div>

                </div>

                <div className="Right">

                    <div className="Text">

                        <div className="d-flex">
                            <div className="line"></div>
                            <h1 className="H1_1">Muhammad Malahim</h1>
                        </div>
                        <h1 className="H1_2">WEB DESIGNER</h1>
                        <p>A Computer system Engineer, having commands on web designing & front‑end development. I focused on crafting clean & user‑friendly experiences, I am passionate about building excellent software that improves the lives of those around me.</p>

                        <button className="button" style={{ cursor: "none" }} onClick={ OpenModal }>
                            <span className="button-text">MORE ABOUT ME</span>
                            <span className="button-icon"><i class="las la-arrow-right"></i></span>
                        </button>

                    </div>

                    <div className="NavBar">

                        <div className="NavLinks" onClick={openHome}>
                            <i class="las la-home"></i>
                        </div>

                        <div className="NavLinks" onClick={OpenModal}>
                            <i class="las la-user"></i>

                        </div>

                        <div className="NavLinks" onClick={openWork}>
                            <i class="las la-briefcase"></i>
                        </div>

                        <div className="NavLinks" onClick={openContact}>
                            <i class="las la-envelope-open"></i>
                        </div>

                    </div>

                </div>

            </div>
        </>

    )

}

export default Home;