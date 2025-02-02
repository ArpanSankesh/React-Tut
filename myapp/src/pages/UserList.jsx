/* eslint-disable react/jsx-key */

const UserList = () => {

let users = [
    {
      name: "Arpan Sankesh",
      email: "arpan@example.com",
      rollNo: "284"
    },
    {
      name: "Rahul Sharma",
      email: "rahul@example.com",
      rollNo: "285"
    },
    {
      name: "Priya Verma",
      email: "priya@example.com",
      rollNo: "286"
    },
    {
      name: "Neha Gupta",
      email: "neha@example.com",
      rollNo: "287"
    },
    {
      name: "Amit Kumar",
      email: "amit@example.com",
      rollNo: "288"
    }
  ];
  
  return (
    <div>
      {users.map((user, index) => (
        <div key={index}>
          <h1>{user.name}</h1>
          <h2>{user.email}</h2>
          <h3>{user.rollNo}</h3>
        </div>
      ))}
    </div>
  )
}

export default UserList