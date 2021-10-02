import * as React from "react";
import Header from "./header";
import Footer from "./footer";
const  Layout = (props) =>{
    return(
        <>
        <Header headerRef={props?.headerRef}/>
        {props.children}
        <Footer />
        </>
    )
}
export default Layout;