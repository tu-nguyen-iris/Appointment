import React, { Component } from 'react'
import "./index.scss"
import Slider from "react-slick"
export default class OurTeam extends Component {
    render() {
        const settings = {
            infinite: true,
            speed: 500,
            slidesToShow: 4,
            slidesToScroll: 4,
            responsive: [
                {
                    breakpoint: 1024,
                    settings: {
                        slidesToShow: 3,
                        slidesToScroll: 3,
                        infinite: true,
                        dots: true
                    }
                },
                {
                    breakpoint: 900,
                    settings: {
                        slidesToShow: 2,
                        slidesToScroll: 2,
                        initialSlide: 2
                    }
                },
                {
                    breakpoint: 600,
                    settings: {
                        slidesToShow: 1,
                        slidesToScroll: 1
                    }
                }
            ]

        }

        return (
            <section className="ourTeam">
                <div className="container">
                    <h1>Our Team</h1>
                    <Slider {...settings}>
                        <div className="ourTeam_item">
                            <div className="imagine">
                                <img src="./img/Team-1.jpg" />
                                <p>Robert Henderson</p>
                            </div>

                        </div>
                        <div className="ourTeam_item">
                            <div className="imagine">
                                <img src="./img/Team-1.jpg" />
                                <p>Robert Henderson</p>
                            </div>

                        </div>   <div className="ourTeam_item">
                            <div className="imagine">
                                <img src="./img/Team-1.jpg" />
                                <p>Robert Henderson</p>
                            </div>

                        </div>   <div className="ourTeam_item">
                            <div className="imagine">
                                <img src="./img/Team-1.jpg" />
                                <p>Robert Henderson</p>
                            </div>

                        </div>   <div className="ourTeam_item">
                            <div className="imagine">
                                <img src="./img/Team-1.jpg" />
                                <p>Robert Henderson</p>
                            </div>

                        </div>   <div className="ourTeam_item">
                            <div className="imagine">
                                <img src="./img/Team-1.jpg" />
                                <p>Robert Henderson</p>
                            </div>

                        </div>   <div className="ourTeam_item">
                            <div className="imagine">
                                <img src="./img/Team-1.jpg" />
                                <p>Robert Henderson</p>
                            </div>

                        </div>
                    </Slider>
                </div>

            </section >
        )
    }
}
