import React from "react";

import { Container, Row, Col } from "reactstrap";

import Collectedview from "../collectedview-software-studio.png";

const Footer = () => {
  return (
    <>
      <Container fluid="true" className="footer">
        <Row>
          <Col md="12">
            <a target="blank_" href="https://collectedview.io/">
              <img
                width="auto"
                height="50px"
                src={Collectedview}
                alt="Collectedview Software Studio"
              />
            </a>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default Footer;
