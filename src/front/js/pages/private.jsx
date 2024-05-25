import React, { useContext } from "react";
import { Context } from "../store/appContext";
import { Link } from "react-router-dom";

const Private = () => {
    const { store, actions } = useContext(Context);
    return (
        <div>
            <h1>te has loggeado exitosamente</h1>
            <Link to={"/"}>
                {store.isLoggedIn ? (
                    <button onClick={() => actions.setLogout()}>LogOut</button>
                ) : (
                    <p></p>
                )}
            </Link>
        </div>
    )
}
export default Private;