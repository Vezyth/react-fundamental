import React from "react"
import Navigation from "./navigation.layouts"

const Mainlayouts = ({children}) =>{
    return (
        <React.Fragment>
            <Navigation/>
            {children}
        </React.Fragment>
    )
}

export default Mainlayouts