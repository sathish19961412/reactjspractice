import React from 'react';
import './assets/css/bootstrap.min.css';
import {useRef} from "react";
import { Fragment, useState} from "react";
import emailjs from '@emailjs/browser';
import data from './data/Homedata.json';
import {Link} from "react-router-dom";
import Footer  from './Footer';

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


     const fnameValidation = fname => {
          const fnamekey= /^[a-zA-Z]+(([',. -][a-zA-Z ])?[a-zA-Z]*)*$/;
          if(!fname.trim()){
            setFnameError('First Name is required!..')
        }
        else if(!fname.match(fnamekey)){
            setFnameError('Please ingress a valid Firstname..')
        }
        else{
            setFnameError('')
        }
    }

    const lnameValidation = lname =>{
      const lnamekey=/^[a-zA-Z]+(([',. -][a-zA-Z ])?[a-zA-Z]*)*$/;
      if(!lname.trim()){
          setLnameError("Last Name is required!..")
      }
      else if(!lname.match(lnamekey)){
         setLnameError('Please ingress a valid Last Name ..')
      }
      else{
        setLnameError('')
      }
    }
    
    const emailValidation = email =>{
         const emailKey=/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
         if(!email.trim()){
           setEmailError('Email is required !..')
         }
         else if(!email.match(emailKey)){
            setEmailError('Please ingress a valid Email address ..')
         }
         else{
          setEmailError('')
         }
    }

    const mobileValidation = mobile =>{
        const mobileKey=/^(\+\d{1,3}[- ]?)?\d{10}$/;
        if(!mobile.trim()){
            setMobileError('Mobile is required !..')
        }
        else if(!mobile.match(mobileKey)){
            setMobileError('Mobile is ingress a valid Mobile')
        }
        else{
            setMobileError('')
        }
    }
    
    const messageValidation = message =>{
         if(!message.trim()){
            setMessageError('message is required !..')
         }
         else{
            setMessageError('')
         }
    }
    const form = useRef();

    const sendEmailToUser = () =>{

        emailjs.sendForm('service_pz4z1z4', 'template_vbnscjs', form.current, 'DC9qaXQtPDMTem0tt')
        .then((result) => {
            console.log(result.text);
        }, (error) => {
            console.log(error.text);
        });

    }
    const ClearAllData =() => {
         setState({
            fname :'',
            lname :'',
            email : '',
            mobile : '',
            message : ''
         })

    }
    const sendDataToMail = (e) => {
      e.preventDefault();
      
      fnameValidation(state.fname);
      lnameValidation(state.lname);
      emailValidation(state.email);
      mobileValidation(state.mobile);
      messageValidation(state.message);
      sendEmailToUser();
      ClearAllData();
    }

    return(
        <Fragment>
          <nav class="navbar navbar-expand-lg navbar-light">
  <a class="navbar-brand" href="#">TestApp</a>
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>

  <div class="collapse navbar-collapse" id="navbarSupportedContent">
    <ul class="navbar-nav mr-auto">
      <li class="nav-item active">
        <Link to="/" class="nav-link">Home <span class="sr-only">(current)</span></Link>
      </li>
      <li class="nav-item">
         <Link to="/about" class="nav-link">About Us</Link>
      </li>
      <li class="nav-item">
        <Link to="/contact" class="nav-link">Contact</Link>
      </li>
    </ul>
  </div>
</nav>
          <section id='banner1'>
            <div className='container'>
                <div className='row'>
                  <div className='col-md-12 mt-5'>
                      <h1 className='banner-haead-1 text-center'>
                         {data[0].contactus.title}
                      </h1>
                  </div>
                  <div className='col-md-3'>&nbsp;</div>
                  <div className='col-md-6 mt-5'>
                  <div className="form-content">
                                    <form id="contactForm" ref={form} onSubmit={sendDataToMail} data-aos="fade-up">
                                        <div className="form-row">
                                            <div className="col-md-6">
                                                <div className="form-group">
                                                    <label htmlFor="inputName" className="">
                                                        {data[0].contactus.firstname}
                                                    </label>
                                                    <input type="text"
                                                           className="form-control email-input"
                                                           name="fname"
                                                           id="fname"
                                                           placeholder="Enter your first name"
                                                           value={state.user_name}
                                                           onChange={handleChange}
                                                    />
                                                </div>
                                            </div> 
                                            <br/>
                                            <div className="col-md-6">
                                                <div className="form-group">
                                                    <label htmlFor="inputName" className="text-style">
                                                       {data[0].contactus.Lastname}
                                                    </label>
                                                    <input type="text"
                                                           className="form-control email-input"
                                                           name="lname"
                                                           id="lname"
                                                           placeholder="Enter your last name"
                                                           value={state.lname}
                                                           onChange={handleChange}
                                                    />
                                                </div>
                                            </div>
                                        </div>
                                        <br/>
                                        <div className="form-row">
                                            <div className="form-group col-md-6">
                                                <label htmlFor="inputEmail4 " className="text-style">
                                                    {data[0].contactus.Email}
                                                </label>
                                                <input type="email"
                                                       className="form-control email-input"
                                                       name="email"
                                                       id="email"
                                                       placeholder="Enter email"
                                                       value={state.email}
                                                       onChange={handleChange}
                                                />
                                            </div>
                                            <div className="form-group col-md-6">
                                                <label htmlFor="inputEmail4 " className="text-style">
                                                    {data[0].contactus.Mobile}
                                                </label>
                                                <input type="text"
                                                       className="form-control email-input"
                                                       name="mobile"
                                                       id="mobile"
                                                       placeholder="Enter Mobile"
                                                       value={state.mobile}
                                                       onChange={handleChange}
                                                />
                                            </div>
                                        </div>
                                        <br/>
                                        <br/>
                                        <div className="form-group">
                                            <label htmlFor="exampleFormControlTextarea1"  className="text-style">
                                                {data[0].contactus.Message}
                                            </label>
                                            <textarea type="text" className="form-control description"
                                                      id="message"
                                                      onChange={handleChange}
                                                      name="message"
                                                      value={state.message}
                                                      rows="3">
                                            </textarea>
                                        </div>

                                        <br/><br/>

                                        <button type="submit" className="btn btn-primary">
                                            {data[0].contactus.ButtonText}
                                        </button>
                                    </form>
                                </div>
                  </div>
                  <div className='col-md-3'>&nbsp;</div>
                </div>
            </div>

          </section>
          <Footer></Footer>
          </Fragment>
    );
}

