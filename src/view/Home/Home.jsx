import React from "react";
import { Navigate} from "react-router-dom";

const Home = () => {

  
  const shouldRedirect = true;
  return <>{shouldRedirect && <Navigate replace to="/login" />}</>;
};

export default Home;
