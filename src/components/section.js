import React from "react";
import Cards from "./cards";

function Section(props) {
    return (
        <section className="content">
            <Cards header="Projeto 01" content="Lista de Tarefas"/>
        </section>
    )
}

export default Section;