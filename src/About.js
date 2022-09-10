import { Fragment } from "react";
import './App.css';
import data from "./data/Aboutus.json";
import data1 from "./data/About.json";
import Footer  from './Footer';
import Header  from "./Header";

export default function Abouts()
{
      return(
        <Fragment>
  <Header></Header>
  <section>
    <div className='container'>
        <div className='row'>
          <div className='col-md-12 mt-5'>
              <h1 className='text-center about-color'>{data[0].section1.title}</h1>
          </div>
          <div className="col-md-12 mt-3">
              <h5 className='text-center about-color1'>{data[0].section1.subtitle}</h5>
          </div>
          <div className="col-md-12 mt-3"> 
              <p className="text-center">
                {data[0].section1.paragraph}
              </p>
          </div>

        </div>
    </div>
  </section>

  <section className="mt-5" id="why">
    <div className='container'>
        <div className='row'>
          <div className='col-md-12 mt-5 mb-5'>
              <h1 className='text-center text-white'>{data1[0].section2.title1}</h1>
          </div>
          <div className="col-md-4">
              <div className="d-flex justify-content-center">
                <img className="applestore-img"  data-aos="fade-left" src={process.env.PUBLIC_URL + '/images/homeimages/'+ data1[0].section2.image1} alt=""/>
              </div>
              <h5 className='text-center text-white font-weight-bold'>{data1[0].section2.subtitle1}</h5>
              <p className="text-center para">
                {data1[0].section2.paragraph1}
              </p>
          </div>
          <div className="col-md-4">
              <div className="d-flex justify-content-center">
                <img className="applestore-img"  data-aos="fade-left" src={process.env.PUBLIC_URL + '/images/homeimages/'+ data1[0].section2.image2} alt=""/>
              </div>
              <h5 className='text-center text-white font-weight-bold'>{data1[0].section2.subtitle2}</h5>
              <p className="text-center para">
                {data1[0].section2.paragraph2}
              </p>
          </div>
          <div className="col-md-4">
              <div className="d-flex justify-content-center">
                <img className="applestore-img"  data-aos="fade-left" src={process.env.PUBLIC_URL + '/images/homeimages/'+ data1[0].section2.image3} alt=""/>
              </div>
              <h5 className='text-center text-white font-weight-bold'>{data1[0].section2.subtitle3}</h5>
              <p className="text-center para">
                {data1[0].section2.paragraph3}
              </p>
          </div>
        </div>
    </div>
  </section>
<Footer></Footer>
</Fragment>
      );
}