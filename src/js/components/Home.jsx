import React from "react";
import Contador from "./Contador.jsx";

const Home = ({ seconds }) => {
    return (
        <div className="text-center">
            <Contador seconds={seconds} />
        </div>
    );
};

export default Home;

