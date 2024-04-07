import React from "react";
import Card from "../commons/Card";

const Populars = ({ populars }) => {
  return (
    <div className="container text-center">
      <h1 className="pt-5" style={{ color: "#4CAF50" }}>Populares</h1>
      <div className="row">
        {populars.map((data) => (
          <Card data={data} key={data.id} />
        ))}
      </div>
    </div>
  );
};

export default Populars;
