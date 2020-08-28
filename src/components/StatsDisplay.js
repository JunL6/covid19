import React, { useState } from "react";
import { Container, Row, Col, Card } from "react-bootstrap";

import useStats from "../utils/useStats";

function StatsDisplay({ url }) {
  const data = useStats(url);

  function renderCard(title, data, bgColor) {
    return (
      <Card style={{ backgroundColor: bgColor, color: "white" }}>
        <Card.Body>
          <h5>{title}</h5>
          <h2>{data.toLocaleString()}</h2>
        </Card.Body>
      </Card>
    );
  }

  return (
    <Container className="cards">
      <Row>
        <Col lg>
          {renderCard(
            "Confirmed",
            data ? data.confirmed && data.confirmed.value : `loading...`,
            "#355cfa"
          )}
        </Col>
        <Col lg>
          {renderCard(
            "Deaths",
            data ? data.confirmed && data.deaths.value : `loading...`,
            "#ee3045"
          )}
        </Col>
        <Col lg>
          {renderCard(
            "Recovered",
            data ? data.confirmed && data.recovered.value : `loading...`,
            "#4fcb56"
          )}
        </Col>
        <Col lg>
          {renderCard(
            "Fatality Rate",
            data
              ? ((data.deaths.value / data.confirmed.value) * 100).toFixed(2) +
                  "%"
              : `loading...`,
            "#fe6f4c"
          )}
        </Col>
      </Row>
    </Container>
  );
}

export default StatsDisplay;
