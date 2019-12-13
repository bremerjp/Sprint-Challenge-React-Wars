import React, { useEffect, useState } from "react";
import axios from "axios";
import PersonCard from "./PersonCard";
import { Row, Col, Container, Button } from "reactstrap";

export default function PersonGrid() {
  const [personArray, setPersonArray] = useState([]);
  const [page, setPage] = useState(1);

  useEffect(() => {
    axios
      .get(`https://swapi.co/api/people/?page=${page}`)
      .then(response => {
        const people = response.data.results;
        console.log(people);
        setPersonArray(people);
      })
      .catch(error => {
        console.log("No data returned.", error);
      });
  }, [page]);

  const next = () => setPage(page + 1);
  const previous = () => setPage(page - 1);

  return (
    <div>
      <Container>
        <Row>
          {personArray.map(item => {
            console.log(page);
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
      <Container className="mt-3">
          <Button onClick={() => previous()} className="button">
            Previous
          </Button>
          <Button onClick={() => next()} className="button">
            Next
          </Button>
      </Container>
    </div>
  );
}
