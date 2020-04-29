import React, { Component } from 'react'
import { connect } from 'react-redux'
import * as action from "./../../_redux/_action/action"

class Modal extends Component {
    constructor(props) {
        super(props)
        this.state = {
            id: "",
            name: "",
            email: "",
            address: "",
            phoneNumber: "",
            date: "",
            time: "",
            appointmentAddress: "11 Wall St, New York, NY 10005,United States"
        }
    }
    UNSAFE_componentWillReceiveProps(nextProps) {
        console.log(nextProps)
        if (nextProps && nextProps.edit) {
            this.setState({
                id: nextProps.edit.id,
                name: nextProps.edit.name,
                email: nextProps.edit.email,
                address: nextProps.edit.address,
                phoneNumber: nextProps.edit.phoneNumber,
                date: nextProps.edit.date,
                time: nextProps.edit.time,
                appointmentAddress: nextProps.edit.appointmentAddress

            })
        }
    }
    handleOnChange = e => {
        let { name, value } = e.target
        this.setState({
            [name]: value
        })
    }
    handleOnSubmit = (e) => {
        e.preventDefault()
        this.props.onUpdate(this.state)
        alert("Edit success")
    }
    render() {
        return (
            <div>
                <div>

                    <div className="modal fade" id="exampleModalOut" tabIndex={-1} role="dialog" aria-labelledby="modelTitleId" aria-hidden="true">
                        <div className="modal-dialog" role="document">
                            <div className="modal-content">
                                <h1>Edit Data</h1>
                                <div className="modal-body">
                                    <form onSubmit={this.handleOnSubmit}>
                                        <div className="form-group">
                                            <label htmlFor="exampleInputEmail1">Name</label>
                                            <input onChange={this.handleOnChange} name="name" value={this.state.name} type="text" className="form-control" />

                                        </div>
                                        <div className="form-group">
                                            <label htmlFor="exampleInputPassword1">Email</label>
                                            <input onChange={this.handleOnChange} name="email" type="email" value={this.state.email} className="form-control" />
                                        </div>
                                        <div className="form-group">
                                            <label htmlFor="exampleInputEmail1">Address</label>
                                            <input onChange={this.handleOnChange} name="address" type="text" value={this.state.address} className="form-control" />

                                        </div>
                                        <div className="form-group">
                                            <label htmlFor="exampleInputEmail1">Phone Number</label>
                                            <input onChange={this.handleOnChange} name="phoneNumber" type="number" value={this.state.phoneNumber} className="form-control" />

                                        </div>
                                        <div className="form-group">
                                            <label htmlFor="exampleInputEmail1">Date</label>
                                            <input onChange={this.handleOnChange} name="date" type="date" value={this.state.date} className="form-control" />

                                        </div>
                                        <div className="form-group">
                                            <label htmlFor="exampleInputEmail1">Time</label>
                                            <input name="time" type="time" value={this.state.time} className="form-control" />

                                        </div>
                                        <div class="form-group">
                                            <label for="exampleFormControlSelect1">Appointment Address</label>
                                            <select onChange={this.handleOnChange} name="appointmentAddress" value={this.state.appointmentAddress} class="form-control" id="exampleFormControlSelect1">
                                                <option>11 Wall St, New York, NY 10005,United States</option>
                                                <option>130 King Strees,West,Toronto,MH5,Ontario,Canada</option>
                                            </select>
                                        </div>
                                        <button type="submit" className="btn btn-primary">Update</button>
                                        <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
                                    </form>

                                </div>

                            </div>
                        </div>
                    </div>
                </div>

            </div>
        )
    }
}
const mapStateToProps = state => {
    return {
        edit: state.meetReducer.edit
    }
}
const mapDispatchToProps = dispatch => {
    return {
        onUpdate: data => {
            dispatch(action.onUpdate(data))
        }
    }

}
export default connect(mapStateToProps, mapDispatchToProps)(Modal)