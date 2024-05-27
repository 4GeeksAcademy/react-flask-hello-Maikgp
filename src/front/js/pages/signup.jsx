import React, {useEffect, useState, useContext}from "react";
import { Link, useNavigate } from "react-router-dom";
import { Context } from "../store/appContext";
import "../../styles/signup.css";


const Signup=()=>{
    
    const {store, actions} =useContext(Context);
    
    const navigate = useNavigate();

    
    const[name, setName]= useState("");
	const[email, setEmail]= useState("");
	const[password, setPassword]= useState("")
    

    const handleSubmit = e =>{
		e.preventDefault();

        actions.register_User(name, email, password );
		setName("");
		setEmail("");
		setPassword("");
        setTimeout(() => {
            navigate("/login")
        }, 4000);
    }

    return (
        <div className="signup-container">
            <div className="background1"></div>
            <div className="container">
                <form onSubmit={handleSubmit}>
                    <div className="contenido">
                        <header>
                            <div className="headercontent  mb-5">
                                <h3>SIGN UP</h3>
                                
                            </div>
                        </header>
                        <div className="contenedor"></div>

                        <div className="input-group mb-4 mt-4" id="field">
                            <span className="cuadro1" id="name">
                                
                            </span>
                            <input
                                type="text"
                                
                                placeholder="Name"
                                value={name}
                                onChange={e => setName(e.target.value)}
                            />
                        </div>
                        <div className="input-group mb-4 mt-4" id="field">
                            <span className="cuadro2" id="email">
                                
                            </span>
                            <input
                                type="text"
                                
                                placeholder="E-mail"
                                value={email}
                                onChange={e => setEmail(e.target.value)}
                            />
                        </div>

                        <div className="input-group mb-3 " id="field">
                            <span className="cuadro3" id="password">
                                
                            </span>
                            <input
                                type="password"
                                
                                placeholder="Password"
                                value={password}
                                onChange={e => setPassword(e.target.value)}
                                autoComplete="current-password"
                            />
                        </div>

                        
                        <div className="boton">
                            <button className="btn btn-success" type="submit">
                                Sign Up
                            </button>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default Signup;
