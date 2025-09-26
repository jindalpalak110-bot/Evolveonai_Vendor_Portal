import { Navigate, Outlet } from "react-router-dom";

const ProtectedRoutes = () => {
    const accessToken = "xyz";
    return accessToken ? <Outlet/> : <Navigate to="/"/>
}

export default ProtectedRoutes;