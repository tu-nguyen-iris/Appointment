import React from 'react'
import "./Ab.scss"
export default function AboutUs() {
   
    return (
        <section className="Ab container">
            <div className="Ab1">
                <div className="headerAb row">
                    <div className="col-xl-4 p-5 test" style={{ backgroundColor: "#18afda" }}>
   <i class="fa fa-book" aria-hidden="true"></i>
                        <div className="text" >
                            <p>Dental Implants
</p>
                            <span>   Pre-orderÂ today just for $879Â perÂ tooth</span>

                        </div>

                    </div>
                    <div className="col-xl-4 p-5 test" style={{ backgroundColor: "#f57e57" }}>
                        <i class="fa fa-calendar-times-o" aria-hidden="true"></i>
                        <div className="text">
                            <p>Cosmetic Braces
</p>
                            <span>  Affordable frenchÂ braces for kids and adults</span>

                        </div>
                    </div>
                    <div className="col-xl-4 p-5 test" style={{ backgroundColor: "#4c6575" }}><i class="fa fa-person-booth"></i>

<i class="fa fa-bed" aria-hidden="true"></i>
                        <div className="text">
                            <p>Teeth Whitening

</p>
                            <span> TopÂ standards and high quality
                          

                            </span>

                        </div>
                    </div>

                </div>

<div className="AbBody">

<div className="row">
    <div className="col-xl-9 AbBody_left">
    <h1>About Us</h1>
<p>Meet Dr.Redisson</p>
<div className="row">
<img className="col-xl-4" src="./img/Fotolia_63054040_Subscription_Monthly_XL.jpg" />

<span className="col-xl-7">OurÂ Dental ClinicÂ is dedicated to providing the most up to date general, orthodontic and family dentistry.

Our ClinicÂ has grown to provide a world class facility for the treatment of tooth loss, dental cosmetics and advanced restorative dentistry.

We are among the most qualified implant providers in the USAÂ with over 35 years of quality training and experience.</span>   
   
</div>

  </div>
    <div className="col-xl-3 AbBody_right">
    <p>Certificates of completion</p>
    <ul>
        <li>
      <img src="./img/2-130x100.jpg" />
        </li>
        <li>
            <img src="./img/Museum-of-Favorite-Shirts-Certificate-of-Induction-web-130x100.jpg" />  
        </li>
        <li>
        <img src="./img/Museum-of-Favorite-Shirts-Certificate-of-Induction-web-130x100.jpg" />  
        </li>
    </ul>
    </div>
</div>


    
</div>

            </div>


        </section>
    )
}
