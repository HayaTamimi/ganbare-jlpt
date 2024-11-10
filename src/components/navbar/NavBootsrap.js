import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import "./NavBootstrap.css";
 

export default function NavBootstrap(props) {
  const { isAuthenticated, userData } = props;

  return (
    <Navbar collapseOnSelect expand="lg" style={{ backgroundColor: "white" }}>
      <Container>
        <Navbar.Brand href="/" className="logo-de">
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
              <Nav.Link style={{ color: "##595959" }} href="/quizzes">
                Quiz
              </Nav.Link>
              <Nav.Link style={{ color: "##595959" }} href="/dictionary">
                Dictionary
              </Nav.Link>
              <Nav.Link
                style={{ color: "##595959" }}
                href="/leaderboard/90aeb7b9-5153-4fea-adc3-c88e360b5917"
              >
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
              {isAuthenticated && userData.role === "Admin" ? (
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
