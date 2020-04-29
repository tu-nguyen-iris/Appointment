import React from 'react'
import "./Appoint.scss"
export default function AppointForm() {
    return (
        <section className="container AppointForm">
            <h1>Online Appointment</h1>
            <div className="row">
                <div className="col-xl-8">
                    <input type="text"
                        className="input_name" name="" id="" aria-describedby="helpId" placeholder="Name" />

                    <div className="row">
                        <input type="number"
                            className="inputNumber col-xl-4" name="" id="" aria-describedby="helpId" placeholder="Phone" />
                        <input type="email"
                            className="inputNumber col-xl-4" name="" id="" aria-describedby="helpId" placeholder="Email" />
                    </div>
                    <div className="row">
                        <input type="date"
                            className="inputNumber col-xl-4" name="" id="" aria-describedby="helpId" placeholder="Date" />
                        <input type="time"
                            className="inputNumber col-xl-4" name="" id="" aria-describedby="helpId" placeholder="Time" />
                    </div>


                </div>



                <div className="col-xl-4">
                    <textarea name="message" cols={40} rows={10} className="wpcf7-form-control wpcf7-textarea wpcf7-validates-as-required" aria-required="true" aria-invalid="false" placeholder="Your message" defaultValue={""} />

                </div>





            </div>



        </section>
    )
}
