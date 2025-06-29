import { Link } from "react-router-dom"

const Nav = () => {
  return (
    <div>
        
      <ul style={{paddingBottom:'100%', display:"flex", gap:"50px",textDecoration:'none', listStyle:"none"}}>
        <Link to={"register"}>Register</Link>
        <Link to={"login"}>Login</Link>
       
      </ul>
        

  
    </div>

  )
}

export default Nav
