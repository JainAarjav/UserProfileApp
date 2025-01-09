import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import UserProfile from "./components/UserProfile";
import UserActivities from "./components/UserActivities";

const App= () => {
  return (
    <Router>
      <header style={headerStyle}>
        <h1 style={titleStyle}>User Dashboard</h1>
        <nav>
          <Link to="/">Home</Link>
        </nav>
      </header>
      <main>
        <Routes>
          <Route path="/UserProfileApp" element={<UserProfile />} />
          <Route path="/UserProfileApp/users/:id" element={<UserActivities />} />
        </Routes>
      </main>
    </Router>
  );
};

const headerStyle = {
  backgroundColor: "#007bff",
  color: "white",
  padding: "1em",
};

const titleStyle= {
  margin: 0,
};

export default App;
