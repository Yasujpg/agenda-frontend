import { Component } from "react";
import { frogs } from "../../data/data";

export default class Cards extends Component {

    render() {
        return (
            <section className="cards-section">

                {frogs.map((frog, i) => (
                    <div className="card" key={i}>
                        <img src={`/assets/frog${i+1}.jpg`} alt={frog.nombre} />

                        <h3>{frog.nombre}</h3>

                        <p><b>Hábitat:</b> {frog.habitat}</p>
                        <p><b>Tamaño machos:</b> {frog.tam_machos}</p>
                        <p><b>Tamaño hembras:</b> {frog.tam_hembras}</p>
                    </div>
                ))}

            </section>
        );
    }
}
