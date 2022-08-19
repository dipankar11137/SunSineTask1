import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { Link } from "react-router-dom";
import "./Navbar.css";

function CollapsibleExample() {
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
              <Link className="nav-style" to="/header">
                header
              </Link>
            </li>
            <li className="ps-3">
              <Link className="nav-style" to="/header">
                header
              </Link>
            </li>
            <li className="ps-3">
              <Link className="nav-style" to="/header">
                header
              </Link>
            </li>
            <li className="ps-3">
              <Link className="nav-style" to="/header">
                header
              </Link>
            </li>
          </Nav>
          <Nav>
            <li className="ps-3">
              <Link className="nav-style" to="/header">
                Login
              </Link>
            </li>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default CollapsibleExample;
