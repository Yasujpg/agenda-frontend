import { Minion } from "./Minion";
import "./Minions.css";

//improtar imagenes de minions
import minion1 from "./assets/minion1.jpg";
import minion2 from "./assets/minion2.jpg";
import minion3 from "./assets/minion3.jpg";


//mostrar varios minions
export function EjerMinion(){

  
  return (
    <div className="app-container">
      <h1>Ejercicio Minions</h1>

      <div className="minions-grid">
        <Minion name="Bob" img={minion1} />
        <Minion name="Stuart" img={minion2} />
        <Minion name="Kevin" img={minion3} />


      </div>
    </div>
  )
}