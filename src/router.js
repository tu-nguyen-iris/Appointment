import Home from "./_page/_home/index"
import Meet from "./_page/_MeetTheAppontment"
import Cruid from "./_page/_meetTheAppointmentCruid"

const clientRouter = [
    {
        path: "/",
        exact: true,
        component: Home

    },
    {
        path: "/meet-the-appointment",
        exact: false,
        component: Meet
    },
    {
        path: "/meet-the-appointment-cruid",
        exact: false,
        component: Cruid
    }

]



export default clientRouter 