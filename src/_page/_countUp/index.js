import React from 'react'
import "./count.scss"
export default function Count() {
    return (
        <section className="number">
            <div className="number__content ">
                <div className="number__items">
                    <p className="counter">15</p>
                    <p>years of experience</p>
                </div>
                <div className="number__items">
                    <p className="counter">79</p>
                    <p>visited conferentions</p>
                </div>
                <div className="number__items">
                    <p className="counter">452</p>
                    <p>Smiling clients</p>
                </div>
                <div className="number__items">
                    <p className="counter">14</p>
                    <p>Master certificaitons</p>
                </div>
            </div>
        </section>

    )
}
