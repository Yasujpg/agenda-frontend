import { useState } from "react";


export default FriendForm;
function FriendForm({ addFriend }) {


  /* se guarda lo que se escribe en el formulario */
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");


  const handleSubmit = (e) => {
  e.preventDefault();

   addFriend({

    name,
    email,
    phone

   });

  /* vaciar despues de guardar */
  setName("");
  setEmail("");
  setPhone("");

  };


return(
  <form
  onSubmit={handleSubmit}

  className="p-3 rounded bg-success text-white">

    <div className="mb-3">

      <label className="form-label">Nombre</label>

      <input
        type="text"
        className="form-control"
        placeholder="Enter Name"
        value={name}
        onChange={(e) => setName(e.target.value)}/>
    </div>


    <div className="mb-3">

      <label className="form-label">Email</label>

      <input
        type="email"
        className="form-control"
        placeholder="Enter Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}/>
    </div>


    <div className="mb-3">

      <label className="form-label">Phone</label>

      <input
        type="text"
        className="form-control"
        placeholder="Enter Phone"
        value={phone}
        onChange={(e) => setPhone(e.target.value)}/>
    </div>

    <button className="btn btn-light w-100" type="submit">
      Submit
    </button>
    </form>

);

}
