import Card from "./components/Card";

const App = () => {
  const users = [
    {
      name: "Alice Johnson",
      age: 28,
      city: "New York",
      profession: "Software Engineer",
      profile_photo: "https://example.com/profiles/alice_johnson.jpg",
    },
    {
      name: "Michael Smith",
      age: 35,
      city: "San Francisco",
      profession: "Designer",
      profile_photo: "https://example.com/profiles/michael_smith.jpg",
    },
    {
      name: "Sophia Williams",
      age: 26,
      city: "Chicago",
      profession: "Software Engineer",
      profile_photo: "https://example.com/profiles/sophia_williams.jpg",
    },
    {
      name: "David Brown",
      age: 31,
      city: "Los Angeles",
      profession: "Designer",
      profile_photo: "https://example.com/profiles/david_brown.jpg",
    },
    {
      name: "Emily Davis",
      age: 29,
      city: "Seattle",
      profession: "Software Engineer",
      profile_photo: "https://example.com/profiles/emily_davis.jpg",
    },
  ];

  return (
    <div className="w-full h-screen bg-zinc-900 p-20 flex gap-10">
      {users.map((elem, idx) => {
        return (
          <Card
            key={idx}
            name={elem.name}
            age={elem.age}
            city={elem.city}
            profession={elem.profession}
            img={elem.profile_photo}
          />
        );
      })}
    </div>
  );
};

export default App;
