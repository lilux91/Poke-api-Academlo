import React from "react";
import { useSelector } from "react-redux";
import { Navigate, Outlet } from "react-router-dom";

const ProtectedRoutes = () => {
    const userName = useSelector((state) => state.userNAme);
    //si hay info en username
    if (userName) {
    return <Outlet />;
    } else {
        //navego al home
    return <Navigate to="/" />;
    }

  //console.log(userName)
}

export default ProtectedRoutes;
