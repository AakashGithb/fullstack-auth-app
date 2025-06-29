
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import LoginUi from './pages/LoginUi'
import RegisterUi from './pages/RegisterUi'
import Nav from './pages/Nav'
import Home from './pages/Home'

function App() {


  return (
    <>
      {/* <LoginUi ></LoginUi>
 
   <h1>register</h1>
   <RegisterUi></RegisterUi> */}
      <BrowserRouter>

        <Nav/>
        <Routes>
          <Route path='/' element={<Home></Home>}></Route>
          <Route element={<RegisterUi></RegisterUi>} path='register'></Route>
          <Route element={<LoginUi></LoginUi>} path='login'></Route>

        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
