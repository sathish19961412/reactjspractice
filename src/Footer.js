import React, { Fragment } from "react";
import './App.css';
import {Link} from 'react-router-dom'
export default function Footer()
{
    return(
        <>
        <section id="footer">
            <div className="container">
                <div className="row">
                    <div className="col-md-3">
                        <div className="d-flex justify-content-center bg-danger border-25">
                            <h2 className="text-white">*ShopLittle*</h2>
                        </div>
                    </div>
                    <div className="col-md-3">
                        <div className="d-flex justify-content-center">
                            <h4 className="footer-1">Quick Links</h4>
                        </div>
                        <div className="d-flex justify-content-center">
                            <span className="footer-1"> <Link to="/" className="footer-1">Home</Link></span>
                           
                        </div>
                        <div className="d-flex justify-content-center">
                            <span className="footer-1"> <Link to="/about" className="footer-1">About</Link></span>
                        </div>
                        <div className="d-flex justify-content-center">
                            <span className="footer-1"> <Link to="/contact" className="footer-1">Contacts</Link></span>
                        </div>
                    </div>
                    <div className="col-md-3">
                        <div className="d-flex justify-content-center">
                            <h4 className="footer-1">Address</h4>
                        </div>       
                        <div className="d-flex justify-content-center">
                            <address id="address">
                                55, Nehru Street<br></br>
                                Ramnagar,<br></br>
                                Coimbatore-641 009,<br></br>
                                TamilNadu. INDIA.<br></br>
                            </address> 
                        </div>
                    </div>
                    <div className="col-md-3">
                        <div className="d-flex justify-content-center">
                            <h4 className="footer-1">Media Link</h4>
                        </div>  
                        <div className="d-flex justify-content-center">
                            <i class="fa fa-facebook-square ml-2 text-white foo-5" aria-hidden="true"></i>
                            <i class="fa fa-instagram ml-2 text-white foo-5" aria-hidden="true"></i>
                            <i class="fa fa-whatsapp ml-2 text-white foo-5" aria-hidden="true"></i>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <section className="bg-danger">
            <div className="container">
                <div className="row">
                    <div className="col-md-12 mt-2">
                        <div className="d-flex justify-content-center">
                            <a href="https://mediawonderz.com/" target="_blank">
                                <p className="text-white font-weight-bold">
                                @Copyright By Media Wonderz | 2024
                                </p>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
      </>
    );
}