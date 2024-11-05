import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import "./NavBootstrap.css";
 

export default function NavBootstrap(props) {
  const { isAuthenticated } = props;

  return (
    <Navbar collapseOnSelect expand="lg" style={{ backgroundColor: "white" }}>
      <Container>
        <Navbar.Brand href="#home" className="logo-de">
          ガンバレ
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Nav activeKey={window.location.pathname}>
              <Nav.Link style={{ color: "##595959" }} href="/">
                Home
              </Nav.Link>
              <Nav.Link style={{ color: "#gray" }} href="/about">
                What is Ganbare?
              </Nav.Link>
              <Nav.Link style={{ color: "##595959" }} href="/quiz/levels">
                Quiz
              </Nav.Link>
              <Nav.Link style={{ color: "##595959" }} href="/dictionary">
                Dictionary
              </Nav.Link>
              <Nav.Link style={{ color: "##595959" }} href="/leaderboard">
                Leaderboard
              </Nav.Link>
              {isAuthenticated ? (
                <Nav.Link style={{ color: "##595959" }} href="/profile">
                  Profile
                </Nav.Link>
              ) : (
                <Nav.Link style={{ color: "##595959" }} href="/signin">
                  Login
                </Nav.Link>
              )}
              {isAuthenticated ? (
                <Nav.Link style={{ color: "##595959" }} href="/dashboard">
                  Dashboard
                </Nav.Link>
              ) : (
               <p></p>
              )}
            </Nav>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
