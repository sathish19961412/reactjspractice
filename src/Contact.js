import React from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import {useRef} from "react";
import { Fragment, useState} from "react";
import {Link} from "react-router-dom";

export default function Contacts()
{

    const [state,setState]=useState({
        fname :'',
        lname : '',
        email : '',
        mobile : '',
        message : ''
    })

    const [fnameError,setFnameError]=useState(null);
    const [lnameError,setLnameError]=useState(null);
    const [emailError,setEmailError]=useState(null);
    const [mobileError,setMobileError]=useState(null);
    const [messageError,setMessageError]=useState(null);
    const inputRef = useRef(null);

    const handleChange=(e)=>{
         const {name,value} =e.target;
         setState(prevState => ({
          ...prevState,
          [name]: value
      }))
    }
    return(
        <Fragment>
          <nav class="navbar navbar-expand-lg navbar-light">
  <a class="navbar-brand" href="#">Logo</a>
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>

  <div class="collapse navbar-collapse" id="navbarSupportedContent">
    <ul class="navbar-nav mr-auto">
      <li class="nav-item active">
        <Link to="/" class="nav-link">Home <span class="sr-only">(current)</span></Link>
      </li>
      <li class="nav-item">
        <Link to="/contact" class="nav-link">Contact</Link>
      </li>
      <li class="nav-item">
        <Link to="/contact1" class="nav-link">Contact1</Link>
      </li>
    </ul>
  </div>
</nav>
          <section id='banner1'>
            <div className='container'>
                <div className='row'>
                  <div className='col-md-12 mt-5'>
                      <h1 className='banner-haead-1 text-center'>Contact us</h1>
                  </div>
                  <div className='col-md-3'>&nbsp;</div>
                  <div className='col-md-6 mt-5'>
                  <Form>
                    <Row>
                         <Col md={12}>
                            <Form.Label className='d-flex'>Firstname</Form.Label>
                            <Form.Control placeholder="Firstname" id="thename" />
                          </Col>
                    </Row>
                    <Row className="mt-3" controlId="formBasicEmail">
                      <Col md={12}>
                        <Form.Label className='d-flex'>Enter Email</Form.Label>
                        <Form.Control type="email" placeholder="Enter email" id="themail" />
                      </Col>

                    </Row>
                    <Row className="mt-3" controlId="formBasicEmail">
                      <Col md={12}>
                        <Form.Label className='d-flex'>Mobile</Form.Label>
                        <Form.Control type="text" placeholder="Enter Mobile" id="themobile" />
                      </Col>

                    </Row>
                    <Row className="mt-3" controlId="formBasicEmail">
                      <Col md={12}>
                        <Form.Label className='d-flex'>Message</Form.Label>
                        <Form.Control type="text" placeholder="Message" id="themsg" />
                      </Col>

                    </Row>
                    <Button variant="primary" type="submit" className='d-flex mt-3' onCLick="sendemail();">
                        Submit
                    </Button>
                  </Form>
                  </div>
                  <div className='col-md-3'>&nbsp;</div>
                </div>
            </div>

          </section>
          </Fragment>
    );
}
