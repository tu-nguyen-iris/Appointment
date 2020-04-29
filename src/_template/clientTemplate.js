import React, { Fragment } from 'react'
import NavBar from '../_page/_navBar'
import Footer from '../_page/_footer'
import { Route } from 'react-router-dom'

const HomeLayOut = (props) => {
    return <Fragment>
        <NavBar/>
        {props.children}
        <Footer />
    </Fragment>


}






export default function ClientTemplate({ Component, ...props }) {
    return <Route
        {...props}
        render={propsComponent => {
            return <HomeLayOut>
                <Component {...propsComponent} />
            </HomeLayOut>
        }}
    />
}
