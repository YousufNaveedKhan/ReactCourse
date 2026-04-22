import { useEffect, useState } from "react";
function Users() {
  // State for users data
  const [users, setUsers] = useState([]);

  // Loading state
  const [loading, setLoading] = useState(true);

  // Error state
  const [error, setError] = useState(null);

  // Search state
  const [search, setSearch] = useState("");

  // useEffect (API Call)
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((res) => res.json())
      .then((data) => {
        setUsers(data);
        setLoading(false);
      })
      .catch(() => {
        setError("Something went wrong");
        setLoading(false);
      });
  }, []);

  if (loading) {
    return <h2 style={{ textAlign: "center" }}>Loading...</h2>;
  }
  if (error) {
    return <h2 style={{ textAlign: "center" }}>{error}</h2>;
  }

  return (
    <>
      <h1>Users List</h1>

      <input
        type="text"
        placeholder="Enter username..." value={search}
        onChange={(e) => setSearch(e.target.value)}
      />

      {/* Users List */}
      {users.filter(user =>
        user.name.toLowerCase().includes(search.toLowerCase())
      )
      .map(user => (
        <div key={user.id}>
            <h3>{user.name}</h3>
            <p>{user.email}</p>
            <p>{user.phone}</p>
        </div>
      ))
      }
    </>
  );
}
export default Users;
