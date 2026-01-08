import FriendForm from "./FriendForm";
import FriendTable from "./FriendTable";
import FriendCard from "./FriendCard";
import { useState } from "react";

export default Home;
function Home() {

  //funcion para actualizar la lista
  const [friends, setFriends] = useState([]);


  // recibe los datos del nuevo friend y se suma  la lista
  const addFriend = (friendData) => {
    const newFriend = {
      ...friendData,
      id: friends.length + 1
    };

    // se suma el nuevo y no se borran los otros
    setFriends(prev => [...prev, newFriend]);

  }

  return(
    <div className="container mt-4">
      <h1 className="text-center mb-4">Lista de amigos</h1>

      <div className="row">

        <div className="col-12 col-md-4">
          <FriendForm addFriend={addFriend} />
        </div>

        <div className="col-12 col-md-8">
          <FriendTable friends={friends} />
        </div>
      </div>

      <div className="row mt-4">
        {friends.map(friend => (
          <div className="col-12 col-md-4 mb-3" key={friend.id}>
            <FriendCard friend={friend} />
            </div>
        ))}
      </div>
    </div>
  );

}
