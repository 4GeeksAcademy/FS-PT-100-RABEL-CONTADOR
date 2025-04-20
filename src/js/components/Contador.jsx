import React from "react";
import PropTypes from "prop-types";

const Contador = ({ seconds }) => {
    const digits = String(seconds).padStart(6, "0").split("");

    return (
        <div className="bg-dark text-white d-flex justify-content-center gap-3 p-3 rounded fs-3 mt-4">
            <div><i className="fa-solid fa-clock"></i></div>
            {digits.map((digit, index) => (
                <div key={index} className="bg-secondary px-3 rounded">
                    {digit}
                </div>
            ))}
        </div>
    );
};

Contador.propTypes = {
    seconds: PropTypes.number.isRequired,
};

export default Contador;
