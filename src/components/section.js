import React from "react";
import Cards from "./cards";

function Section(props) {
    return (
        <section className="content">
            <Cards header="Projeto 01" content="Lista de Tarefas"/>
            <Cards header="Projeto 02" content="Lista de Tarefas"/>
            <Cards header="Projeto 03" content="Lista de Tarefas"/>
            <Cards header="Projeto 04" content="Lista de Tarefas"/>
            <Cards header="Projeto 05" content="Lista de Tarefas"/>
            <Cards header="Projeto 06" content="Lista de Tarefas"/>
            <Cards header="Projeto 07" content="Lista de Tarefas"/>
        </section>
    )
}

export default Section;