import React from "react";
import web1 from "../images/web1.jpeg";
import web2 from "../images/web2.jpeg";
import web3 from "../images/web3.png";
import web4 from "../images/web4.png";
import web5 from "../images/web5.png";
// FONTAWESOME IMPORTS
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearchPlus } from '@fortawesome/free-solid-svg-icons';
// REACT POPUPBOX
import { PopupboxManager, PopupboxContainer } from "react-popupbox";
import "react-popupbox/dist/react-popupbox.css";
// REACT ROUTE
import { BrowserRouter, Route, Link } from "react-router-dom";


const Portfolio = () => {

    // web1
    const openPopupboxWeb1 = () => {
        const content = (
            <>
            <img className="portfolio-image-popupbox" src={ web1 } alt="web1 clone project..."/>
            <p>
                Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
                when an unknown printer took a galley of type and scrambled it to make a type specimen book.
            </p>
            <b>Github:</b> <a className="hyper-link" onClick={() => window.open("https://github.com/ikki2530/holbertonschool-machine_learning/tree/main/supervised_learning/0x01-classification")}>
                https://github.com/ikki2530/holbertonschool-machine_learning/tree/main/supervised_learning/0x01-classification
            </a>
            </>
        )
        
        PopupboxManager.open({ content })
    }

    // web1 config
    const popupboxConfigWeb1 = {
        titleBar: {
            enable: true,
            text: "Web1 clone."
        },
        fadeIn: true,
        fadeInSpeed: 500
    }


    // web2
    const openPopupboxWeb2 = () => {
        const content = (
            <>
            <img className="portfolio-image-popupbox" src={ web2 } alt="web2 guide clone project..."/>
            <p>
                Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
                when an unknown printer took a galley of type and scrambled it to make a type specimen book.
            </p>
            <b>Github:</b> <a className="hyper-link" onClick={() => window.open("https://github.com/ikki2530/holbertonschool-machine_learning/tree/main/supervised_learning/0x02-tensorflow")}>
            https://github.com/ikki2530/holbertonschool-machine_learning/tree/main/supervised_learning/0x02-tensorflow
            </a>
            </>
        )
        
        PopupboxManager.open({ content })
    }

    // web2 config
    const popupboxConfigWeb2 = {
        titleBar: {
            enable: true,
            text: "Web2 guided clone."
        },
        fadeIn: true,
        fadeInSpeed: 500
    }


    // web3
    const openPopupboxWeb3 = () => {
        const content = (
            <>
            <img className="portfolio-image-popupbox" src={ web3 } alt="web3 guide clone project..."/>
            <p>
                Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
                when an unknown printer took a galley of type and scrambled it to make a type specimen book.
            </p>
            <b>Github:</b> <a className="hyper-link" onClick={() => window.open("https://github.com/ikki2530/holbertonschool-machine_learning/tree/main/supervised_learning/0x03-optimization")}>
            https://github.com/ikki2530/holbertonschool-machine_learning/tree/main/supervised_learning/0x03-optimization
            </a>
            </>
        )
        
        PopupboxManager.open({ content })
    }

    // web3 config
    const popupboxConfigWeb3 = {
        titleBar: {
            enable: true,
            text: "Web3 guided clone."
        },
        fadeIn: true,
        fadeInSpeed: 500
    }

    // web

    return (
        <div id="portfolio" className="portfolio-wrapper">
            <div className="container">
                <h1 className="text-uppercase text-center py-5">portfolio</h1>
                <div className="image-box-wrapper row justify-content-center">
                    <div className="portfolio-image-box" onClick={openPopupboxWeb1} >
                        <img className="portfolio-image" src={web1} alt="Web1"/>
                        <div className="overflow"></div>
                        <FontAwesomeIcon className="portfolio-icon" icon={faSearchPlus} />
                    </div>
                {/* -------- */}
                    <div className="portfolio-image-box" onClick={openPopupboxWeb2}>
                        <img className="portfolio-image" src={web2} alt="Web2"/>
                        <div className="overflow"></div>
                        <FontAwesomeIcon className="portfolio-icon" icon={faSearchPlus} />
                    </div>
                {/* -------- */}
                    <div className="portfolio-image-box" onClick={openPopupboxWeb3}>
                        <img className="portfolio-image" src={web3} alt="Web3"/>
                        <div className="overflow"></div>
                        <FontAwesomeIcon className="portfolio-icon" icon={faSearchPlus} />
                    </div>
                {/* -------- */}
                    <a  onClick={() => window.open("https://github.com/ikki2530/holbertonschool-machine_learning/tree/main/supervised_learning/0x04-error_analysis", "_blank")}>
                        <div className="portfolio-image-box">
        
                            <img className="portfolio-image" src={web4} alt="Web4"/>
                        
                            <div className="overflow"></div>
                            <FontAwesomeIcon className="portfolio-icon" icon={faSearchPlus} />
                        </div>
                    </a>
                {/* -------- */}
                    <a  onClick={() => window.open("https://github.com/ikki2530/holbertonschool-machine_learning/tree/main/supervised_learning/0x05-regularization", "_blank")}>
                        <div className="portfolio-image-box">  
                            <img className="portfolio-image" src={web5} alt="Web5"/>
                            <div className="overflow"></div>
                            <FontAwesomeIcon className="portfolio-icon" icon={faSearchPlus} />
                        </div>
                    </a>
                </div>
            </div>
            <PopupboxContainer { ...popupboxConfigWeb1 }/>
            <PopupboxContainer { ...popupboxConfigWeb2 }/>
            <PopupboxContainer { ...popupboxConfigWeb3 }/>
        </div>
    )
}

export default Portfolio;