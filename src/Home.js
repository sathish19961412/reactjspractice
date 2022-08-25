import images1 from './bannerimage.avif';
import logo1 from './googleplay.png';
import logo2 from './applestore.png';
import data from './data/Homedata.json';
// import DataList from './POPOSList';
import { Fragment } from "react";
import {Link} from "react-router-dom";
export default function Home()
{
    const titles = data.map((obj) => {

        return <>
        {obj.section1.title}
        </>
      })
      const subtitle = data.map((k) => {

        return <>
        {k.section1.subtitle}
        </>
      })
      const images= data.map((obj) => {
        return <>
        {obj.section1.images}
        </>
      })
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
  <section id='banner'>
  <div className='container'>
      <div className='row'>
        <div className='col-md-6 mt-5'>
            <h1 className='banner-haead-1'>{ titles }</h1>
            <h5 className='para-1'>{subtitle}</h5>
            <div className='mt-5'>
                <div className='gp-1'>
                  <img src={logo1}  alt="logo" />
                </div>
                <div className='as-1'>
                  <img src={logo2}   alt="logo" />
                </div>
            </div>
        </div>
        <div className='col-md-6'>
            <img src={images1}   alt="logo" />
        </div>
      </div>
  </div>

</section>
</Fragment>
      );
}