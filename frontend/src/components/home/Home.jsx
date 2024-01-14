import React from "react";
import "./home.css";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="home d-flex justify-content-center align-items-center">
      <div className="container d-flex justify-content-center align-items-center flex-column ">
        <h1 className="text-center">
        Elevate productivity and organization with our Todo App
        </h1>
        <p>
        Experience focus, organization, and calmness with the world's #1 task manager app TaskTrak.
        </p>
        <Link to={"/todo"}><button class="home-btn p-2 px-4">Make Todo List</button></Link>
      </div>
    </div>
  );
};

export default Home;
