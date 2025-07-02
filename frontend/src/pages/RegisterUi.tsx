import { useForm } from "react-hook-form"
import { registerinputtype, registershema } from "../slices/resgisterShema"
import { zodResolver } from "@hookform/resolvers/zod"
import { useregister } from "../slices/registerslice"
import { useState } from "react"


const RegisterUi = () => {

  const { register, handleSubmit, formState: { errors } } = useForm<registerinputtype>({
    resolver: zodResolver(registershema)
  })

  const registermutation = useregister()
  const [message, setmessage] = useState('')

  const formsubmitdata = (data: registerinputtype) => {
    registermutation.mutate(data, {
      onSuccess: (res) => {
        setmessage(res.message)
      },
      onError: (err: any) => {
        console.log(err);
        setmessage(err.response.data.message)

      }
    })
  }
  return (
    <div>
<h1>Register</h1>
      <form action="" onSubmit={handleSubmit(formsubmitdata)} method="post" style={{ display: "flex", flexDirection: "column", marginBottom:"100%" }}>
        <input type="text" id="" placeholder="email" {...register('email')} />
        {errors.email && <p>{errors.email.message}</p>}



        <input type="text" id="" placeholder="password"{...register('password')} />
        {errors.password && <p>{errors.password.message}</p>}
        <input type="submit" value="submit" />
        {message &&  <p>{message}</p>}
      </form>

    </div>
  )
}

export default RegisterUi
