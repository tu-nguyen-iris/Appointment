import React from 'react'
import Slider from 'react-slick'
const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1
};
export default function Success() {
    return (
        <section className='success'>
            <Slider {...settings}>
                <div>
                    <div className="row card_head">

                        <div className="col-xl-6 card_head ">
                            <div className="card card1">

                                <img className="card-img-top " src="./img/story_1_before-250x223.jpg" />
                                <div className="card-body">

                                    <h4 className="card-title">before</h4>
                                </div>
                            </div>
                            <div className="card card2">
                                <img className="card-img-top " src="./img/story_1_after-250x223.jpg" />
                                <div className="card-body">

                                    <h4 className="card-title">after</h4>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-6">



                            asdasdas
                        </div>


                    </div>

                </div>
                <div>
                    <h3>2</h3>
                </div>
                <div>
                    <h3>3</h3>
                </div>
                <div>
                    <h3>4</h3>
                </div>
                <div>
                    <h3>5</h3>
                </div>
                <div>
                    <h3>6</h3>
                </div>
            </Slider>
        </section>
    )
}
