import { useMutation } from "@tanstack/react-query"
import { registerinputtype } from "./resgisterShema"
import { registeruser } from "../api/RegisterAuth"


export const useregister=()=>{
   return useMutation({
    mutationFn:(formdata:registerinputtype)=>registeruser(formdata)
   })
}


