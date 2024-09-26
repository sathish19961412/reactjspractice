import React, { Fragment } from "react";
import { Link } from "react-router-dom";

export default function Header()
{
    return(
    <Fragment>
        <section class="bg-primary p-2">
           <div class="container">
               <div class="row">
                  <div className="col-md-4">
                        <div class="text-center">
                           <h4 className="text-white">*ShopLittle*</h4>
                        </div>
                  </div>
                  <div className="col-md-8">
                        <div class="d-flex justify-content-center">
                          <form class="form-inline my-2 my-lg-0">
                              <input class="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search"></input>
                              <i class="fa fa-shopping-cart ml-5 text-white" aria-hidden="true"></i>
                              <i class="fa fa-user ml-5 text-white" aria-hidden="true"></i>
                          </form>
                        </div>
                  </div>
               </div>
           </div>
        </section>
        <section>
          <div class="container-fluid">
             <div class="row">
                <div class="col-md-12">
                  <nav class="navbar navbar-expand-lg">
                      <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                      </button>
                      <div class="collapse navbar-collapse" id="navbarNavDropdown">
                        <ul class="navbar-nav mx-auto">
                          <li class="nav-item active">
                            <a class="nav-link" href="#">Newborn<span class="sr-only">(current)</span></a>
                          </li>
                          <li class="nav-item">
                            <a class="nav-link" href="#">Clothing</a>
                          </li>
                          <li class="nav-item">
                            <a class="nav-link" href="#">Thothil</a>
                          </li>
                          <li class="nav-item dropdown">
                            <a class="nav-link dropdown-toggle" href="#" role="button" data-toggle="dropdown" aria-expanded="false">
                              Bedding
                            </a>
                            <div class="dropdown-menu">
                              <a class="dropdown-item" href="#">Action</a>
                              <a class="dropdown-item" href="#">Another action</a>
                              <a class="dropdown-item" href="#">Something else here</a>
                            </div>
                          </li>
                          <li class="nav-item dropdown">
                            <a class="nav-link dropdown-toggle" href="#" role="button" data-toggle="dropdown" aria-expanded="false">
                              Feeding
                            </a>
                            <div class="dropdown-menu">
                              <a class="dropdown-item" href="#">Action</a>
                              <a class="dropdown-item" href="#">Another action</a>
                              <a class="dropdown-item" href="#">Something else here</a>
                            </div>
                          </li>
                          <li class="nav-item dropdown">
                            <a class="nav-link dropdown-toggle" href="#" role="button" data-toggle="dropdown" aria-expanded="false">
                              Bathing
                            </a>
                            <div class="dropdown-menu">
                              <a class="dropdown-item" href="#">Action</a>
                              <a class="dropdown-item" href="#">Another action</a>
                              <a class="dropdown-item" href="#">Something else here</a>
                            </div>
                          </li>
                          <li class="nav-item dropdown">
                            <a class="nav-link dropdown-toggle" href="#" role="button" data-toggle="dropdown" aria-expanded="false">
                              For Moms
                            </a>
                            <div class="dropdown-menu">
                              <a class="dropdown-item" href="#">Action</a>
                              <a class="dropdown-item" href="#">Another action</a>
                              <a class="dropdown-item" href="#">Something else here</a>
                            </div>
                          </li>
                          <li class="nav-item dropdown">
                            <a class="nav-link dropdown-toggle" href="#" role="button" data-toggle="dropdown" aria-expanded="false">
                              Nursery and Accessories
                            </a>
                            <div class="dropdown-menu">
                              <a class="dropdown-item" href="#">Action</a>
                              <a class="dropdown-item" href="#">Another action</a>
                              <a class="dropdown-item" href="#">Something else here</a>
                            </div>
                          </li>
                          <li class="nav-item bg-danger">
                            <a class="nav-link text-white" href="#">Thothil</a>
                          </li>
                          <li class="nav-item">
                            <a class="nav-link" href="#">Winter</a>
                          </li>
                        </ul>
                      </div>
                  </nav>
                </div>
             </div>
          </div>
        </section>
     
    </Fragment>
    
    );
}