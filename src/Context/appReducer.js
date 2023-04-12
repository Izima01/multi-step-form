export const userData = {
    name: "",
    email: "",
    phone: "",
    plan: "",
    isYearly: false,
    online: false,
    storage: false,
    customize: false,
    add_ons: {
        online: false,
        storage: false,
        customize: false
    }
};

const appReducer = (state, action) => {
    const {type, payload} = action;

    switch (type) {
        case "CHANGE_NAME":
            return {
                ...state,
                name: payload.name
            }
        case "CHANGE_EMAIL":
            return {
                ...state,
                email: payload.email
            }
        case "CHANGE_PHONE":
            return {
                ...state,
                phone: payload.phone
            }
        case "CHANGE_PLAN":
            return {
                ...state,
                plan: payload.plan
            }
        case "CHANGE_TIME":
            return {
                ...state,
                isYearly: payload.time
            }
        case "CHANGE_ONLINE":
            return {
                ...state,
                online: payload.online
            }
        case "CHANGE_STORAGE":
            return {
                ...state,
                storage: payload.storage
            }
        case "CHANGE_CUSTOMIZE":
            return {
                ...state,
                customize: payload.customize
            }
        case "CHANGE_ADDONS":
            return {
                ...state,
                add_ons: {...state.add_ons, [payload.value]: !state.add_ons[payload.value]}
            }
        default:
            throw new Error('No case for type: ' + type)
    }
}

export default appReducer