import axios from "axios";
import { SIGNUP_ERROR, SIGNUP_LOADING, SIGNUP_SUCCESS } from "./signup.action.types";
export const signup = (creds) => async (dispatch) => {
    dispatch({ type: SIGNUP_LOADING })
    try {
        let res = await axios.post("https://blossombackend.onrender.com/users/signup", creds)
        dispatch({ type: SIGNUP_SUCCESS, payload: res.data });
        console.log(res.data)
         return res.data
        
    }
    catch (e) {
        dispatch({type:SIGNUP_ERROR})
    }
    
}