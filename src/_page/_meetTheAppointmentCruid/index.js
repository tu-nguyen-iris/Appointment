import React, { useState } from 'react'
import { connect } from 'react-redux'
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Modal from './modal';
import "./Cruid.scss"
import * as action from "./../../_redux/_action/action"
const useStyles = makeStyles((theme) => ({
    root: {
        '& > *': {
            margin: theme.spacing(1),
            width: '25ch',
        },
    },
}));


function Cruid(props) {
    let { data } = props
    const classes = useStyles();
    const [keyword, setkeyword] = useState("")

    const renderTable = () => {
        //search
        data = data.filter(item => item.name.toLowerCase().indexOf(keyword.toLowerCase()) !== -1)
        return data.map((item, index) => {
            return (
                <tr key={index}>
                    <td>{item.name}</td>
                    <td>{item.email}</td>
                    <td>{item.address}</td>
                    <td>{item.phoneNumber}</td>
                    <td>{item.date}</td>
                    <td>{item.time}</td>
                    <td>{item.appointmentAddress}</td>
                    <td>
                        <button className="btn btn-success" onClick={
                            () => { props.onEdit(item) }
                        } data-toggle="modal" data-target="#exampleModalOut">Edit</button>
                        <button className="btn btn-danger" onClick={() => {
                            props.onDelete(item)

                        }}>Delete</button>


                    </td>
                </tr>
            )
        })
    }


    return (
        <section className="cruid container-fluid">
            <h1>List Apponintment Data</h1>
            <form className={classes.root} noValidate autoComplete="off">
                <TextField id="standard-basic" onChange={(e) => {
                    setkeyword(e.target.value)
                }} type="search" label="Search" />
            </form>
            <table className="table">
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Address</th>
                        <th>Phone Number</th>
                        <th>Date</th>
                        <th>Time</th>
                        <th>Apponintment Address</th>
                        <th>Control</th>

                    </tr>
                </thead>
                <tbody>
                    {renderTable()}
                </tbody>
            </table>

            <Modal />
        </section>
    )
}


const mapDispatchToProps = dispatch => {
    return {
        onEdit: data => {
            dispatch(action.onEdit(data))

        },
        onDelete: data => {
            dispatch(action.onDelete(data))
        }
    }
}
const mapStateToProps = state => {
    return {
        data: state.meetReducer.listApponitment,

    }
}
export default connect(mapStateToProps, mapDispatchToProps)(Cruid)