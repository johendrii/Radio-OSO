import React from "react";
import { Container, Nav } from "react-bootstrap";
// import { LinkContainer } from "react-router-bootstrap";

const Header = ({ navTittle }) => {
  return (
    // <Container>
    //   <Nav justify variant="pills" className="flex-column">
    //     <Nav.Item>
    //         <Nav.Link href="/datek">Datek {navTittle} OOW</Nav.Link>
    //       </LinkContainer>
    //     </Nav.Item>
    //     <Nav.Item>
    //       <LinkContainer to="/about">
    //         <Nav.Link href="/about">atek KBA001 OOW</Nav.Link>
    //       </LinkContainer>
    //     </Nav.Item>
    //     <Nav.Item>
    //       <LinkContainer to="/service">
    //         <Nav.Link href="/service">atek KBA021 fc KBA001 Warranty</Nav.Link>
    //       </LinkContainer>
    //     </Nav.Item>
    //   </Nav>
    // </Container>

    <Container className="navsStyle">
      <Nav justify variant="pills" className="flex-column">
        <Nav.Item>
          <Nav.Link href="#datek">Datek 1</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link href="#datek2">Datek 2</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link href="#datek3">Datek 3</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link href="#datek4">Datek 4</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link href="#datek5">Datek 5</Nav.Link>
        </Nav.Item>
      </Nav>
    </Container>
  );
};

export default Header;
