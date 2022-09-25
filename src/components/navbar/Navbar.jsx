import "./navbar.css";
import logo from '../../img/travel.webp';

const Navbar = () => {
  return (
    <div className="navbar">
      <div className="navContainer">
        <span className="logo">ProsperBooking</span>
        <div className="navItems">
          <img src={ logo } alt="Prosper" className="image" />
          <button className="navlButton">List your property</button>
          <button className="navButton">Register</button>
          <button className="navButton">Login</button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;