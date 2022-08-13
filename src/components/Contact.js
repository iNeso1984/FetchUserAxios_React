import React from 'react'
import { Card} from "react-bootstrap"

const Contact = (props) => {
    const contact = props.contact;
  return (
    <>
      <Card className="my-3 p-3 rounded h-90" id="card-container">
        <Card.Img
          style={{ objectFit: "contain" }}
          variant="top"
          src={contact.picture.large}
        />
        <Card.Body>
          <Card.Title>
            {`${contact.name.first + " " + contact.name.last}`}
          </Card.Title>
          <Card.Subtitle className="mb-2 text-muted">Address:</Card.Subtitle>
          <Card.Text>
            <>
              {contact.location.street.number} {""}
              {contact.location.street.name}
            </>
            <>
            <br/>
              {contact.location.city} {""}
              {contact.location.state}
            </>
            <>
            <br/>
              country: {contact.location.country}
            </>
            <>
            <br/>
              Email: {contact.email}
            </>
          </Card.Text>
        </Card.Body>
      </Card>
    </>
  );
}

export default Contact
