import React, { useState, useEffect } from "react";
import { Container, Row } from "reactstrap";
import axios from "axios";
import CharacterCard from "./CharacterCard";
import styled from "styled-components";

const CharacterList = function () {
    const [characters, setCharacters] = useState([]);

    useEffect(() => {
        axios
            .get(`https://swapi.co/api/people/`)
            .then(response => {
                console.log(response.data.results);
                setCharacters(response.data.results);
            })
            .catch(error => {
                console.log("data was not return", error);
            })
    },
        [])
    return (
        <Container>
        <Row>
        <div className="Two">
            {characters.map((character, key) => {
                return (
                    <CharacterCard
                     character = {character}
                     key = {key}
                    />
                );
            })}
        </div>
        </Row>
    </Container>
    )
}
export default CharacterList;