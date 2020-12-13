import React from "react";

import { Container, Row, Col } from "reactstrap";

import Heading from "../Functional-Components/Heading";
import Profile from "../Functional-Components/Profile";
import Subnavigation from "../Higher-Order-Components/Subnavigation";

const Layout = () => (
  <>
    <Heading />
    <Container fluid="true" className="m-5 p-5">
      <Row>
        <Col md="6">
          <Profile />
        </Col>
        <Col md="6">
          <Subnavigation />
        </Col>
      </Row>
    </Container>
  </>
);

export default Layout;
