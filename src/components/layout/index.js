import * as React from "react";
import Header from "./header";
const  Layout = (props) =>{
    return(
        <>
        <Header headerRef={props?.headerRef} setNavShow={props?.setNavShow}/>
        {props.children}
        </>
    )
}
export default Layout;