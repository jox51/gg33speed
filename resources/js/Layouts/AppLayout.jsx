import React from "react";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";

const AppLayout = ({ auth, children }) => {
    return (
        <>
            <Navbar auth={auth} />
            <main>{children}</main>
            <Footer />
        </>
    );
};

export default AppLayout;
