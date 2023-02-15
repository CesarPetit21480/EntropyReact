import React from 'react'
import { GlobalProvider } from "../../context/GlobalContext";
import { Navigate } from "react-router-dom";

const Principal = () => {const { userLog } = GlobalProvider();


return <>{
  !userLog ? <Navigate replace to="/login" /> : <Navigate replace to="/home" />
  }</>;


}

export default Principal