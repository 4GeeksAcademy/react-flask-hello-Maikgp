import React, { useContext } from "react";
import { Context } from "../store/appContext";
import { Link } from "react-router-dom";

const Private = () => {
    const { store, actions } = useContext(Context);
    return (
        <div style={{ backgroundImage: "url(https://mx.web.img3.acsta.net/r_1280_720/img/7f/d2/7fd2ff3eb90fd8f202a890ce5b952500.jpg)", backgroundSize: "cover", minHeight: "100vh", display: "flex", justifyContent: "center", alignItems: "center" }}>
            <div>
                <h1>You have successfully logged in</h1>
                <Link to={"/"}>
                    {store.isLoggedIn ? (
                        <button onClick={() => actions.setLogout()}>Log Out</button>
                    ) : (
                        <p></p>
                    )}
                </Link>
            </div>
        </div>
    )
}
export default Private;
