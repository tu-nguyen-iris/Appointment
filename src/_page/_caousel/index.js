import React from 'react'
import "./carousel.scss"
export default function Carousel() {
    return (
        <div id="carouselExampleControls" className="carousel carouselCss slide" data-ride="carousel">
            <div className="carousel-inner">
                <div className="carousel-item active">
                    <img className="d-block w-100" src="./img/1.jpg" alt="First slide" />
                    <div className="textCarousel">
                        <h1 className="animated  fadeInDown delay-1s">Innovatie Technology Cretifired Dentis</h1>
                        <p className="animated  fadeInLeft delay-1s">Our ClinicÂ has grown to provide a world class facility for the treatment of tooth loss, dental cosmetics and advanced restorative dentistry.</p>
                        <button className="animated  fadeIn delay-1s" > Learn More</button>

                    </div>
                </div>
                <div className="carousel-item">
                    <img className="d-block w-100" src="./img/2.jpg" alt="Second slide" />
                    <div className="textCarousel">
                        <h1 className="animated  fadeInDown delay-1s">Innovatie Technology Cretifired Dentis</h1>
                        <p className="animated  fadeInLeft delay-1s">Our ClinicÂ has grown to provide a world class facility for the treatment of tooth loss, dental cosmetics and advanced restorative dentistry.</p>
                        <button className="animated  fadeIn delay-1s" > Learn More</button>

                    </div>
                </div>
                <div className="carousel-item">
                    <img className="d-block w-100" src="./img/3.jpg" alt="Third slide" />
                    <div className="textCarousel">
                        <h1 className="animated  fadeInDown delay-1s">Innovatie Technology Cretifired Dentis</h1>
                        <p className="animated  fadeInLeft delay-1s">Our ClinicÂ has grown to provide a world class facility for the treatment of tooth loss, dental cosmetics and advanced restorative dentistry.</p>
                        <button className="animated  fadeIn delay-1s" > Learn More</button>

                    </div>
                </div>
            </div>
            <a className="carousel-control-prev" href="#carouselExampleControls" role="button" data-slide="prev">
                <span className="carousel-control-prev-icon" aria-hidden="true" />
                <span className="sr-only">Previous</span>
            </a>
            <a className="carousel-control-next" href="#carouselExampleControls" role="button" data-slide="next">
                <span className="carousel-control-next-icon" aria-hidden="true" />
                <span className="sr-only">Next</span>
            </a>
        </div>

    )
}
