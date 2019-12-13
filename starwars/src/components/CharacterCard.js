import React from "react";
import "./StarWars.css"
import { Card, CardBody, CardTitle, CardSubtitle, Row } from "reactstrap";


const CharacterCard = props => {
    console.log(props);
    return (
        <div className="card">
            <Row xs="20" sm="1" key={props.id}>
            <Card >
                <CardBody>
                    <CardTitle className="One"><h3>{props.character.name}</h3></CardTitle>
                    <CardSubtitle> Name: {props.character.name}</CardSubtitle>
                    <CardSubtitle> Height: {props.character.height}</CardSubtitle>
                    <CardSubtitle> Mass: {props.character.mass}</CardSubtitle>
                    <CardSubtitle> Hair: {props.character.hair_color}</CardSubtitle>
                    <CardSubtitle> Skin Color: {props.character.skin_color}</CardSubtitle>

                </CardBody>
            </Card>
            </Row> 
        </div>
    )
}
export default CharacterCard;



// <h1 className="2">{props.character.name}</h1>
// Name: {props.character.name}<br />
// Height: {props.character.height}<br />
// Mass: {props.character.mass}<br />
// Hair: {props.character.hair_color}<br />
// Skin Color: {props.character.skin_color}<br />