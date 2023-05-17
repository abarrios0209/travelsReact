import {Routes, Route, Navigate} from "react-router-dom"
import { Login } from "../pages/Login"
import {TravelsRouter} from "../components/routes/TravelsRouter"


export const LoginRouter = () => {
  return (
    <>
        <Routes>
            <Route path="login" element={<Login />} /> 
            <Route path="/*" element={<TravelsRouter/>} /> 
            <Route path="/" element={<Navigate to="/login" />}/> 
        </Routes>
    </>
  )
}
