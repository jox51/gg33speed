import React from "react";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";
import { GTMProvider } from "@elgorditosalsero/react-gtm-hook";

const AppLayout = ({ auth, children }) => {
    return (
        <>
            <GTMProvider state={gtmParams}>
                <Navbar auth={auth} />
                <main>{children}</main>
                <Footer />
            </GTMProvider>
        </>
    );
};

export default AppLayout;
