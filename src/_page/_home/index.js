import React, { Component } from 'react'
import Carousel from '../_caousel'
import AboutUs from '../_aboutUs'
import Advantages from '../_ advantages'
import Count from '../_countUp'
import Our from '../_our'
import OurTeam from './../_ourTeam/index'
import AppointForm from '../_OnlineAppoint'
import Price from '../_priceList'
import Suppliers from '../_suppliers'

export default class Home extends Component {
    render() {
        return (
            <section>
                <Carousel />
                <AboutUs />
                <Advantages />
                <Count />
                <Our />
                <OurTeam />
                <AppointForm />
                <Price />
                <Suppliers />
                <div>
                    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3919.552304296045!2d106.66868521386742!3d10.768945492326589!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31752ee0a9dcf347%3A0x22a1d70073564291!2zNDU5IFPGsCBW4bqhbiBI4bqhbmgsIFBoxrDhu51uZyAxMCwgUXXhuq1uIDEwLCBI4buTIENow60gTWluaCwgVmlldG5hbQ!5e0!3m2!1sen!2s!4v1569505168822!5m2!1sen!2s" className="googleMap" allowFullScreen />
                </div>
            </section>
        )
    }
}
