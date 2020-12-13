import React, { useState } from "react";
import {
  TabContent,
  TabPane,
  Nav,
  NavItem,
  NavLink,
  Card,
  Button,
  CardTitle,
  CardText,
  Row,
  Col,
} from "reactstrap";
import classnames from "classnames";

const Subnavigation = (props) => {
  const [activeTab, setActiveTab] = useState("1");

  const toggle = (tab) => {
    if (activeTab !== tab) setActiveTab(tab);
  };

  return (
    <div>
      <Nav tabs>
        <NavItem>
          <NavLink
            className={classnames({ active: activeTab === "1" })}
            onClick={() => {
              toggle("1");
            }}
          >
            Latest
          </NavLink>
        </NavItem>
        <NavItem>
          <NavLink
            className={classnames({ active: activeTab === "2" })}
            onClick={() => {
              toggle("2");
            }}
          >
            More Information
          </NavLink>
        </NavItem>
      </Nav>
      <TabContent activeTab={activeTab}>
        <TabPane tabId="1">
          <Row>
            <Col sm="12">
              <h1>React Quickstarter</h1>
              <p>
                Nec sagittis aliquam malesuada bibendum arcu. Amet venenatis
                urna cursus eget nunc scelerisque. In tellus integer feugiat
                scelerisque varius morbi enim nunc. Id cursus metus aliquam
                eleifend mi. Ornare quam viverra orci sagittis eu volutpat.
                Ornare massa eget egestas purus. Aliquam ultrices sagittis orci
                a scelerisque purus semper eget duis. Orci a scelerisque purus
                semper eget. Risus viverra adipiscing at in. Viverra orci
                sagittis eu volutpat odio facilisis mauris sit amet. In aliquam
                sem fringilla ut. Purus semper eget duis at tellus at urna
                condimentum. Scelerisque mauris pellentesque pulvinar
                pellentesque habitant. Quam adipiscing vitae proin sagittis.
                Mollis aliquam ut porttitor leo a diam sollicitudin tempor id.
                Quam pellentesque nec nam aliquam.
              </p>
              <p className="lead">React Quickstarter</p>
              <p>
                Varius duis at consectetur lorem. Facilisi etiam dignissim diam
                quis. A lacus vestibulum sed arcu non odio. Non pulvinar neque
                laoreet suspendisse interdum consectetur. Quam vulputate
                dignissim suspendisse in est ante in nibh mauris. Volutpat
                commodo sed egestas egestas fringilla phasellus faucibus
                scelerisque eleifend. Quisque sagittis purus sit amet volutpat
                consequat mauris. Hac habitasse platea dictumst quisque
                sagittis. Pellentesque sit amet porttitor eget dolor morbi non.
                Bibendum ut tristique et egestas quis ipsum suspendisse
                ultrices. Pretium viverra suspendisse potenti nullam ac tortor
                vitae purus. Ac orci phasellus egestas tellus rutrum tellus
                pellentesque eu tincidunt. Turpis nunc eget lorem dolor sed
                viverra. Quisque sagittis purus sit amet volutpat consequat. Id
                semper risus in hendrerit gravida rutrum quisque non. Sed lectus
                vestibulum mattis ullamcorper. Ipsum nunc aliquet bibendum enim
                facilisis gravida neque convallis. Amet nisl suscipit adipiscing
                bibendum est ultricies. Sodales neque sodales ut etiam.
                Venenatis cras sed felis eget velit aliquet sagittis id
                consectetur.
              </p>
              <p>
                Viverra aliquet eget sit amet tellus cras adipiscing enim.
                Turpis egestas pretium aenean pharetra magna ac. Commodo odio
                aenean sed adipiscing. Sodales neque sodales ut etiam sit amet.
                Nulla facilisi nullam vehicula ipsum a arcu cursus vitae congue.
                Massa tempor nec feugiat nisl. In hendrerit gravida rutrum
                quisque. Nec feugiat in fermentum posuere urna nec tincidunt. In
                nibh mauris cursus mattis molestie a. Vestibulum sed arcu non
                odio euismod lacinia. Id interdum velit laoreet id donec.
                Ultrices in iaculis nunc sed augue lacus viverra. Enim neque
                volutpat ac tincidunt. Urna et pharetra pharetra massa. Sit amet
                consectetur adipiscing elit ut aliquam.
              </p>
            </Col>
          </Row>
        </TabPane>
        <TabPane tabId="2">
          <Row>
            <Col sm="6">
              <Card body>
                <CardTitle>Special Title Treatment</CardTitle>
                <CardText>
                  With supporting text below as a natural lead-in to additional
                  content.
                </CardText>
                <Button>Go somewhere</Button>
              </Card>
            </Col>
            <Col sm="6">
              <Card body>
                <CardTitle>Special Title Treatment</CardTitle>
                <CardText>
                  With supporting text below as a natural lead-in to additional
                  content.
                </CardText>
                <Button>Go somewhere</Button>
              </Card>
            </Col>
          </Row>
        </TabPane>
      </TabContent>
    </div>
  );
};

export default Subnavigation;
