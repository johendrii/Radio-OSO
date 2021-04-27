import React, { useState } from "react";
import { Button, Col, Container, Form, Row } from "react-bootstrap";

const Datek = () => {
  const [datek, setDatek] = useState("");
  const [submit, setSubmit] = useState(true);
  const [impact, setImpact] = useState("");
  const [navTittle, setNavTittle] = useState("KOSONG");

  const dataWarroom = () => {
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

    setNavTittle(`${NeSiteid} <> ${FeSiteid} OOW`);

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
PIC TSEL : Pak `);

    setImpact(
      `Jumlah Site:1
2G:1NE
3G:1NE
4G:1NE
Detail Site: 
${NeSiteid}`
    );
  };

  const dataRedeploy = () => {
    let newDatek = datek;

    const NeSiteid = newDatek.slice(
      newDatek.search(`ACTUAL NE&nbsp;`) + 32,
      newDatek.search(`ACTUAL NE&nbsp;`) + 38
    );

    const NeSitename = newDatek.slice(
      newDatek.search(`ACTUAL NE&nbsp;`) + 41,
      newDatek.search(`ACTUAL NE KOORDINAT&nbsp;`) - 53
    );

    const ActualKoordinat = newDatek.slice(
      newDatek.search(`ACTUAL NE KOORDINAT&nbsp;`) + 42,
      newDatek.search(`ACTUAL FE&nbsp;`) - 53
    );

    const NeLatitude = ActualKoordinat.slice(0, ActualKoordinat.search(" , "));
    const NeLongitude = ActualKoordinat.slice(
      ActualKoordinat.search(" , ") + 3,
      ActualKoordinat.length - 1
    );

    const FeSiteid = newDatek.slice(
      newDatek.search(`ACTUAL FE&nbsp;`) + 32,
      newDatek.search(`ACTUAL FE&nbsp;`) + 38
    );

    const FeSitename = newDatek.slice(
      newDatek.search(`ACTUAL FE&nbsp;`) + 41,
      newDatek.search(`ACTUAL FE KOORDINAT&nbsp;`) - 53
    );

    const ActualKoordinatFE = newDatek.slice(
      newDatek.search(`ACTUAL FE KOORDINAT&nbsp;`) + 42,
      newDatek.search(`STATUS&nbsp;`) - 65
    );

    const FeLatitude = ActualKoordinatFE.slice(
      0,
      ActualKoordinatFE.search(" , ")
    );
    const FeLongitude = ActualKoordinatFE.slice(
      ActualKoordinatFE.search(" , ") + 3,
      ActualKoordinatFE.length - 1
    );

    setNavTittle(`${NeSiteid} <> ${FeSiteid} OOW`);
    setDatek(`[OPEN] 

No. Tiket
Nossa  : 
Remedy : 
    
Start Time    : 
End Time      : 
Duration Time : 
    
Headline : 

BAST 1 : -
Status : REDEPLOY

ACTUAL NE IDU : -
NE SITE ID    : ${NeSiteid}
NE SITE NAME  : ${NeSitename}
NE ALAMAT     : -
NE LATITUDE   : ${NeLatitude}
NE LONGITUDE  : ${NeLongitude}

ACTUAL FE IDU : -
FE SITE ID    : ${FeSiteid}
FE SITE NAME  : ${FeSitename}
FE ALAMAT     : -
FE LATITUDE   : ${FeLatitude}
FE LONGITUDE  : ${FeLongitude}

Info TSEL    : Power aman. 
Action   : Koordinasi dengan rekan MSO dan MITRATEL
PIC TSEL : Pak `);

    setImpact(
      `Jumlah Site:1
2G:1NE
3G:1NE
4G:1NE
Detail Site: 
${NeSiteid}`
    );
  };

  const onClickOOW = (e) => {
    e.preventDefault();

    if (datek.includes(`ACTUAL NE&nbsp;`)) {
      dataRedeploy();
    } else if (datek.includes(`"selActualNeIdu" value="`)) {
      dataWarroom();
    } else {
      alert("salah copas coy");
    }

    setSubmit(false);
  };

  const WarWarranty = () => {
    let newDatek = datek;

    const NeSiteid = newDatek.slice(2, 9);
    const FeSiteid = newDatek.slice(
      newDatek.search("FE") + 3,
      newDatek.search("FE") + 10
    );

    setNavTittle(`${NeSiteid} <> ${FeSiteid} Warranty`);

    setDatek(`
    
Mohon dibantu rekan NEC, terkait

${newDatek}

kami cek link Warranty
BAST 1 : 
PIC TSEL : Pak

berikut capturenya`);

    setImpact(
      `Jumlah Site:1
2G:1NE
3G:1NE
4G:1NE
Detail Site:` + NeSiteid
    );
  };

  const WarRedeploy = () => {
    let newDatek = datek;

    const NeSiteid = newDatek.slice(
      newDatek.search(`ACTUAL NE SITEID:`) + 17,
      newDatek.search(`ACTUAL NE SITENAME:`) - 1
    );

    const FeSiteid = newDatek.slice(
      newDatek.search(`ACTUAL FE SITEID:`) + 17,
      newDatek.search(`ACTUAL FE SITENAME:`) - 1
    );

    const NeSitename = newDatek.slice(
      newDatek.search(`ACTUAL NE SITENAME:`) + 19,
      newDatek.search(`ACTUAL FE SITEID:`) - 1
    );

    const FeSitename = newDatek.slice(
      newDatek.search(`ACTUAL FE SITENAME:`) + 19,
      newDatek.length
    );

    setNavTittle(`${NeSiteid} <> ${FeSiteid} Warranty`);

    setDatek(`
    
Mohon dibantu rekan NEC, terkait

NE
${NeSiteid}
${NeSitename}
FE
${FeSiteid}
${FeSitename}

kami cek link Warranty
BAST 1 : 
PIC TSEL : Pak

berikut capturenya`);

    setImpact(
      `Jumlah Site:1
2G:1NE
3G:1NE
4G:1NE
Detail Site:` + NeSiteid
    );
  };

  const onClickWarranty = (e) => {
    e.preventDefault();

    if (datek.includes(`ACTUAL NE SITEID:`)) {
      WarRedeploy();
    } else {
      WarWarranty();
    }

    setSubmit(false);
  };

  const onClear = (e) => {
    e.preventDefault();
    setDatek("");
    setImpact("");
    setSubmit(true);
    setNavTittle("KOSONG");
  };

  return (
    <Container fluid id="datek5" style={{ marginBottom: "100px" }}>
      <div className="navTittle5">{navTittle}</div>
      <Row>
        <Col sm={4} className="impact">
          <Form.Group controlId="exampleForm.ControlTextarea1">
            <Form.Control
              as="textarea"
              rows={10}
              placeholder="Impact otomatis"
              value={impact}
              onChange={(e) => setImpact(e.target.value)}
            />
          </Form.Group>
          <h5>
            S_CONN_TSEL_027<br></br>Mitratel<br></br>
            <br></br>
            S_CONN_TSEL_026<br></br>Warranty<br></br>
          </h5>
        </Col>
        <Col sm={8}>
          <Button
            style={{
              marginTop: "10px",
              marginBottom: "10px",
              marginLeft: "30px",
              marginRight: "20px",
            }}
            variant="danger"
            disabled={!datek || submit === false}
            onClick={onClickOOW}
          >
            OOW
          </Button>
          <Button
            style={{
              marginTop: "10px",
              marginBottom: "10px",
              marginRight: "40px",
            }}
            variant="danger"
            disabled={!datek || submit === false}
            onClick={onClickWarranty}
          >
            Warranty
          </Button>
          <Button variant="success" onClick={onClear}>
            Clear!
          </Button>
          <Form.Group
            className="textArea"
            controlId="exampleForm.ControlTextarea1"
          >
            <Form.Control
              as="textarea"
              rows={36}
              placeholder="masukin html atau site NE dan FE"
              value={datek}
              onChange={(e) => setDatek(e.target.value)}
            />
          </Form.Group>
        </Col>
      </Row>
    </Container>
  );
};

export default Datek;
