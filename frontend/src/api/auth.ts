import axios from "axios";
import { logininputtype } from "../slices/loginschema";

export const loginuser = async (logindata: logininputtype) => {
    const result = await axios.post("http://localhost:3000/api/users/login", logindata)
    console.log(result.data)
    return result.data
}