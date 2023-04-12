import { useReducer, createContext, useEffect, useState } from "react";
import appReducer, { userData } from "./appReducer";

const AppContext = createContext();

export const AppProvider = ({ children }) => {
    const [state, dispatch] = useReducer(appReducer, userData);
    const [planPrice, setPlanPrice] = useState(0);
    const [addonPrice, setAddonPrice] = useState(0);
    const { plan, isYearly, add_ons } = state;

    const changeName = (e) => {
        dispatch({
        type: "CHANGE_NAME",
        payload: {
            name: e.target.value
        }
        })
    };

    const changeEmail = (e) => {
        dispatch({
        type: "CHANGE_EMAIL",
        payload: {
            email: e.target.value
        }
        })
    };

    const changePhone = (e) => {
        dispatch({
        type: "CHANGE_PHONE",
        payload: {
            phone: e.target.value.replace(/[^0-9-]/g, '')
        }
        })
    };

    const changePlan = (e) => {
        dispatch({
            type: "CHANGE_PLAN",
            payload: {
                plan: e.target.getAttribute("id")
            }
        })
    };

    const changeTime = (checked) => {
        dispatch({
            type: "CHANGE_TIME",
            payload: {
                time: checked
            }
        })
    };

    const editAddons = (value) => {
        dispatch({
            type: "CHANGE_ADDONS",
            payload: { value }
        });
    };

    useEffect(() => {
        if (isYearly) {
            plan === "Arcade" ? setPlanPrice(90)
            : plan === "Advanced" ? setPlanPrice(120)
            : plan === "Pro" ? setPlanPrice(150)
            : setPlanPrice(0);
        } else {
            plan === "Arcade" ? setPlanPrice(9)
            : plan === "Advanced" ? setPlanPrice(12)
            : plan === "Pro" ? setPlanPrice(15)
            : setPlanPrice(0);
        }
    }, [plan, isYearly]);

    useEffect(() => {
        let sum = 0;
        Object.keys(add_ons).map(add => {
            if (add_ons[add]) {
                sum += (add === "online" ? 1 : add==="storage" ? 2 : 2);
            }
        });
        setAddonPrice(isYearly ? sum*10 : sum);
    }, [add_ons, isYearly]);

    useEffect(() => {
        console.log({addonPrice});
        sessionStorage.setItem("addonPrice", addonPrice);
        console.log({planPrice});
        sessionStorage.setItem("planPrice", planPrice);
    }, [planPrice, addonPrice]);

    const contextData = {
        data: state,
        changeEmail,
        changeName,
        changePhone,
        changeTime,
        changePlan,
        editAddons,
        planPrice,
        addonPrice
    };

    return (
        <AppContext.Provider value={contextData}>
            {children}
        </AppContext.Provider>
    )
}

export default AppContext;
