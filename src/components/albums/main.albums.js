
import React from "react"
import { Container } from "react-bootstrap"
import Collection from "./collection.albums"


const Albums = (props) => {
    return(
        <React.Fragment>
            <Container>
                <h3>{props.title}</h3>
                <p>{props.description}</p>
                <Collection/>
            </Container>
        </React.Fragment>
    )
}

export default Albums