import { Component } from "react";

export default class Navbar extends Component {

    render() {
        return (
            <nav className="navbar">
                <h1>Ranas Flecha</h1>
                <ul>
                    <li>Inicio</li>
                    <li>Especies</li>
                    <li>Cuidados</li>
                    <li>Consejos</li>
                </ul>
            </nav>
        );
    }
}
