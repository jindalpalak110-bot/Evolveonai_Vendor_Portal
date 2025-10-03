import { useSelector } from "react-redux";
import { Navigate, Outlet } from "react-router-dom";
import type { RootState } from "../redux/store";

const ProtectedRoutes = () => {
    const {token} = useSelector((state: RootState) => state?.user);
    return token ? <Outlet/> : <Navigate to="/"/>
}

export default ProtectedRoutes;