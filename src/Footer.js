import React, { Fragment } from "react";
import './App.css';
import {Link} from 'react-router-dom'
import data from './data/Homedata.json'
import data1 from './data/Contactdata.json'
export default function Footer()
{
    return(
        <>
        <section id="footer">
            <div className="container">
                <div className="row">
                    <div className="col-md-4">
                        <div className="d-flex justify-content-center">
                            <h2 className="footer-1">{data[0].footer.logo}</h2>
                        </div>
                        <div className="d-flex justify-content-center">
                            <p className="footer-1">{data[0].footer.logo_description}</p>
                        </div>
                    </div>
                    <div className="col-md-4">
                        <div className="d-flex justify-content-center">
                            <h2 className="footer-1">{data[0].footer.quick_link}</h2>
                        </div>
                        <div className="d-flex justify-content-center">
                            <h5 className="footer-1"> <Link to="/" className="footer-1">{data1[0].contactus.home_footer}</Link></h5>
                           
                        </div>
                        <div className="d-flex justify-content-center">
                            <h5 className="footer-1"> <Link to="/about" className="footer-1">{data1[0].contactus.aboutus_footer}</Link></h5>
                        </div>
                        <div className="d-flex justify-content-center">
                            <h5 className="footer-1"> <Link to="/contact" className="footer-1">{data1[0].contactus.contact_footer}</Link></h5>
                        </div>
                    </div>
                    <div className="col-md-4">
                        <div className="d-flex justify-content-center">
                            <h2 className="footer-1">{data[0].footer.contactus}</h2>
                        </div>
                    </div>
                </div>
            </div>
        </section>
      </>
    );
}