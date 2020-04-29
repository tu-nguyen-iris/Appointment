import React, { useState } from 'react'
import MaterialTable from 'material-table';
import { connect } from "react-redux"
function Meet(props) {
    let { appointment } = props
    const [list, setList] = useState({

    })
    const [state, setState] = React.useState({
        columns: [
            { title: 'Name', field: 'name' },
            { title: 'Email', field: 'email' },
            { title: 'Address', field: 'address', },
            {
                title: "Phone Number", field: 'phoneNumber', type: 'numeric'
            },
            { title: 'Date', field: 'date', type: "date" },
            { title: 'Time', field: 'time', type: "time" },
            {
                title: 'Appointment Address',
                field: 'appointmentAddress',
            },
        ],
    });

    return (
        <MaterialTable
            title="List Apponitment"
            columns={state.columns}
            data={appointment}
        />
    )
}
const mapStateToProps = state => {
    return {
        appointment: state.meetReducer.listApponitment

    }
}
export default connect(mapStateToProps, null)(Meet)