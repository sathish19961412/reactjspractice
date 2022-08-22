import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import { Fragment } from "react";
import {Link} from "react-router-dom";
export default function Contacts()
{
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
    </ul>
  </div>
</nav>
          <section id='banner1'>
            <div className='container'>
                <div className='row'>
                  <div className='col-md-12 mt-5'>
                      <h1 className='banner-haead-1 text-center'>Contact us</h1>
                  </div>
                  <div className='col-md-3'>&nbsp;</div>
                  <div className='col-md-6 mt-5'>
                  <Form>
                    <Row>
                        <Col md={6}>
                            <Form.Control placeholder="City" />
                            </Col>
                            <Col md={6}>
                            <Form.Control placeholder="State" />
                        </Col>
                    </Row>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label className='d-flex'>Name</Form.Label>
                        <Form.Control type="email" placeholder="Enter Name" /><br></br>

                        <Form.Label className='d-flex'>Email address</Form.Label>
                        <Form.Control type="email" placeholder="Enter email" />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Label  className='d-flex'>Mobile Number</Form.Label>
                        <Form.Control type="text" placeholder="Mobile Number" /><br></br>

                        <Form.Label className='d-flex'>Address</Form.Label>
                        <Form.Control type="email" placeholder="Enter Address" />
                    </Form.Group>

                    <Button variant="primary" type="submit" className='d-flex'>
                        Submit
                    </Button>
                    
                  </Form>
                  </div>
                  <div className='col-md-3'>&nbsp;</div>
                </div>
            </div>

          </section>
          </Fragment>
    );
}
