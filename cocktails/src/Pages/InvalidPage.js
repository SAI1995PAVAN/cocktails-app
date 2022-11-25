import React from "react";
import { Link } from "react-router-dom";

const InvalidPage = () => {
  return (
    <section
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      <Link to="/">
        <button className="details-button">Go to Home</button>
      </Link>
      <h2>Invalid Route</h2>
    </section>
  );
};

export default InvalidPage;
