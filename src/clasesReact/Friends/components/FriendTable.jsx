export default FriendTable;

function FriendTable({ friends }) {


  
  return(
    <table className="table table-striped table-bordered bg-primary text-white">
      <thead>
        <tr>
          <th>ID</th>
          <th>Name</th>
          <th>Email</th>
          <th>Tel</th>
        </tr>
      </thead>


       {/* la lista para cada uno */}
      <tbody>
        {friends.map(friend => (
          <tr key={friend.id}>
            <td>{friend.id}</td>
            <td>{friend.name}</td>
            <td>{friend.email}</td>
            <td>{friend.phone}</td>
          </tr>

        ))}

      </tbody>

    </table>
  );
}