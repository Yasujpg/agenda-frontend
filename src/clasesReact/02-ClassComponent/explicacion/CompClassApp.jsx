import React, { Component, Fragment } from 'react';
import Navbar from './components/Navbar/Navbar';
import Section1 from './components/Section1/Section1';
import Section2 from './components/Section2/Section2';


import './compClassApp.css'

export default class ComClassApp extends Component {
    //logica

    styles = {
        color: "red",  
        backgroundColor: "yellow", 
        border:"1px solid black"
    }


    //renderizar jsx
    render(){
        return (
            <div className='comp-class-ppal'>
                <header>
                    <Navbar />
                    <h1 style={this.styles}>Mi primer componente de tipo clase</h1>
                </header>
                <main>
                    <Section1 />
                    <Section2 />
                </main>
            </div>
        )
    }
}