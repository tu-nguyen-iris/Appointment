import React, { Component } from 'react'
import Slider from "react-slick"
import "./our.scss"
export default class Our extends Component {
    render() {
        const settings = {
            infinite: true,
            speed: 500,
            slidesToShow: 3,
            slidesToScroll: 3,
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
            <section className="container our">
                <h1>Our Happy Clients</h1>
                <Slider {...settings}>
                    <div className="our_item">
                        <div className="text">
                            <p>The doctors and nusers and aides were excellent.the food was excellent.I am feeling fine,back to my old self again and it feels greats.thanks God clinics such as yors.</p>
                            <span>Maria Jackson</span>
                        </div>

                    </div>
                    <div className="our_item">
                        <div className="text">
                            <p>The doctors and nusers and aides were excellent.the food was excellent.I am feeling fine,back to my old self again and it feels greats.thanks God clinics such as yors.</p>
                            <span>Maria Jackson</span>
                        </div>

                    </div>  <div className="our_item">
                        <div className="text">
                            <p>The doctors and nusers and aides were excellent.the food was excellent.I am feeling fine,back to my old self again and it feels greats.thanks God clinics such as yors.</p>
                            <span>Maria Jackson</span>
                        </div>

                    </div>  <div className="our_item">
                        <div className="text">
                            <p>The doctors and nusers and aides were excellent.the food was excellent.I am feeling fine,back to my old self again and it feels greats.thanks God clinics such as yors.</p>
                            <span>Maria Jackson</span>
                        </div>

                    </div>  <div className="our_item">
                        <div className="text">
                            <p>The doctors and nusers and aides were excellent.the food was excellent.I am feeling fine,back to my old self again and it feels greats.thanks God clinics such as yors.</p>
                            <span>Maria Jackson</span>
                        </div>

                    </div>  <div className="our_item">
                        <div className="text">
                            <p>The doctors and nusers and aides were excellent.the food was excellent.I am feeling fine,back to my old self again and it feels greats.thanks God clinics such as yors.</p>
                            <span>Maria Jackson</span>
                        </div>

                    </div>
                </Slider>
            </section >
        )
    }
}
