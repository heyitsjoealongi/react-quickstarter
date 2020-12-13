import React from "react";
import {
  Card,
  CardImg,
  CardText,
  CardBody,
  CardTitle,
  CardSubtitle,
} from "reactstrap";

import logo from "../../logo.svg";

const Profile = (props) => {
  return (
    <div>
      <Card>
        <CardImg
          top
          width="100%"
          height="auto"
          src={logo}
          alt="Card image cap"
        />
        <CardBody>
          <CardTitle tag="h5">React Quickstarter</CardTitle>
          <CardSubtitle tag="h6" className="mb-2 text-muted">
            Card subtitle
          </CardSubtitle>
          <CardText>
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </CardText>
        </CardBody>
      </Card>
    </div>
  );
};

export default Profile;
