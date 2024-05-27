import React, { useEffect, useState, useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import "../../styles/login.css";
import { Context } from "../store/appContext";

const Login = () => {
    const { store, actions } = useContext(Context);

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("")

    const navigate = useNavigate();


    const handleSubmit = e => {
        e.preventDefault();
        actions.login(email, password);
        setEmail(" ");
        setPassword();
    }
    useEffect(() => {
        if (store.isLoggedIn === true) {
            navigate('/private')
        }
    }, [store.isLoggedIn])

    return (
        <div className="login-container">
            <div className="background"></div>
            <div className="container">
                <form onSubmit={handleSubmit}>
                    <div className="content">
                        <header>LOGIN</header>
                        <div className="input-group mb-4 mt-4" id="field">
                            <span className="rectangulo1" id="email">

                            </span>
                            <input
                                type="text"

                                placeholder="E-mail"
                                value={email}
                                onChange={e => setEmail(e.target.value)}
                            />
                        </div>
                        <div className="input-group mb-3 " id="field">
                            <span className="rectangulo2" id="password">

                            </span>
                            <input
                                type="password"

                                placeholder="Password"
                                value={password}
                                onChange={e => setPassword(e.target.value)}
                            />
                        </div>
                        <button className="btn btn-success mb-5 " type="submit">
                            LOGIN
                        </button>
                        <div>

                            <Link to="/signup">
                                <button className="redirect btn" type="submit">
                                    Go to SignUp
                                </button>
                            </Link>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default Login;
