import React from "react";
import {
    FacebookShareButton,
    FacebookIcon,
    TwitterShareButton,
    TwitterIcon,
    LinkedinShareButton,
    LinkedinIcon,
} from "react-share";

const Footer = () => {
    return (
        <div className="footer">
            <div className="container">
                <div className="row">
                    <div className="col-lg-4 col-md-6 col-sm-6">
                        <div className="d-flex">
                            <p>city Moscow Main st 2021 office #233</p>
                        </div>
                        <div className="d-flex">
                            <a href="tel:555-555-5555">+7(960)555-5555</a>
                        </div>
                        <div className="d-flex">
                            <p>dagomez2530@gmail.com</p>
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-2 col-sm-6">
                        <div className="row">
                            <div className="col">
                                <a href="footer-nav">Home</a>
                                <br/>
                                <a href="footer-nav">About me</a>
                                <br/>
                                <a href="footer-nav">Services</a>
                            </div>

                            <div className="col">
                                <a href="footer-nav">Experience</a>
                                <br/>
                                <a href="footer-nav">Portfolio</a>
                                <br/>
                                <a href="footer-nav">Contacts</a>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-5 col-md-5 col-sm-6 align-items-center ">
                        <div className="d-flex justify-content-center">

                            <TwitterShareButton
                                url={"https://twitter.com/dagomez2530"}
                                quote={"Fullstack Developer"}
                                hashtag="#javascript"
                            >
                                <TwitterIcon className="mx-3" size={36}/>
                            </TwitterShareButton>

                            <LinkedinShareButton
                                url={"https://www.linkedin.com/in/diegogomez8/"}
                                quote={"Fullstack Developer"}
                                hashtag="#javascript"
                            >
                                <LinkedinIcon className="mx-3" size={36}/>
                            </LinkedinShareButton>
                        </div>
                        <p className="pt-3 text-center">
                            Copyright&copy;
                            {new Date().getFullYear()}&nbsp;New Horizontal | All Rights Reserved
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer;