import React, { Component } from 'react'
import { Formik, Field, Form, ErrorMessage } from 'formik';
import { connect } from "react-redux"
import "./form.scss"
import * as Yup from "yup"
import * as action from "./../../../_redux/_action/action"
const validation = Yup.object().shape({
    name: Yup.string().required("Name is required!"),
    email: Yup.string().required("Email is required!")
        .email("Email not Valid"),
    address: Yup
        .string().required("Address is required!"),
    phoneNumber: Yup.string()
        .required("Phone Number is required!"),
    date: Yup.string().required("Date is required!"),
    time: Yup.string().required("Time is required!"),


})

class FormModal extends Component {

    handleSubmit = value => {
        this.props.onAddAppointment(value)
        document.getElementById("exampleForm").reset();
        alert("Add Appointment Success")
    }
    render() {
        return (
            <div className="formM">
                <div className="modal fade" id="exampleModalCenter" tabIndex={-1} role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
                    <div className="modal-dialog modal-dialog-centered" role="document">
                        <div className="modal-content">
                            <button type="button" className="close ml-auto m-3" data-dismiss="modal" style={{ color: "red", fontSize: "2em" }} aria-label="Close">
                                <span aria-hidden="true">×</span>
                            </button>
                            <div className="modal-body">
                                <Formik
                                    initialValues={
                                        {
                                            id: "",
                                            name: "",
                                            email: "",
                                            address: "",
                                            phoneNumber: "",
                                            date: "",
                                            time: "",
                                            appointmentAddress: "11 Wall St, New York, NY 10005,United States"
                                            // , createAt: {
                                            //     type: Date,
                                            //     default: Date.now
                                            // }
                                        }
                                    }
                                    // validationSchema={validation}

                                    onSubmit={this.handleSubmit}


                                    render={(formikProps) => {
                                        return <Form id="exampleForm">
                                            <p>Add Apponitment</p>
                                            <Field


                                                type="email"
                                                onChange={formikProps.handleChange}
                                                name="email"
                                                placeholder="Email"
                                                className="formInput"
                                            />
                                            <ErrorMessage name="email">
                                                {msg => <div className="alert alert-danger">{msg}</div>}

                                            </ErrorMessage>

                                            <Field
                                                type="text"
                                                onChange={formikProps.handleChange}
                                                name="name"
                                                placeholder="Name"
                                                className="formInput"
                                            />
                                            <ErrorMessage name="name">
                                                {msg => <div className="alert alert-danger">{msg}</div>}
                                            </ErrorMessage>

                                            <Field
                                                type="number"
                                                onChange={formikProps.handleChange}
                                                name="phoneNumber"
                                                placeholder="Phone Number"
                                                className="formInput"
                                            />
                                            <ErrorMessage name="phoneNumber">
                                                {msg => <div className="alert alert-danger">{msg}</div>}

                                            </ErrorMessage>

                                            <Field
                                                type="text"
                                                placeholder="Address"
                                                onChange={formikProps.handleChange}
                                                name="address"
                                                placeholder="Address"
                                                className="formInput"
                                            />
                                            <ErrorMessage name="address">
                                                {msg => <div className="alert alert-danger">{msg}</div>}

                                            </ErrorMessage>

                                            <Field
                                                type="date"
                                                onChange={formikProps.handleChange}
                                                name="date"
                                                className="formInput"
                                            />
                                            <ErrorMessage name="date">
                                                {msg => <div className="alert alert-danger">{msg}</div>}

                                            </ErrorMessage>

                                            <Field
                                                type="time"
                                                onChange={formikProps.handleChange}
                                                name="time"
                                                className="formInput"
                                            />
                                            <ErrorMessage name="time">
                                                {msg => <div className="alert alert-danger">{msg}</div>}

                                            </ErrorMessage>
                                            <label>Appointment Address</label>
                                            <Field
                                                component="select"
                                                onChange={formikProps.handleChange}
                                                name="appointmentAddress"
                                                className="form-control formInput"
                                            >
                                                <option>11 Wall St, New York, NY 10005,United States</option>
                                                <option>130 King Strees,West,Toronto,MH5,Ontario,Canada</option>
                                            </Field>

                                            <div className="mt-4">
                                                <button type="submit" className="btn btn-success ">Add</button>
                                                <button type="button" className="btn btn-secondary ml-3" data-dismiss="modal">Close</button>
                                            </div>

                                        </Form>
                                    }}

                                />

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

const mapDispatchToProps = dispatch => {
    return {
        onAddAppointment: data => {
            dispatch(action.addAppontment(data))
        }
    }
}
export default connect(null, mapDispatchToProps)(FormModal)