import data from './data/Homedata.json';
import { Fragment } from "react";
import './App.css';
import {Link} from "react-router-dom";
import Footer  from './Footer';

export default function Abouts()
{
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
  <section>
  <div className='container'>
      <div className='row'>
        <div className='col-md-8 mt-5'>
            <h1 className='text-left'>About US</h1>
        </div>
        <div className='col-md-4 mt-5'>
            <h1 className='text-center'>About US</h1>
        </div>
      </div>
  </div>
</section>
<Footer></Footer>
</Fragment>
      );
}