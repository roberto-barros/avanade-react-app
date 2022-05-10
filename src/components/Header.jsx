import React, { useEffect, useState } from "react";
import '../App.css'
import logo from '../logo.svg'

function Header(props) {

    // Estado é informação armazenada
    // As informações são imutáveis
    // getter & setter
    const [company, setCompany] = useState(props.options.empresa || "Nenhuma empresa informada");
    const [name, setName] = useState(props.options.nome || "Nenhum nome informado");
    const [site, setSite] = useState(props.options.site || "Nenhum site informado");

    useEffect(()=>{
        //Hook executa automaticamente, toda vez que a página é carregada - componentDidMount()
        //Executa automaticamente toda vez que um estado é alterado
        setCompany(company.toUpperCase());
    }, [company]);



    return (
        <header className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
            <p>{props.title}</p>
            <a
                className={props.options.className}
                href={props.options.site}
                target="_blank"
                rel="noopener noreferrer"
            >
               {company} - {name}
            </a>
            <button onClick={(e) => setCompany("Avanade")}>{`Mudando o nome de: ${company}`}</button>
        </header>
    );
}

export default Header;