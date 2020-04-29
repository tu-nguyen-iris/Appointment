import * as ActionType from "./../_constans/constant"
const initState = {
    listApponitment: [],
    edit: null,

}


const meetReducer = (state = initState, action) => {
    switch (action.type) {
        case ActionType.ADD_APPOINTMENT:
            if (!action.data.id) {
                let temp = { ...action.data };
                temp.id = Math.random();
                state.listApponitment = [...state.listApponitment, temp];
            }
            return { ...state }
        case ActionType.EDIT:
            state.edit = action.data
            console.log(action.data)
            return { ...state }
        case ActionType.UPDATE:
            if (action.data.id) {
                let index = state.listApponitment.findIndex(data1 => data1.id === action.data.id)
                if (index !== -1) {
                    let temp = [...state.listApponitment]
                    temp[index] = action.data
                    state.listApponitment = temp

                }
                console.log(index)
            }

            return { ...state }

        case ActionType.DELETE:
            let index = state.listApponitment.findIndex(data1 => data1.id === action.data.id)
            if (index !== -1) {
                let temp = [...state.listApponitment]
                temp.splice(index, 1)
                state.listApponitment = temp
            }
            return { ...state }
        default:

            return { ...state }
    }



}

export default meetReducer;