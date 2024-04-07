import React, { useState } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post("http://localhost:3001/api/users/login", {
        email,
        password,
      });
      const userData = {
        name: response.data.name,
        id: response.data.id,
        email: response.data.email,
        lastname: response.data.lastname,
      };
      localStorage.setItem("token", response.data.token);
      localStorage.setItem("user", JSON.stringify(userData));
      navigate("/");
    } catch (error) {
      alert("Usuario no existe");
    }
  };

  const loginWithGoogle = () => {
    alert("En proceso");
  };

  return (
    <>
      <img
        src="https://blogdesuperheroes.es/imagen-noti/bds_first-class_poster-091.jpg"
        style={{ maxWidth: "100%", height: "auto" }}
        alt=""
      />
      <div className="container p-5">
        <div className="row justify-content-center">
          <div className="col-sm-8 col-md-6 col-lg-4">
            <form onSubmit={handleSubmit}>
              <div className="mb-3">
                <label htmlFor="staticEmail2" className="form-label">
                  Email
                </label>
                <input
                  type="email"
                  className="form-control"
                  id="staticEmail2"
                  value={email}
                  onChange={handleEmailChange}
                />
              </div>
              <div className="mb-3">
                <label htmlFor="inputPassword2" className="form-label">
                  Password
                </label>
                <input
                  type="password"
                  className="form-control"
                  id="inputPassword2"
                  value={password}
                  onChange={handlePasswordChange}
                />
              </div>
              <div className="mb-3">
                <Link to="/register">Registrar</Link>
              </div>
              <div className="d-grid gap-2 mb-3">
                <button type="submit" className="btn btn-primary">
                  Iniciar sesión
                </button>
                <button
                  type="button"
                  className="btn btn-primary"
                  onClick={loginWithGoogle}
                >
                  Iniciar sesión con Google
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
