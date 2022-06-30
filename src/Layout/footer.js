import React from "react";
import { Container } from "reactstrap";

const Footer = () => {
  return (
    <Container
      fluid
      tag="footer"
      className="text-center bg-info text-white text-uppercase fixed-bottom p-3"
    >
      GitHub search app with firebase
      <p> Made with ❤ by Tushar Kashyap </p>
    </Container>
  );
};

export default Footer;
