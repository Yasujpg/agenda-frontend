import { Component } from "react";
import {
    frogTextDesc,
    frogTextDist,
    frogTextComp,
    frogTextTox1,
    frogTextTox2,
    frogTextFuente
} from "../../data/data.js";

export default class Text extends Component {

    render() {
        return (
            <section className="text-section">
                
                <h2>Descripción</h2>
                <p>{frogTextDesc}</p>

                <h2>Distribución</h2>
                <p>{frogTextDist}</p>

                <h2>Comportamiento</h2>
                <p>{frogTextComp}</p>

                <h2>Toxicidad</h2>
                <p>{frogTextTox1}</p>
                <p>{frogTextTox2}</p>

                <p><em>{frogTextFuente}</em></p>

            </section>
        );
    }
}
