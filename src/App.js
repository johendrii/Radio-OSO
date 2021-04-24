import { Badge, Col, Container, Row } from "react-bootstrap";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
// import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Navs from "./components/Navs";
import Datek3 from "./components/Datek3";
import Datek2 from "./components/Datek2";
import Datek from "./components/Datek";

function App() {
  const navTittle = "KBA012 fc KBA040";

  return (
    // <Container fluid className="App">
    //   <h1>
    //     Pejuang <Badge variant="secondary">OSO 5</Badge>
    //   </h1>
    //   <Router>
    //     <Row>
    //       <Col sm={3}>
    //         <Navs navTittle={navTittle} />
    //       </Col>
    //       <Col sm={9}>
    //         <Switch>
    //           <Route path="/datek" component={Datek} />
    //           <Route path="/service" component={Services} />
    //           <Route path="/about" component={About} />
    //         </Switch>
    //       </Col>
    //     </Row>
    //   </Router>
    //   <footer>
    //     <p>
    //       Dispacthing Ticket, Koordinasi gangguan dengan MSO, Mitratel, Vendor
    //       dan TSEL, Check NMS EID, NEC dan Huawei. Handling tiket Radio.
    //     </p>
    //   </footer>
    // </Container>

    <Container className="App">
      <Row>
        <Col sm={3} style={{ position: "fixed", zIndex: 1 }}>
          <h1 className="pejuang">
            Pejuang <Badge variant="secondary">OSO 5</Badge>
          </h1>
          <Navs navTittle={navTittle} />
        </Col>
        <Col sm={3}></Col>
        <Col sm={12}>
          <Datek />
          <Datek2 />
          <Datek3 />
        </Col>
      </Row>
      <footer>
        <p>
          Dispacthing Ticket, Koordinasi gangguan dengan MSO, Mitratel, Vendor
          dan TSEL, Check NMS EID, NEC dan Huawei. Handling tiket Radio.
        </p>
      </footer>
    </Container>
  );
}

export default App;
