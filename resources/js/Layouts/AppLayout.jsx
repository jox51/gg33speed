import React from "react";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";
import { GTMProvider } from "@elgorditosalsero/react-gtm-hook";

const AppLayout = ({ auth, children }) => {
    const gtmParams = {
        id: "GTM-KH9XT38H",
        dataLayer: {
            "Conversion ID": "16551013734",
            "Conversion label": "rUbyCJepiKwZEObakdQ9",
        },
    };

    return (
        <>
            <GTMProvider state={gtmParams}>
                <div className="flex flex-col items-center max-w-full justify-center px-20 bg-slate-50 dark:bg-slate-700 gap-4">
                    <Navbar auth={auth} />
                    <main>{children}</main>
                    <Footer />
                </div>
            </GTMProvider>
        </>
    );
};

export default AppLayout;
