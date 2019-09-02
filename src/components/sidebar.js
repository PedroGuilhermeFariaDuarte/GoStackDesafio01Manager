import React from "react";
import add from "../assets/add.png";
import trash from "../assets/trash.png";
import search from "../assets/search.png";
// import rotate from "../assets/rotate.png";
import list from "../assets/list.png";

function Sidebar (props) {
    return (
        <nav className="sidebar">
            {/* <ul> */}
                <li>
                    <span>
                        <img src={list} alt=""/>
                    </span>
                    <span>Listar Projetos</span>
                </li>
                <li>
                    <span>
                        <img src={add} alt=""/>
                    </span>
                    <span>Criar Projetos</span>
                </li>
                <li>
                    <span>
                        <img src={search} alt=""/>
                    </span>
                    <span>Propocuar Projetos</span>
                </li>
                <li>
                    <span>
                        <img src={trash} alt=""/>
                    </span>
                    <span>Excluir Projetos</span>
                </li>
            {/* </ul> */}
        </nav>
    )
}


export default Sidebar;