import "./Navbar.css";
import Logo from "../assests/l1.jpg";

const Navbar = () => {
  return (
    <nav className="navbar sticky-top navbar-expand-lg ">
      <div className="container-fluid">
        <img src=".\assests\l1.jpg" alt="logo" />
        <a className="navbar-brand" href="/">KisanSathi</a>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item">
              <a className="nav-link active" aria-current="page" href="/">Home</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/">Features</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/">ChatBot</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/">Support</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
