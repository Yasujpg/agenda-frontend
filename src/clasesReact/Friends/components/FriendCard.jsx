export default FriendCard;

import blair from "./assets/blair.jpg";
import carter from "./assets/carter.jpg";
import chuck from "./assets/chuck.jpg";

const photos = [blair, carter, chuck];


/* recibe el amigo  desde Home */
function FriendCard({ friend }) {


  return(
    <div className="card shadow">
      <img
      src={photos[(friend.id) % photos.length]}
      className="card-img-top"/>

      <div className="card-body">

        <h3 className="card-title">{friend.name}</h3>
        <p className="card-text">
          <strong>Email:</strong> {friend.email} 
          <strong>Phone:</strong> {friend.phone}
        </p>

        <a className="btn btn-primary">Go somewhere</a>
      </div>
    </div>
  );

}