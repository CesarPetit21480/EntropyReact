import React from "react";
import { useParams } from "react-router-dom";
import NavBar from "../../component/NavBar/NavBar";
import Panel from "../../component/Panel/Panel";



const Home = () => {

  const { tipo } = useParams();

  return (

    <div>
      <NavBar />
      <Panel  tipo={tipo} />

    </div>
  );
};

export default Home;
