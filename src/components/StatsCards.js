import React from "react";
import { Container, Row, Col, Card } from "react-bootstrap";

export default function StatsCards(props) {
  const confirmedNum = props.confirmedNum;
  const deathsNum = props.deathsNum;
  const recoveredNum = props.recoveredNum;
  const fatalityRate = ((deathsNum / confirmedNum) * 100).toFixed(2) + "%";

  function renderCard(title, number, bgColor) {
    return (
      <Card style={{ backgroundColor: bgColor, color: "white" }}>
        <Card.Body>
          <h5>{title}</h5>
          <h1>{number.toLocaleString()}</h1>
        </Card.Body>
      </Card>
    );
  }

  return (
    <Container className="cards">
      <Row>
        <Col lg>{renderCard("Confirmed", confirmedNum, "#355cfa")}</Col>
        <Col lg>{renderCard("Deaths", deathsNum, "#ee3045")}</Col>
        <Col lg>{renderCard("Recovered", recoveredNum, "#119a84")}</Col>
        <Col lg>{renderCard("Fatality Rate", fatalityRate, "#fe6f4c")}</Col>
      </Row>
    </Container>
  );
}
