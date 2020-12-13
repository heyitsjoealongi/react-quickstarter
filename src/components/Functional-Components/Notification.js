import React from "react";
import { Badge, Button } from "reactstrap";

const Notification = (props) => {
  return (
    <div>
      <Button color="primary" outline>
        Notifications <Badge color="secondary">4</Badge>
      </Button>
    </div>
  );
};

export default Notification;
