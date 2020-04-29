import React from 'react'
import "./footer.scss"
export default function Footer() {
    return (
        <div>
            <footer className="page-footer font-small pt-4" style={{ textDecoration: "none", backgroundColor: "#4c6575" }}>
                <div className="container text-center text-md-left">

                    <div className="row">

                        <div className="col-md-3 ">

                            <h4 className="text-uppercase">About Us</h4>
                            <p style={{ color: "white" }}>We are a highly motivated team, all with very individual qualities and experience, and a high standard of patient care.
<br />
                                <br />
We have advanced high levels of training and decades of experience and we constantly strive to provide the best treatment available using the most up to date tried and tested technology.</p>
                        </div>

                        <hr className="clearfix w-100 d-md-none pb-3" />

                        <div className="col-md-3 mb-md-0 mb-3">
                            <h4>Quick Links</h4>
                            <ul className="list-unstyled">
                                <li>
                                    <a style={{ textDecoration: "none" }} href="#!">Home</a>
                                </li>
                                <li>
                                    <a style={{ textDecoration: "none" }} href="#!">About Us</a>
                                </li>
                                <li>
                                    <a style={{ textDecoration: "none" }} href="#!">Blog</a>
                                </li>
                                <li>
                                    <a style={{ textDecoration: "none" }} href="#!">FAQ</a>
                                </li>
                                <li>
                                    <a style={{ textDecoration: "none" }} href="#!">FAQ</a>
                                </li>
                                <li>
                                    <a style={{ textDecoration: "none" }} href="#!">FAQ</a>
                                </li>
                                <li>
                                    <a style={{ textDecoration: "none" }} href="#!">Contact Us</a>
                                </li>
                                <li>
                                    <a style={{ textDecoration: "none" }} href="#!">Photo Gallery</a>
                                </li>
                                <li>
                                    <a style={{ textDecoration: "none" }} href="#!">Vacancies</a>
                                </li>
                                <li>
                                    <a style={{ textDecoration: "none" }} href="#!">Testimonials</a>
                                </li>
                            </ul>
                        </div>

                        <div className="News col-md-3 mb-md-0 mb-3">

                            <h4>Latest News</h4>
                            <ul className="list-unstyled">
                                <li>
                                    <span>September 26, 2015</span>
                                    <br />
                                    <a style={{ textDecoration: "none" }} href="#!">We are amongst the most qualified dental implant providers</a>
                                </li>
                                <li>
                                    <span>September 26, 2015</span>
                                    <br />
                                    <a style={{ textDecoration: "none" }} href="#!">To find out if your child is eligible call The Department of Human Services</a>
                                </li>
                                <li>
                                    <span>September 26, 2015</span>
                                    <br />
                                    <a style={{ textDecoration: "none" }} href="#!">If you need a crown or an implant you will pay a gap
</a>
                                </li>

                            </ul>
                        </div>
                        <div className=" Social col-md-3 mb-md-0 mb-3">

                            <h4>Our Social Pages</h4>
                            <ul className="list-unstyled">
                                <li>

                                    <a style={{ textDecoration: "none" }} href="#!"><i class="fa fa-facebook" aria-hidden="true" /></a>
                                </li>
                                <li>

                                    <a style={{ textDecoration: "none" }} href="#!"><i class="fa fa-twitter" aria-hidden="true" /></a>
                                </li>
                                <li>

                                    <a style={{ textDecoration: "none" }} href="#!"><i class="fa fa-instagram" aria-hidden="true" />
                                    </a>
                                </li>
                                <li>

                                    <a style={{ textDecoration: "none" }} href="#!"><i class="fa fa-linkedin" aria-hidden="true" />
                                    </a>
                                </li>
                            </ul>
                            <h4 className="mt-4">Open Hours</h4>
                            <p>Monday - Friday <span>  9:00 am - 6:00 pm</span></p>
                            <p>Saturday    <span>  9:00 am - 4:00 pm</span></p>
                            <p>Sunday    <span>  9:00 am - 2:00 pm</span></p>
                        </div>
                    </div>

                </div>

                <div className="footer-copyright mt-4 text-center py-3">© 2020 Copyright:
    <a style={{ textDecoration: "none" }} href="https://www.facebook.com/tuvn2"> Tu Nguyen</a>
                </div>

            </footer>


        </div >
    )
}
