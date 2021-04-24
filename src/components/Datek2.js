import React, { useState } from "react";
import { Button, Col, Container, Form, Row } from "react-bootstrap";

const Datek2 = () => {
  const [datek, setDatek] = useState("");
  const [submit, setSubmit] = useState(true);
  const [impact, setImpact] = useState("");
  // const [navTittle, setNavTittle] = useState("");

  const onClickOOW = (e) => {
    e.preventDefault();

    let newDatek = datek;

    const NeIdu = newDatek.slice(
      newDatek.search(`"selActualNeIdu" value="`) + 24,
      newDatek.search(`"></th>`)
    );

    const FeIdu = newDatek.slice(
      newDatek.search(`"selActualFeIdu" value="`) + 24,
      newDatek.search(`selNeSiteid`) - 142
    );

    const NeSiteid = newDatek.slice(
      newDatek.search(`"selNeSiteid" value="`) + 21,
      newDatek.search(`name="selFeSiteid"`) - 115
    );

    const FeSiteid = newDatek.slice(
      newDatek.search(`"selFeSiteid" value="`) + 21,
      newDatek.search(`name="selNeSitename"`) - 136
    );

    const NeSitename = newDatek.slice(
      newDatek.search(`"selNeSitename" value="`) + 23,
      newDatek.search(`name="selFeSitename"`) - 117
    );

    const FeSitename = newDatek.slice(
      newDatek.search(`"selFeSitename" value="`) + 23,
      newDatek.search(`name="selNeAlamat"`) - 133
    );

    const NeAlamat = newDatek.slice(
      newDatek.search(`"selNeAlamat" value="`) + 21,
      newDatek.search(`name="selFeAlamat"`) - 114
    );

    const FeAlamat = newDatek.slice(
      newDatek.search(`"selFeAlamat" value="`) + 21,
      newDatek.search(`name="selNeLatitude"`) - 135
    );

    const NeLatitude = newDatek.slice(
      newDatek.search(`"selNeLatitude" value="`) + 23,
      newDatek.search(`name="selFeLatitude"`) - 116
    );

    const FeLatitude = newDatek.slice(
      newDatek.search(`"selFeLatitude" value="`) + 23,
      newDatek.search(`name="selNeLongitude"`) - 136
    );

    const NeLongitude = newDatek.slice(
      newDatek.search(`"selNeLongitude" value="`) + 24,
      newDatek.search(`name="selFeLongitude"`) - 117
    );

    const FeLongitude = newDatek.slice(
      newDatek.search(`"selFeLongitude" value="`) + 24,
      newDatek.search(`name="selRedeploy"`) - 132
    );

    setDatek(`[OPEN] 

No. Tiket
Nossa  : 
Remedy : 
    
Start Time    : 
End Time      : 
Duration Time : 
    
Headline : 

BAST 1 : 
Status : OOW

ACTUAL NE IDU : ${NeIdu}
NE SITE ID    : ${NeSiteid}
NE SITE NAME  : ${NeSitename}
NE ALAMAT     : ${NeAlamat}
NE LATITUDE   : ${NeLatitude}
NE LONGITUDE  : ${NeLongitude}

ACTUAL FE IDU : ${FeIdu}
FE SITE ID    : ${FeSiteid}
FE SITE NAME  : ${FeSitename}
FE ALAMAT     : ${FeAlamat}
FE LATITUDE   : ${FeLatitude}
FE LONGITUDE  : ${FeLongitude}

Info TSEL    : Power aman. 
Action   : Koordinasi dengan rekan MSO dan MITRATEL
PIC TSEL : Pak`);

    setImpact(
      `Jumlah Site:1
2G:1NE
3G:1NE
4G:1NE
Detail Site: ${NeSiteid}`
    );

    setSubmit(false);
  };

  const onClickWarranty = (e) => {
    e.preventDefault();

    let newDatek = datek;

    const nearEnd = newDatek.slice(2, 9);
    // const farEnd = newDatek.slice(
    //   newDatek.search("FE") + 3,
    //   newDatek.search("FE") + 10
    // );

    setDatek(`Mohon dibantu rekan NEC, terkait

${newDatek}

berikut capturenya`);

    setImpact(
      `Jumlah Site:1
2G:1NE
3G:1NE
4G:1NE
Detail Site:` + nearEnd
    );
    setSubmit(false);
    // setNavTittle(nearEnd + ` <> ` + farEnd);
  };

  const onClear = (e) => {
    e.preventDefault();
    setDatek("");
    setImpact("");
    setSubmit(true);
  };

  return (
    <Container fluid id="datek2">
      <Button
        style={{
          marginBottom: "20px",
          marginLeft: "30px",
          marginRight: "20px",
        }}
        variant="danger"
        disabled={!datek || submit === false}
        onClick={onClickOOW}
      >
        Dispatch OOW
      </Button>
      <Button
        style={{
          marginBottom: "20px",
          marginLeft: "30px",
          marginRight: "40px",
        }}
        variant="danger"
        disabled={!datek || submit === false}
        onClick={onClickWarranty}
      >
        Dispatch Warranty
      </Button>
      <Button variant="primary" onClick={onClear}>
        Clear!
      </Button>
      <Row>
        <Col sm={8}>
          <Form.Group controlId="exampleForm.ControlTextarea1">
            <Form.Control
              as="textarea"
              rows={33}
              placeholder="masukin html"
              value={datek}
              onChange={(e) => setDatek(e.target.value)}
            />
          </Form.Group>
        </Col>
        <Col sm={4}>
          <Form.Group controlId="exampleForm.ControlTextarea1">
            <Form.Control
              as="textarea"
              rows={10}
              placeholder="Impact"
              value={impact}
              onChange={(e) => setImpact(e.target.value)}
            />
          </Form.Group>
          <h3>
            S_CONN_TSEL_027<br></br>Mitratel<br></br>
            <br></br>
            S_CONN_TSEL_026<br></br>Warranty<br></br>
          </h3>
        </Col>
      </Row>
    </Container>
  );
};

export default Datek2;