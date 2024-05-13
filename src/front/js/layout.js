import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { BackendURL } from "./component/backendURL.js";
import Navbar from './component/navbar.jsx';
import Footer from './component/footer.jsx';
import ScrollToTop from "./component/scrollToTop.js";

import { Home } from "./pages/Home.jsx";
import { Login } from "./pages/Login.jsx";
import { Profile } from "./pages/Profile.jsx";
import Signup from './pages/Signup.jsx';
import { Single } from "./pages/Single.jsx";
import injectContext from "./store/appContext.js";


//create your first component
const Layout = () => {
    //the basename is used when your project is published in a subdirectory and not in the root of the domain
    // you can set the basename on the .env file located at the root of this project, E.g: BASENAME=/react-hello-webapp/
    const basename = process.env.BASENAME || "";

    if(!process.env.BACKEND_URL || process.env.BACKEND_URL == "") return <BackendURL/ >;

    return (
        <div>
            <BrowserRouter basename={basename}>
                <ScrollToTop>
                    <Navbar />
                    <Routes>
                        <Route element={<Home />} path="/" />
                        <Route element={<Login />} path="/login" />
                        <Route element={<Profile />} path="/private" />
                        <Route element={<Signup />} path="/signup" />
                        <Route element={<Single />} path="/single/:theid" />
                        <Route element={<h1 className="text-center m-2">Not found!</h1>} path="*" />
                    </Routes>
                    <Footer />
                </ScrollToTop>
            </BrowserRouter>
        </div>
    );
};

export default injectContext(Layout);