import React from "react";
import Sidebar from "../components/sidebar";
import Section from "../components/section";

function Container(props) {
    return (
        <div className="container">
            <Sidebar/>
            <Section message="Listagem Geral"/>
        </div>
    )
}

export default Container;