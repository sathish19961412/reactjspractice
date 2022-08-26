import React from 'react';
// import Navigationbar from "../../components/navbar/navbar";
// import './assets/css/contactus.css';
// import Footercomponent from "../../components/footer/footer";
import  { useState } from "react";
import AOS from "aos";
import './App.css';
import {useRef} from "react";
import {Link} from "react-router-dom";
import emailjs from '@emailjs/browser';
// import data from './data/contactdata.json';



export default function Contactus(){


    const [state, setState] = useState({
        user_name : '',
        lname : '',
        user_email : '',
        subject : '',
        message : ''
    })

    const [fnameError, setFnameError] = useState(null);
    const [lnameError, setLnameError] = useState(null);
    const [emailError, setEmailError] = useState(null);
    const [queryTypeError, setQueryTypeError] = useState(null);
    const [messageError, setMessageError] = useState(null);
    const inputRef = useRef(null);


    const handleChange = (e) =>{
        const {name, value} = e.target
        setState(prevState => ({
            ...prevState,
            [name]: value
        }))
    }

    const fnameValidation = fname => {
        const fnameKey = /^[a-zA-Z]+(([',. -][a-zA-Z ])?[a-zA-Z]*)*$/;
        if(!fname.trim()){
            setFnameError('First Name is required!..')
        }
        else if(!fname.match(fnameKey)){
            setFnameError('Please ingress a valid firstname !..')
        }
        else{
            setFnameError('');
        }
    }

    const lnameValidation = lname =>{
        const lnameKey = /^[a-zA-Z]+(([',. -][a-zA-Z ])?[a-zA-Z]*)*$/;
        if(!lname.trim()){
            setLnameError('Last Name is required!..')
        }
        else if(!lname.match(lnameKey)){
            setLnameError('Please ingress a valid email address!..')
        }
        else{
            setLnameError('');
        }
    }

    const emailValidation = email =>{
        const emailKey = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        if(!email.trim()){
            setEmailError('Email is required!..')
        }
        else if(!email.match(emailKey)){
            setEmailError('Please ingress a valid email address!..')
        }
        else{
            setEmailError('')
        }
    }

    const queryValidation = subject =>{
        if(!subject.trim()){
            setQueryTypeError('Query Type is required!..')
        }
        else{
            setQueryTypeError('')
        }
    }

    const messageValidation = message => {
        if(!message.trim()){
            setMessageError('Message is required!..')
        }
        else{
            setMessageError('')
        }
    }
    const form = useRef();

    const sendEmailToUser = () => {

        emailjs.sendForm('service_g4krclr', 'template_k9klhoo', form.current, 'KAi3FQp8WGXg-ZSHp')
            .then((result) => {
                console.log(result.text);
            }, (error) => {
                console.log(error.text);
            });

    }

    const ClearAllData = () => {
        setState({
            user_name : '',
            lname : '',
            user_email : '',
            subject : '',
            message : ''
        })
    }

    const sendDataToMail = (e) => {
        e.preventDefault();
        fnameValidation(state.user_name);
        lnameValidation(state.lname);
        emailValidation(state.user_email);
        queryValidation(state.subject);
        messageValidation(state.message);
        sendEmailToUser();
        ClearAllData();
    }



    React.useEffect(() => {
        AOS.init({
            duration : 2000
        });
    }, []);


    return(
        <>
            {/* <section>
                <Navigationbar/>
            </section> */}
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
            <section className="contact-us-section">
                <div className="container">
                    <div className="row">
                        <div className="col-md-12">
                            <div className="contactform">
                                <h1 className="contact-us-title"  data-aos="fade-right">
                                    {/* {data[0].contactContent.contactTitle} */}
                                    </h1>
                                <p className="contactus-content-para"  data-aos="fade-left">
                                    {/* {data[0].contactContent.aboutContact} */}
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className="contactus-area" data-aos="fade-up">
                <div className="container">
                    <div className="row">
                        <div className="col-md-4">
                            <div className="container-bg1">
                                <div className="contact-media">
                                    <ul>
                                        <li data-aos="fade-right">
                                            <a  className="mail"  href="mailto:info@dentemy">
                                                {/* <i className={data[0].contactDetails.iconMail} aria-hidden="true"></i>
                                                {data[0].contactDetails.mail} */}
                                            </a>
                                        </li>
                                        <li data-aos="fade-right">
                                            <a  className="phone"  href="tel:1234567890" >
                                                {/* <i className={data[0].contactDetails.iconPhone} aria-hidden="true"></i>
                                                {data[0].contactDetails.phone} */}
                                            </a>
                                        </li>
                                        <li data-aos="fade-right">
                                            <a  className="web"  href="https://landing.dentemy.com/" >
                                                {/* <i className={data[0].contactDetails.iconGlobe}  aria-hidden="true"></i>
                                                {data[0].contactDetails.web} */}
                                            </a>
                                        </li>
                                        <li data-aos="fade-right">
                                            <p>
                                                <a  className="location"  href="">
                                                    {/* <i className={data[0].contactDetails.iconLocation}  aria-hidden="true"></i> */}
                                                    {/* {data[0].contactDetails.location} */}
                                                </a>
                                            </p>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-8">
                            <div className="container-bg2">
                                <br/>
                                    <h1 className="contact-us-title2" data-aos="fade-right">
                                     {/* {data[0].formContent.formTitle} */}
                                     </h1>

                                <div style={{ color:'rgb(0 150 136)',textAlign:'center',fontWeight:'600'}}>
                                    {/* {fnameError}{lnameError}{emailError}{queryTypeError}{messageError} */}
                                </div>
                                <br/>
                                <div className="form-content">
                                    <form id="contactForm" ref={form} onSubmit={sendDataToMail} data-aos="fade-up">
                                        <div className="form-row">
                                            <div className="col-md-6">
                                                <div className="form-group">
                                                    <label htmlFor="inputName" className="text-style">
                                                        {/* {data[0].formContent.userFirstName} */}
                                                    </label>
                                                    <input type="text"
                                                           className="form-control email-input"
                                                           name="user_name"
                                                           id="exampleInputFname"
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
                                                        {/* {data[0].formContent.userLastName} */}
                                                    </label>
                                                    <input type="text"
                                                           className="form-control email-input"
                                                           name="lname"
                                                           id="exampleInputLname"
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
                                                    {/* {data[0].formContent.userEmail} */}
                                                </label>
                                                <input type="email"
                                                       className="form-control email-input"
                                                       name="user_email"
                                                       id="exampleInputEmail1"
                                                       placeholder="Enter email"
                                                       value={state.user_email}
                                                       onChange={handleChange}
                                                />
                                            </div>
                                        </div>
                                        <br/>
                                        <div className="form-row">
                                            <div className="form-group col-md-4">
                                                <label htmlFor="inputState" className="text-style ">
                                                    {/* {data[0].formContent.queryType} */}
                                                </label>
                                                <select id="selectQueryType"
                                                        name="subject"
                                                        className="form-control query-input"
                                                        value={state.subject}
                                                        onChange={handleChange}
                                                        >
                                                    <option selected>Choose...</option>
                                                    <option>option1</option>
                                                    <option>option2</option>
                                                    <option>option3</option>
                                                </select>
                                            </div>
                                        </div>
                                        <br/>
                                        <div className="form-group">
                                            <label htmlFor="exampleFormControlTextarea1"  className="text-style">
                                                {/* {data[0].formContent.descriptionMessage} */}
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
                                            {/* {data[0].formContent.submitButton} */}
                                        </button>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/* <section>
                <Footercomponent/>
            </section> */}

        </>
    )
}