import React from "react";
import { Container, Row, Col, Card } from "react-bootstrap";

import useStats from "../utils/useStats";
import StatsCards from "./StatsCards";

export default function StatsDisplay({ url }) {
  const data = useStats(url);

  // function renderCard(title, number, bgColor) {
  //   return (
  //     <Card style={{ backgroundColor: bgColor, color: "white" }}>
  //       <Card.Body>
  //         <h5>{title}</h5>
  //         <h1>{number.toLocaleString()}</h1>
  //       </Card.Body>
  //     </Card>
  //   );
  // }

  // return (
  //   <div>
  //     <Container className="cards">
  //       <Row>
  //         <Col lg>
  //           {renderCard(
  //             "Confirmed",
  //             data ? data.confirmed && data.confirmed.value : `loading...`,
  //             "#355cfa"
  //           )}
  //         </Col>
  //         <Col lg>
  //           {renderCard(
  //             "Deaths",
  //             data ? data.confirmed && data.deaths.value : `loading...`,
  //             "#ee3045"
  //           )}
  //         </Col>
  //         <Col lg>
  //           {renderCard(
  //             "Recovered",
  //             data ? data.confirmed && data.recovered.value : `loading...`,
  //             "#119a84"
  //           )}
  //         </Col>
  //         <Col lg>
  //           {renderCard(
  //             "Fatality Rate",
  //             data
  //               ? ((data.deaths.value / data.confirmed.value) * 100).toFixed(
  //                   2
  //                 ) + "%"
  //               : `loading...`,
  //             "#fe6f4c"
  //           )}
  //         </Col>
  //       </Row>
  //     </Container>
  //     <StatsCards
  //       confirmedNum={
  //         data ? data.confirmed && data.confirmed.value : `loading...`
  //       }
  //       deathsNum={data ? data.confirmed && data.deaths.value : `loading...`}
  //       recoveredNum={
  //         data ? data.confirmed && data.recovered.value : `loading...`
  //       }
  //     />
  //   </div>
  // );

  return (
    <StatsCards
      confirmedNum={
        data ? data.confirmed && data.confirmed.value : `loading...`
      }
      deathsNum={data ? data.confirmed && data.deaths.value : `loading...`}
      recoveredNum={
        data ? data.confirmed && data.recovered.value : `loading...`
      }
    />
  );
}
