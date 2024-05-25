import React, { useContext } from "react";
import { Context } from "../store/appContext";
import "../../styles/home.css";
import { Link } from "react-router-dom";

export const Home = () => {
    const { store, actions } = useContext(Context);

    return (
        <div className="text-center">
            <p>
                <h1 style={{ position: "absolute", top: "70%", left: "50%", transform: "translate(-50%, -50%)", color: "white" }}> REALIZADO POR JOSE LUIS</h1>
                <img src="https://images.pexels.com/photos/1714208/pexels-photo-1714208.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                    style={{ width: "100vw", height: "100vh", objectFit: "cover" }}
                />
            </p>
            <div className="buttons">
                <Link to={"/signup"}>
                    <button className="btn btn-success">Sign Up</button>
                </Link>
                <div className="separator">/</div>
                <Link to={"/login"}>
                    <button className="btn btn-success">LogIn</button>
                </Link>
            </div>

        </div>
    );
};