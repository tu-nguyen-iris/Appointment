
import "./Suppliers.scss"
import React, { Component } from 'react'
import Slider from "react-slick"
export default class Suppliers extends Component {
    render() {
        const settings = {
            infinite: true,
            speed: 500,
            slidesToShow: 6,
            slidesToScroll: 3,
            responsive: [
                {
                    breakpoint: 1024,
                    settings: {
                        slidesToShow: 5,
                        slidesToScroll: 5,
                        infinite: true,
                        dots: true
                    }
                },
                {
                    breakpoint: 600,
                    settings: {
                        slidesToShow: 2,
                        slidesToScroll: 2,
                        initialSlide: 2
                    }
                },
                {
                    breakpoint: 480,
                    settings: {
                        slidesToShow: 1,
                        slidesToScroll: 1
                    }
                }
            ]

        }
        return (
            <section className="container supp">
                <p>Pharmacy Suppliers</p>
                <Slider {...settings}>
                    <div className="supp_item">
                        <div className="text">
                            <img src="./img/partner_2.jpg" />
                        </div>

                    </div>
                    <div className="supp_item">
                        <div className="text">
                            <img src="./img/partner_2.jpg" />
                        </div>

                    </div>  <div className="supp_item">
                        <div className="text">
                            <img src="./img/partner_2.jpg" />
                        </div>

                    </div>  <div className="supp_item">
                        <div className="text">
                            <img src="./img/partner_2.jpg" />
                        </div>

                    </div>  <div className="supp_item">
                        <div className="text">
                            <img src="./img/partner_2.jpg" />
                        </div>

                    </div>  <div className="supp_item">
                        <div className="text">
                            <img src="./img/partner_2.jpg" />
                        </div>

                    </div> <div className="supp_item">
                        <div className="text">
                            <img src="./img/partner_2.jpg" />
                        </div>

                    </div> <div className="supp_item">
                        <div className="text">
                            <img src="./img/partner_2.jpg" />
                        </div>

                    </div>
                </Slider>
            </section >
        )
    }
}
