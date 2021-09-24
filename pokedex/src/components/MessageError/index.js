import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faExclamationTriangle } from "@fortawesome/free-solid-svg-icons";
import "./Error.css";

const Message = () => {
  return (
    <div className="error">
      <p>
        {" "}
        <FontAwesomeIcon icon={faExclamationTriangle} /> Ocurrió un error
      </p>
    </div>
  );
};

export default Message;
