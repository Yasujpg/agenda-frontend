import { Anuncio } from './components/Anuncio';
import { Cartel } from './components/Cartel'

export const PropsApp = () => {
  let numero = 1000;
  let nombre = "Santi";
  let precio = 1300
  return (
    <div>
      <h1>Props en React</h1>
      <hr />
      <p>Es la forma que tenemos de pasar datos entre componentes</p>
      <Cartel data={numero} nombre={nombre}/>
      <Anuncio />
    </div>
  )
}