import React, { Fragment } from "react";
import { Link } from "react-router-dom";
import data from './data/Homedata.json';
export default function Header()
{
    return(
    <Fragment>
<nav class="navbar navbar-expand-lg navbar-light">
  <a class="navbar-brand text-primary " href="#"> <img className="applestore-img"  data-aos="fade-left" src={process.env.PUBLIC_URL + '/images/homeimages/'+ data[0].section1.logo} alt=""/></a>
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
    </Fragment>
    
    );
}