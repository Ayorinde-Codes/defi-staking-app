import React, { Component } from 'react'

class Footer extends Component {
    render(){
    return (
        <div>
            <footer className="main-footer">
    	<div className="widgets-section">
        	<div className="auto-container">
            	<div className="row clearfix">

                    <div className="footer-column col-lg-3 col-md-4 col-sm-6 col-xs-12">
                        <div className="footer-widget contact-widget">
                            <div className="footer-logo"><a href="index.html"><img src="/assets/images/metro-logo-logo.png" alt="" /></a></div>
                            <div className="widget-content">
                                <div className="text">Footer 1:</div>
                                <ul className="contact-info">
                                    <li><div className="icon"><span className="flaticon-house"></span></div>Address 1.</li>
                                    <li><div className="icon"><span className="flaticon-technology-1"></span></div>phone </li>
                                    <li><div className="icon"><span className="flaticon-envelope-1"></span></div>mail@mail.com</li>
                                </ul>
                            </div>
                        </div>
                    </div>

                    <div className="footer-column col-lg-4 col-md-4 col-sm-6 col-xs-12">
                        <div className="footer-widget gallery-widget">
                            <h2>Footer 3</h2>
                        </div>
                    </div>

                	<div className="footer-column col-lg-5 col-md-4 col-sm-6 col-xs-12">
                    	<div className="footer-widget partner-widget">
                        	
                            <h2>NEWSLETTTER SIGN-UP</h2>

                            <div className="newsletter-form">
                                <form method="post" action="contact.html">
                                    <div className="form-group">
                                        <input type="email" name="email"  placeholder="Email" required />
                                        <button type="submit" className="theme-btn">Subscribe</button>
                                    </div>
                                </form> 
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div className="footer-bottom">
        	<div className="auto-container">
            	<div className="row clearfix">
                	<div className="column col-md-6 col-sm-6 col-xs-12">
                    	<div className="copyright">
                            &copy; {(new Date().getFullYear())} <strong>Company</strong>. All Rights Reserved. 
                            <span align="right">powered by <strong> Buildingblocks </strong> </span>
                    </div>
                    
                    </div>
                    <div className="column col-md-6 col-sm-6 col-xs-12">
                    	<div className="footer-icon">
                            <a href="#"><span className="fa fa-facebook"></span></a>
                            <a href="#"><span className="fa fa-twitter"></span></a>
                            <a href="#"><span className="fa fa-google-plus"></span></a>
                            <a href="#"><span className="fa fa-instagram"></span></a>
                            <a href="#"><span className="fa fa-youtube"></span></a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </footer>
        </div>
    )
}
}

export default Footer;
