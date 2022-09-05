import data from './data/Homedata.json';
import './banner.jpg';
import { Fragment } from "react";
import { Table } from 'react-bootstrap';
import './App.css';
import {Link} from "react-router-dom";
import Footer  from './Footer';

export default function Home()
{
      return(
        <Fragment>
         <nav class="navbar navbar-expand-lg navbar-light">
  <a class="navbar-brand text-white font-weight-bold" href="#">Gokulnath Protfolio</a>
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
         <Link to="/about" class="nav-link">Skills</Link>
      </li>
      <li class="nav-item">
         <Link to="/about" class="nav-link">Services</Link>
      </li>
      <li class="nav-item">
         <Link to="/about" class="nav-link">Protfolio</Link>
      </li>
      <li class="nav-item">
        <Link to="/contact" class="nav-link">Contact</Link>
      </li>

    </ul>
  </div>
</nav>
  <section id='banner'>
  <div className='container'>
      <div className='row'>
        <div className='col-md-12 mt-5'>
           
        </div>
      </div>
  </div>
</section>

<section id="banner1">
     <div className='container'>
          <div className='row'>
              <div className='col-md-12'>
                 <h1 className='text-center heading'>{data[0].section2.title}</h1>
                 <p className='sub-2 '>{data[0].section2.content}</p>
              </div>
          </div>
     </div>
</section>

<section id="banner1">
     <div className='container'>
          <div className='row'>
              <div className='col-md-12'>
                 <h1 className='text-center heading'>{data[0].section3.title}</h1>
                 <p className='sub-2 '>{data[0].section3.content}</p>
              </div>
          </div>
     </div>
</section>
<section id="banner1">
     <div className='container'>
          <div className='row'>
              <div className='col-md-12'>
                 <h1 className='text-center heading'>{data[0].section4.title}</h1>
                 <p className='sub-2 '>{data[0].section4.content}</p>
              </div>
          </div>
     </div>
</section>
<section id="banner1">
     <div className='container'>
          <div className='row'>
              <div className='col-md-12'>
                 <h1 className='text-center heading'>{data[0].section5.title}</h1>
                 <p className='sub-2 '>{data[0].section5.content}</p>
              </div>
          </div>
     </div>
</section>
<section id="banner1">
     <div className='container'>
          <div className='row'>
              <div className='col-md-12'>
                 <h1 className='text-center heading'>{data[0].contactus.title}</h1>
                 <p className='sub-2 '>{data[0].section5.content}</p>
              </div>
          </div>
     </div>
</section>
<Footer></Footer>
</Fragment>
      );
}