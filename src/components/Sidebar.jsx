import React from "react";
import { Link } from "react-router-dom";

const Sidebar = ({ genres }) => {
  return (
    <>
      <div className="bg-secondary ">
        <ul className="nav justify-content-center">
          {genres.map((data, i) => (
            <li className="nav-item" key={i}>
              <Link to={`/${data.id}`}>
                <p className="nav-link active text-light" aria-current="page">
                  {data.name}
                </p>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};

export default Sidebar;
