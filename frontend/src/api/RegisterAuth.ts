import axios from "axios";
import { registerinputtype} from "../slices/resgisterShema";


export const registeruser=async (registerdata:registerinputtype)=>{
const result=await axios.post("http://localhost:3000/api/users/register",registerdata)
console.log(result)
return result.data
}