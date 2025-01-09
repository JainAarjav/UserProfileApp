import  { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { fetchAllUsers, User } from "../data-provider/dataprovider";

const UserProfile= () => {
  const [users, setUsers] = useState<User[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const loadUsers = async () => {
      try {
        const userData = await fetchAllUsers();
        setUsers(userData);
      } catch {
        setError("Failed to load users. Please try again.");
      } finally {
        setLoading(false);
      }
    };

    loadUsers();
  }, []);

  if (loading) return <p>Loading users...</p>;
  if (error) return <p>{error}</p>;

  return (
    <div className="container mt-4">
      <h2 className="text-center text-primary mb-4">User Profiles</h2>
      <div className="row">
        {users.map((user) => (
          <div className="col-md-4 mb-4" key={user.id}>
            <div className="card shadow-sm h-100">
              <div className="card-body">
                <h5 className="card-title text-primary">{user.name}</h5>
                <p className="card-text">
                  <strong>Email:</strong> {user.email}
                </p>
                <p className="card-text">
                  <strong>Phone:</strong> {user.phone}
                </p>
                <Link
                  to={`/UserProfileApp/users/${user.id}`}
                  className="btn btn-outline-primary btn-sm"
                >
                  View Activities
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default UserProfile;
