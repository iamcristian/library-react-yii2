import { Link } from "react-router-dom"
// Navlink for use navigate "isActive" fro check if the link is active

export const Navbar = () => {
  return (
    <nav>
      <Link to="/">Home</Link>
      <Link to="/about">About</Link>
    </nav>
  );
}
