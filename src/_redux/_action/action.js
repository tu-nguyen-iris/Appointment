import * as ActionType from "./../_constans/constant"

export const addAppontment = data => {
    return {
        type: ActionType.ADD_APPOINTMENT,
        data
    }
}
export const onEdit = data => {
    return {
        type: ActionType.EDIT,
        data
    }
}
export const onUpdate = data => {
    return {
        type: ActionType.UPDATE,
        data
    }
}
export const onDelete = data => {
    return {
        type: ActionType.DELETE,
        data
    }
}