import React from "react";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";
import { GTMProvider } from "@elgorditosalsero/react-gtm-hook";
import ReactGA from "react-ga4";

const AppLayout = ({ auth, children }) => {
    const gtmParams = {
        id: "GTM-KH9XT38H",
        dataLayer: {
            "Conversion ID": "16551013734",
            "Conversion label": "rUbyCJepiKwZEObakdQ9",
        },
    };

    ReactGA.initialize("G-1TMH444J4W");

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
