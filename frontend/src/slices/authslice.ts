import { useMutation } from "@tanstack/react-query";
import { loginuser } from "../api/auth";
import { logininputtype } from "./loginschema";



export const uselogin=()=>{
  return  useMutation({
        mutationFn:(formdata:logininputtype)=>loginuser(formdata),
     
    })
}