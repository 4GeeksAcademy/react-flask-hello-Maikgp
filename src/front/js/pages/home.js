import React, { useContext } from "react";
import { Context } from "../store/appContext";
import "../../styles/home.css";
import { Link } from "react-router-dom";

export const Home = () => {
    const { store, actions } = useContext(Context);

    return (
        <div className="text-center">
            <h1 className="Juju" style={{ position: "absolute", top: "50px", left: "22%", transform: "translateX(-70%)" }}>Jujutsu Kaisen</h1>
            <p>
                <img src="https://wallpapers.com/images/hd/gojo-satoru-and-night-scene-k9iiafgr6qy0e0ej.jpg"
                    style={{ width: "100vw", height: "100vh", objectFit: "cover" }}
                />
            </p>
            <div className="buttons">
                <Link to={"/signup"}>
                    <button className="btn btn-success">SignUp</button>
                </Link>
                <div className="separator">
                    <span></span>
                </div>
                <Link to={"/login"}>
                    <button className="btn btn-success">LogIn</button>
                </Link>
            </div>
        </div>
    );
};
