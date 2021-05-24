import React, { useState } from "react";
import { Button, Modal,Form } from "react-bootstrap";
import {v4 as uuidv4} from "uuid"


const Add = ({movieAdd}) => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

const [id, setId] = useState('');
const [title, setTitle] = useState('');
const [posterUrl, setposterUrl] = useState('');
const [description, setDescription] = useState('');
const [rating, setRating] = useState(0);
const [year, setYear] = useState('');
  return (
    <>
      <Button variant="primary" onClick={handleShow}>
        Add a Movie
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>New Movie</Modal.Title>
        </Modal.Header>
        <Modal.Body>
        <Form.Control placeholder="id" onChange={(id)=>setId(uuidv4())}/>
        <Form.Control placeholder="Title" onChange={(title)=>setTitle(title.target.value)}/>
        <Form.Control placeholder="posterurl" onChange={(e)=>setposterUrl(e.target.value)}/>
        <Form.Control as="textarea" rows={3} placeholder="description" onChange={(e)=>setDescription(e.target.value)}/>
        <Form.Control placeholder="rating" onChange={(e)=>setRating(e.target.value)}/>
        <Form.Control placeholder="year" onChange={(e)=>setYear(e.target.value)}/>

        
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={()=>{handleClose()
        movieAdd(id,title,posterUrl,description,rating,year)}}>
            Save
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default Add;