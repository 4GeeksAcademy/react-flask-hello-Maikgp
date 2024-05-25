import React, { useEffect, useState, useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Context } from "../store/appContext";
import "../../styles/signup.css";


const Signup = () => {
    /* Esta linea trae el store y actions en flux */
    const { store, actions } = useContext(Context);
    /* ------------------------------------------- */
    /* Esto es para no hacer un Link si no que esto se activa automaticamente por codigo */
    const navigate = useNavigate();

    /* Estas lineas creamos los useState de los inputs */
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("")
    /* ------------------------------------------------- */

    const handleSubmit = e => {
        e.preventDefault();

        actions.register_User(name, email, password);
        setName("");
        setEmail("");
        setPassword("");
        setTimeout(() => {
            navigate("/login")
        }, 4000);
    }

    return (

        <div className="container">
            <div className="contenido">
                <header>
                    <div className="headercontent  mb-5">
                        <h3>SIGN UP</h3>
                        <h6>please sign up to continue</h6>
                    </div>
                </header>
                <div className="linea-divisoria"></div>

                <form onSubmit={handleSubmit}>
                    <div className="input-group mb-4 mt-4" id="field">
                        <span className="input-group-text span-name" id="name">
                            <i class="bi bi-person"></i>
                        </span>
                        <input type="text"
                            className="inputs form-control"
                            placeholder="Name"
                            value={name}
                            onChange={e => setName(e.target.value)}
                        />
                    </div>
                    <div className="input-group mb-4 mt-4" id="field">
                        <span className="input-group-text span-email" id="email">
                            <i className="bi bi-envelope-at"></i>
                        </span>
                        <input type="text"
                            className="inputs form-control"
                            placeholder="E-mail"
                            value={email}
                            onChange={e => setEmail(e.target.value)}
                        />
                    </div>

                    <div className="input-group mb-3 " id="field">
                        <span className="input-group-text span-pass" id="password">
                            <i className="bi bi-lock-fill"></i>
                        </span>
                        <input type="password"
                            className="inputs form-control"
                            placeholder="Password"
                            value={password}
                            onChange={e => setPassword(e.target.value)}
                            autoComplete="current-password"
                        />
                    </div>

                    <div className="fluid-check">
                        <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                        <label className="form-check-label" for="flexCheckDefault">
                            <p> I agree to the terms of User</p>
                        </label>
                    </div>
                    <div className="boton">
                        <button className="btn btn-success"
                            type="submit">Sign Up</button>
                    </div>

                </form>

            </div>
        </div>

    )
}
export default Signup;