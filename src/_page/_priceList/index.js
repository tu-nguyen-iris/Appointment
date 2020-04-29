import React from 'react'
import "./price.scss"
let imgUrl = './img/tools.jpg'
let styles = {
    root: {
        backgroundImage: 'url(' + imgUrl + ')',
        overflow: 'hidden',
    },
}
export default function Price() {
    return (
        <section className="price " style={styles.root}>
            <div className="container">
                <h1>Price List</h1>
                <div className="item_after">
                    <div className="item_left">
                        <p>Inlays restoration</p>
                        <span>An inlay is a restoration which lies inside the cusps of the tooth</span>
                    </div>
                    <div className="item_right">
                        <p>$1,190</p>
                        <span>$1,020</span>
                    </div>
                </div>
                <div className="item_after">
                    <div className="item_left">
                        <p>Inlays restoration</p>
                        <span>An inlay is a restoration which lies inside the cusps of the tooth</span>
                    </div>
                    <div className="item_right">
                        <p>$1,190</p>
                        <span>$1,020</span>
                    </div>
                </div>
                <div className="item_after">
                    <div className="item_left">
                        <p>Inlays restoration</p>
                        <span>An inlay is a restoration which lies inside the cusps of the tooth</span>
                    </div>
                    <div className="item_right">
                        <p>$1,190</p>
                        <span>$1,020</span>
                    </div>
                </div>
                <div className="item_after">
                    <div className="item_left">
                        <p>Inlays restoration</p>
                        <span>An inlay is a restoration which lies inside the cusps of the tooth</span>
                    </div>
                    <div className="item_right">
                        <p>$1,190</p>
                        <span>$1,020</span>
                    </div>
                </div>
                <div className="item_after">
                    <div className="item_left">
                        <p>Inlays restoration</p>
                        <span>An inlay is a restoration which lies inside the cusps of the tooth</span>
                    </div>
                    <div className="item_right">
                        <p>$1,190</p>
                        <span>$1,020</span>
                    </div>
                </div>
                <div className="item_after">
                    <div className="item_left">
                        <p>Inlays restoration</p>
                        <span>An inlay is a restoration which lies inside the cusps of the tooth</span>
                    </div>
                    <div className="item_right">
                        <p>$1,190</p>
                        <span>$1,020</span>
                    </div>
                </div>
            </div>
        </section>
    )
}
