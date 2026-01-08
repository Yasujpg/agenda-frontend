
export const Cartel = (patata) => {
    console.log("props", patata);
    
  return (
    <div>
        <h2>Cartel</h2>
        <p>el numero es : {patata.data}  </p>
    </div>
  )
}