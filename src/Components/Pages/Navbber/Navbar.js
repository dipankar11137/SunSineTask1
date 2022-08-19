import { signOut } from "firebase/auth";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { useAuthState } from "react-firebase-hooks/auth";
import { Link, useNavigate } from "react-router-dom";
import auth from "../../../firebase.init";
import "./Navbar.css";

function CollapsibleExample() {
  const [user] = useAuthState(auth);
  const navigate = useNavigate();

  const handleSignOut = () => {
    signOut(auth);
    navigate("/login");
  };
  return (
    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
      <Container>
        <li className="pe-5">
          <Link className="nav-style text-warning" to="/">
            Home
          </Link>
        </li>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto ps-5">
            <li className="ps-3">
              <Link className="nav-style" to="/services">
                Services
              </Link>
            </li>
            <li className="ps-3">
              <Link className="nav-style" to="/about">
                About
              </Link>
            </li>
            <li className="ps-3">
              <Link className="nav-style" to="/block">
                Block
              </Link>
            </li>
            <li className="ps-3">
              <Link className="nav-style" to="/contact">
                Contact
              </Link>
            </li>
          </Nav>
          {user ? (
            <button className="btn text-white fw-bold" onClick={handleSignOut}>
              {" "}
              Sign Out
            </button>
          ) : (
            <Nav>
              <li className="ps-3">
                <Link className="nav-style" to="/login">
                  Login
                </Link>
              </li>
            </Nav>
          )}
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default CollapsibleExample;
