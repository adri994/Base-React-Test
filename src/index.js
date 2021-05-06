import React from "react";
//Para renderizar cosas en el dom
import ReactDOM from 'react-dom';
import CounterApp from "./CounterApp";
import PrimeraApp from "./PrimeraApp";


//Para darle estilos
import "./index.css"



//identificar la etiqueta del html
const divRoot = document.querySelector("#root");

//Para poder renderizar tenemos que usar el render
//Tiene 2 parametros uno lo que queremos renderizar del componente donde lo vas a colocar
ReactDOM.render( <CounterApp value={5} />,divRoot );
//ReactDOM.render( <PrimeraApp value="Hola mundo" />,divRoot );

