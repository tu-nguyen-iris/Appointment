import React from 'react'
import "./navBar.scss"
import { NavLink } from "react-router-dom"
import TransitionsModal from './modal'
import FormModal from './modal/index'
export default function NavBar() {
    return (
        <section>
            <div className="topNavBar ">
                <nav className="navbar container navbar-expand-sm ">
                    <a style={{ fontWeight: 600, color: "black" }} className="navbar-brand" href="#">Dentist in San Jose</a>
                    <button className="navbar-toggler d-lg-none" type="button" data-toggle="collapse" data-target="#collapsibleNavId" aria-controls="collapsibleNavId" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon" />
                    </button>
                    <div className="collapse navbar-collapse" id="collapsibleNavId">
                        <ul className="topNavBar_left navbar-nav mr-auto mt-2 mt-lg-0">
                            <li className="nav-item active">
                                <a className="nav-link" href="#">Email Us <span className="sr-only">(current)</span></a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#">How to Find Us</a>
                            </li>
                            <li className="nav-item dropdown">
                                <a className="nav-link" href="#">Give Feedback</a>
                            </li>
                        </ul>
                        <ul className="navbar-nav ml-auto mt-2 mt-lg-0">
                            <li className="mr-4 nav-item ">
                                <a href="#"><i class="fa fa-facebook" aria-hidden="true" /></a>
                            </li>
                            <li className="mr-4 nav-item">
                                <li>   <a href="#"><i class="fa fa-twitter" aria-hidden="true" /></a></li>

                            </li>
                            <li className="mr-4 nav-item">
                                <li>     <a href="#"> <i class="fa fa-instagram" aria-hidden="true" /> </a></li>

                            </li>
                            <li className="mr-4 nav-item">
                                <li>   <a href="#"><i class="fa fa-linkedin" aria-hidden="true" /> </a></li>

                            </li>

                        </ul>
                        <form className="form-inline my-2 my-lg-0">
                            <input className="form-control mr-sm-2" type="text" placeholder="Search" />
                            <i class="fa fa-search" aria-hidden="true" />

                        </form>
                    </div>
                </nav>
                <div className="ipadScreen container-fluid">
                    <ul>
                        <li className="mr-4 ">
                            <a href="#"><i class="fa fa-facebook" aria-hidden="true" /></a>
                        </li>
                        <li className="mr-4">
                            <li>   <a href="#"><i class="fa fa-twitter" aria-hidden="true" /></a></li>
                        </li>
                        <li className="mr-4">
                            <li>     <a href="#"> <i class="fa fa-instagram" aria-hidden="true" /> </a></li>

                        </li>
                        <li className="mr-4">
                            <li>   <a href="#"><i class="fa fa-linkedin" aria-hidden="true" /> </a></li>

                        </li>

                    </ul>
                    <form>
                        <input className="form-control mr-sm-2" type="text" placeholder="Search" ></input>
                        <i class="fa fa-search" aria-hidden="true" />
                    </form>
                </div>
            </div>
            <div className="midleNavBar container">
                <nav className="navbar navbar-expand-sm navbar-light  p-3">
                    <a className="navbar-brand" href="#"><img src="./img/logo.png" /></a>
                    <button className=" navbar-toggler d-lg-none" type="button" data-toggle="collapse" data-target="#collapsibleNavId" aria-controls="collapsibleNavId" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon" />
                    </button>
                    <div className="collapse navbar-collapse" id="collapsibleNavId">
                        <ul className="navbar-nav ml-auto mt-2 mt-lg-0">
                            <li className="nav-item active">
                                <NavLink className="nav-link" exact activeClassName="active" to="/">HOME</NavLink>
                            </li>
                            <li className="nav-item dropdown">
                                <a className="nav-link dropdown-toggle" href="#" id="dropdownId" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">ABOUT US</a>
                                <div className="dropdown-menu" aria-labelledby="dropdownId">
                                    <NavLink to="/meet-the-appointment" className="dropdown-item">Meet The Appointment</NavLink >
                                    <NavLink className="dropdown-item" to="/meet-the-appointment-cruid">Meet The Appointment CRUID</NavLink>
                                </div>
                            </li>
                            <li className="nav-item dropdown">
                                <NavLink className="nav-link dropdown-toggle" to="/services" id="dropdownId" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">SERVICES</NavLink>
                                <div className="dropdown-menu" aria-labelledby="dropdownId">
                                    <a className="dropdown-item" href="#">Services Gird</a>
                                    <a className="dropdown-item" href="#">Services Icon</a>
                                </div>
                            </li>
                            <li className="nav-item dropdown">
                                <NavLink className="nav-link dropdown-toggle" to="/blog" id="dropdownId" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">BLOG</NavLink>
                                <div className="dropdown-menu" aria-labelledby="dropdownId">
                                    <a className="dropdown-item" href="#">Blog List</a>
                                    <a className="dropdown-item" href="#">Blog Icon</a>
                                </div>
                            </li>
                            <li className="nav-item dropdown">
                                <NavLink className="nav-link dropdown-toggle" to="/page" id="dropdownId" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">PAGES</NavLink>
                                <div className="dropdown-menu" aria-labelledby="dropdownId">
                                    <a className="dropdown-item" href="#">Online Appointment</a>
                                    <a className="dropdown-item" href="#">About Us</a>
                                    <a className="dropdown-item" href="#">Open Hours</a>
                                    <a className="dropdown-item" href="#">Photo Gallery</a>
                                    <a className="dropdown-item" href="#">FAQ</a>

                                </div>
                            </li>
                            <li className="nav-item active">
                                <NavLink className="nav-link" to="/contact">CONTACT US</NavLink>
                            </li>
                        </ul>

                    </div>
                </nav>

            </div>
            <div className="bottomNavBar" >
                <div className=" container ">
                    <div className="row">
                        <div className="col-lg-4 col-md-4 col-sm-12 col-xs-12 p-3">

                            <div className="icon">  <i class="fa fa-qrcode" /></div>

                            <div className="text"> <p>Call Today 020 8567 0707</p>
                                <span>51 Uxbridge Road, San Francisco W7 3PX</span></div>



                        </div>
                        <div className="col-lg-4 col-md-4 col-sm-12 col-xs-12 p-3"><i class="fa fa-clock-o" aria-hidden="true" />
                            <div className="text"><p>Open Hours</p>
                                <span>Mon - Sat: 8 am - 5 pm, Sunday: CLOSED</span></div>

                        </div>
                        <button data-toggle="modal" data-target="#exampleModalCenter" className="col-lg-4 col-md-4 col-sm-12 col-xs-12 Appointment  col-md-4 p-3">
                            <i class="fa fa-calculator" />
                            <div className="text">  <p>Make an Appointment</p>
                                <span>It's so fast</span></div>
                        </button>
                        <FormModal />
                    </div>
                </div>
            </div>
        </section>
    )
}
