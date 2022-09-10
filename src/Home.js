import data from './data/Homedata.json';
import { Fragment } from "react";
import { Table } from 'react-bootstrap';
import './App.css';
import {Link} from "react-router-dom";
import Footer  from './Footer';
import Header  from './Header';
export default function Home()
{
      return(
        <Fragment>
 <Header></Header>
  <section id='banner'>
  <div className='container'>
      <div className='row'>
        <div className='col-md-6 mt-5'>
            <h1 className='banner-haead-1'>{data[0].section1.title}</h1>
            <h5 className='sub-1'>{data[0].section1.subtitle}</h5>
            <div className='mt-5'>
                <div className='gp-1'>
                <Link to="#">
                  <img className="applestore-img"  data-aos="fade-left" src={process.env.PUBLIC_URL + '/images/homeimages/'+ data[0].section1.images1} alt=""/>
                </Link>
                </div>
                <div className='as-1'>
                  <Link to="#">
                    <img className="applestore-img"  data-aos="fade-left" src={process.env.PUBLIC_URL + '/images/homeimages/'+ data[0].section1.images2} alt=""/>
                  </Link>
                </div>
            </div>
        </div>
        <div className='col-md-6'>
          <Link to="#">
                  <img className="productimg img-fluid mt-5"  data-aos="fade-left" src={process.env.PUBLIC_URL + '/images/homeimages/'+ data[0].section1.images3} alt="" />
          </Link>
        </div>
      </div>
  </div>

</section>

<section id="banner">
     <div className='container'>
          <div className='row'>
              <div className='col-md-12'>
                 <h1 className='text-center heading'>{data[0].section2.title}</h1>
                 <p className='sub-2 '>{data[0].section2.content}</p>
              </div>
          </div>
     </div>
</section>
<section className="feature-section">
                <div className="container">
                    <div className="row">
                        <div className="col-md-12">
                            <div className="features-area">
                                <Table responsive="sm" className='table'>
                                    <thead>
                                        <tr>

                                            {
                                                data[0].section4.column.map((item) => (
                                                    <th className="amount-in-rupees" key={item.subscribeType}>{item.subscribeType}</th>
                                                ))
                                            }
                                        </tr>
                                        <tr>

                                            {
                                                data[0].section4.column.map((item) => (
                                                    <th className="sub-title" key={item.subscribeColTitle}>{item.subscribeColTitle}</th>
                                                ))
                                            }

                                        </tr>
                                    </thead>
                                    <tbody>
                                    <tr >
                                        <th>
                                            {data[0].section4.priceDiscription.subscribeRowTitle}

                                            <h6 className="sub-title">

                                                {data[0].section4.priceDiscription.subscribeRowTitleDescription}
                                            </h6>
                                        </th>
                                    {
                                        data[0].section4.column.map((item) => (
                                            (item.price !== "") ?
                                                <td key={item.price}>
                                                    <br/>
                                                    <h4 className="percentage">{item.price}</h4>
                                                </td>

                                                : ""
                                        ))
                                    }
                                    </tr>


                                       {
                                           data[0].section4.row.map((item) => (
                                               <tr>
                                               <th>
                                                   {item.subscribeRowTitle}
                                                   <br/>
                                                   <h6 className="sub-title">
                                                       {item.subscribeRowTitleDescription}
                                                       <span>
                                                    {item.subscribeRowTitleDescriptionQuotes}
                                                </span>
                                                   </h6>
                                               </th>
                                                   {
                                                       item.icon.map((items) => (
                                                       <td>
                                                       <h4 className="tick-style"><i className={"fa " + items} aria-hidden="true"></i></h4>
                                                       </td>
                                                       ))
                                                   }
                                               </tr>

                                           ))
                                       }


                                    </tbody>
                                </Table>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
           <Footer></Footer>
</Fragment>
      );
}