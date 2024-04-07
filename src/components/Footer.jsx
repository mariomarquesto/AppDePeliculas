import React from "react";

const Footer = () => {
  <footer></footer>;
  return (
    <>
      <div className="bg-dark text-center text-white">
        <div className="container p-4 pb-0">
          <section className="mb-4">
                   
            <a
              className="btn btn-outline-light btn-floating m-1"
              href="https://www.google.com/"
              role="button"
            >
              <i className="fab fa-google"></i>
            </a>

           

            <a
              className="btn btn-outline-light btn-floating m-1"
              href="https://www.linkedin.com/in/mario-marquesto/"
              role="button"
            >
              <i className="fab fa-linkedin-in"></i>
            </a>

            <a
              className="btn btn-outline-light btn-floating m-1"
              href="https://github.com/mariomarquesto"
              role="button"
            >
              <i className="fab fa-github"></i>
            </a>
          </section>
        </div>

        <div
          className="text-center p-3"
          style={{ backgroundColor: "rgba(0, 0, 0, 0.2)" }}
        >
          © 2024 Copyright: 
          
        </div>
      </div>
    </>
  );
};

export default Footer;
