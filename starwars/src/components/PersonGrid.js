import React, { useEffect, useState } from "react";
import axios from "axios";
import PersonCard from "./PersonCard";
import { Row, Col, Container } from "reactstrap";

export default function PersonGrid() {
  // http https://swapi.co/api/people/
  const [personArray, setPersonArray] = useState([]);

  useEffect(() => {
    axios
      .get(`https://swapi.co/api/people/`)
      .then(response => {
        const people = response.data.results;
        console.log(people);
        setPersonArray(people);
      })
      .catch(error => {
        console.log("No data returned.", error);
      });
  }, []);

  return (
    <div>
      <Container>
        <Row>
          {personArray.map(item => {
            return (
              <Col xs="12" sm="4">
                <PersonCard
                  key={item.name}
                  born={item.birth_year}
                  name={item.name}
                  height={item.height}
                  hairColor={item.hair_color}
                  planet={item.homeworld}
                />
              </Col>
            );
          })}
        </Row>
      </Container>
    </div>
  );
}