
import { Fragment } from "react";
import './App.css';
import Footer  from './Footer';
import Slider1 from './assets/img/banner.jpg'
import img1 from './assets/img/c-1.jpg';
import img2 from './assets/img/c-2.jpg';
import img3 from './assets/img/c-3.jpg';
import img4 from './assets/img/c-4.jpg';
import img5 from './assets/img/c-5.jpg';
import img6 from './assets/img/c-6.jpg';
import img7 from './assets/img/c-7.jpg';
import img8 from './assets/img/c-8.jpg';
import prebanner from './assets/img/pre-school.jpg'
import newborn1 from './assets/img/n-1.jpg';
import newborn2 from './assets/img/n-2.jpg';
import newborn3 from './assets/img/n-3.jpg';
import newborn4 from './assets/img/n-4.jpg';
import newborn5 from './assets/img/n-5.jpg';
import newborn6 from './assets/img/n-6.jpg';
import news from './assets/img/news.jpg';
import Header  from './Header';
export default function Home()
{
      return(
        <Fragment>
        <Header></Header>
        <div id="carouselExampleCaptions" class="carousel slide" data-ride="carousel">
            <div class="carousel-inner">
                <div class="carousel-item active">
                <img src={Slider1} class="img-fluid" alt="..."></img>
              
                </div>
                <div class="carousel-item">
                <img src={Slider1} class="img-fluid" alt="..."></img>
               
                </div>
                <div class="carousel-item">
                <img src={Slider1} class="img-fluid" alt="..."></img>
                </div>
            </div>
        </div>
        <section id='banner'>
            <div className='container'>
                <div className='row'>
                    <div className='col-md-12 '>
                        <h1 className='banner-haead-1'>Clothing Style</h1>
                    </div>
                </div>
                <div className='row mt-3'>
                    <div className='col-md-2'>
                        <img src={img1} class="img-fluid" alt="..."></img>
                    </div>
                    <div className='col-md-2'>
                        <img src={img2} class="img-fluid" alt="..."></img>
                    </div>
                    <div className='col-md-2'>
                        <img src={img3} class="img-fluid" alt="..."></img>
                    </div>
                    <div className='col-md-2'>
                        <img src={img4} class="img-fluid" alt="..."></img>
                    </div>
                    <div className='col-md-2'>
                        <img src={img5} class="img-fluid" alt="..."></img>
                    </div>
                    <div className='col-md-2'>
                        <img src={img6} class="img-fluid" alt="..."></img>
                    </div>
                </div>
                <div className='row mt-3'>
                    <div className='col-md-2'>
                        <img src={img7} class="img-fluid" alt="..."></img>
                    </div>
                    <div className='col-md-2'>
                        <img src={img8} class="img-fluid" alt="..."></img>
                    </div>
                    <div className='col-md-2'>
                        <img src={img1} class="img-fluid" alt="..."></img>
                    </div>
                    <div className='col-md-2'>
                        <img src={img4} class="img-fluid" alt="..."></img>
                    </div>
                    <div className='col-md-2'>
                        <img src={img2} class="img-fluid" alt="..."></img>
                    </div>
                    <div className='col-md-2'>
                        <img src={img3} class="img-fluid" alt="..."></img>
                    </div>
                </div>
                <div className='row mt-5'>
                    <div className='col-md-12'>
                        <img src={prebanner} class="img-fluid" alt="..."></img>
                    </div>
                </div>
            </div>
        </section>
        <section id='banner'>
            <div className='container'>
                <div className='row'>
                    <div className='col-md-12 '>
                        <h1 className='banner-haead-1'>Newborn Essentials</h1>
                    </div>
                </div>
                <div className='row mt-3'>
                    <div className='col-md-3'>
                        <img src={newborn1} class="img-fluid" alt="..."></img>
                        <h5 className="text-center pt-1">Cotton Wrap Bed</h5>
                    </div>
                    <div className='col-md-3'>
                        <img src={newborn2} class="img-fluid" alt="..."></img>
                        <h5 className="text-center pt-1">Cotton Wrap Bed</h5>
                    </div>
                    <div className='col-md-3'>
                        <img src={newborn3} class="img-fluid" alt="..."></img>
                        <h5 className="text-center pt-1">Cotton Wrap Bed</h5>
                    </div>
                    <div className='col-md-3'>
                        <img src={newborn4} class="img-fluid" alt="..."></img>
                        <h5 className="text-center pt-1">Cotton Wrap Bed</h5>
                    </div>
                </div>
                <div className='row mt-3'>
                    <div className='col-md-3'>
                        <img src={newborn5} class="img-fluid" alt="..."></img>
                        <h5 className="text-center pt-1">Cotton Wrap Bed</h5>
                    </div>
                    <div className='col-md-3'>
                        <img src={newborn6} class="img-fluid" alt="..."></img>
                        <h5 className="text-center pt-1">Cotton Wrap Bed</h5>
                    </div>
                </div>
            </div>
        </section>
        <section>
             <div className="container">
                <div className="row">
                    <div className="col-md-12">
                        <img src={news} className="img-fluid"></img>
                    </div>
                </div>
             </div>
        </section>
        <Footer></Footer>
        </Fragment>
      );
}