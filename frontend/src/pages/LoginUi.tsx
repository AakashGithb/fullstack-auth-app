import { useForm } from "react-hook-form"
import { logininputtype, loginschema } from "../slices/loginschema"
import { zodResolver } from "@hookform/resolvers/zod"
import { uselogin } from "../slices/authslice"
import { useEffect, useState } from "react"


const LoginUi = () => {
    const { register, handleSubmit, formState: { errors },watch } = useForm<logininputtype>({
        resolver: zodResolver(loginschema),
       
    })

    const loginmutation = uselogin()

    const  [message,setmessage]=useState('')

    const formdatasubmit = (data: logininputtype) => {
        loginmutation.mutate(data,{
                onSuccess: (res) => {
                   setmessage(res.message)
               
                   
                   console.log(message);
                   
                },
                onError: (error: any) => {


                    console.log(error);

                    if(error.response?.data?.message){

                        setmessage(error.response.data.message)
                      
                    }
                    else{
                        setmessage("something went wrong")
                    }
                  

                }})
            }

            const email=watch('email')
            const password=watch('password')


            useEffect(()=>{
                setmessage('')
            },[email,password])
            
    return (
        <>
            <form action="" method="post" onSubmit={handleSubmit(formdatasubmit)} style={{
                display: "flex", flexDirection: "column", gap: "2px" , marginBottom:"100%"}}>
                <h1>Login</h1>
                <input type="text" {...register("email")} placeholder="email"  />
                {errors.email && <p>{errors.email.message}</p>}

                <input type="text" {...register("password")} placeholder="password" />
                {errors.password && <p>{errors.password.message}</p>}

                <input type="submit" value="submit" />

                {message && <p>{message}</p>}
            </form>


        </>
    )
}

export default LoginUi
