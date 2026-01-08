import { useState } from "react";
import "./emoji.css";

export const Emoji = () => {
  const emojis = ["😎", "🤓"];
  const [list, setList] = useState([]);

  const addEmoji = (emoji) => {
    if (list.length < 6){
      setList([...list, emoji]);
    }
  };


  const removeLast = () => {
    setList(list.slice(0, -1));
  };


  return (
    <div className="emoji-container">
      <h1>Contador de estado animico</h1>
      <div className="emoji-panel">
        {list.map((item, index) => (
          <span key={index} className="emoji-item">
            {item}
          </span>
        ))}
      </div>

      <div className="buttons">
        <button onClick={removeLast}>Borrar</button>
      </div>



      <div className="emoji-buttons">
        {emojis.map((emoji, index) =>(
          <button key={index} onClick={() => addEmoji(emoji)}>{emoji}
          </button>
        ))}

      </div>
    </div>
  );
};