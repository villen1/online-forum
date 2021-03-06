import React, { useState } from 'react'
import { Container, Row, Button, Form, Modal } from 'react-bootstrap';
import { useParams } from "react-router-dom"

const NewMessage = (props) => {
    const [txt, setTxt] = useState('')
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const id = useParams().id
  
    const submit = async (event) => {
      event.preventDefault()
      props.addMsg({ thread: id, text: txt })
      setTxt('')
      handleClose()
    }
    
    return (
      <>
        <Container className="cus-pad clearfix">
        <Button md="auto" className="float-end" variant="primary" onClick={handleShow}>
          {props.openButtonText}
        </Button> </Container>

        <Modal show={show} onHide={handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>New message</Modal.Title>
          </Modal.Header>
          <Modal.Body>
          <Form onSubmit={submit}>

          <Row>
            Message 
            <Form.Control
              value={txt}
              onChange={({ target }) => setTxt(target.value)}
            />
            </Row>
           
        </Form>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
              Close
            </Button>
            <Button type='submit' variant="primary" onClick={submit}>
              Send message
            </Button>
          </Modal.Footer>
        </Modal>
      </>
    );
}

export default NewMessage
