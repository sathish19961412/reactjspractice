import React, { Fragment } from "react";
import { Link } from "react-router-dom";
export default function Header()
{
    return(
    <Fragment>
<nav class="navbar navbar-expand-lg navbar-light">
  <a class="navbar-brand text-primary " href="#">GREEN DENTAL</a>
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