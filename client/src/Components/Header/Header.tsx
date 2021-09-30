import Navigation from "../Nav/Nav";
import { Container, Row, Col } from "react-bootstrap";

import "./Header.css";

const Header = () => {

  return (
    <div className='header-main-cont'>
      <Container>
        <Row className="center-top-row">
          <Col>
          </Col>
          <Col className="center-top-col" xs={6}>
            BPD CORP
          </Col>
          <Col>
          </Col>
        </Row>
      </Container>
      <Navigation />
    </div>
  )
}

export default Header
