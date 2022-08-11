import React from 'react'
import './CSS/todo.css'
import {Form,Row,Col,InputGroup} from 'react-bootstrap';
import {
    CircularProgressbar,
   
  } from "react-circular-progressbar";
  import "react-circular-progressbar/dist/styles.css";
  
 


function Details({table}) {
    return (
        <div style={{padding:"5%"}}>
            <Row >     
                <Form.Group className="mb-3" controlId="adresse">
                    <Form.Label>Adresse :</Form.Label>
                    <Form.Control type="text" value={table.Adresse}  placeholder=" Adresse..." readOnly/>
                </Form.Group>
                
                <Form.Group className="mb-3" controlId="Prix">
                    <Form.Label>Prix :</Form.Label>
                    <InputGroup>
                        <Form.Control type="text" value={table.Prix}  placeholder=" Prix..." readOnly />
                        <InputGroup.Text>/10s</InputGroup.Text>
                    </InputGroup>
                </Form.Group>          
            </Row>
                <Form.Group as={Row} className="mb-3" controlId="formPlaintextscore">
                    <Form.Label column sm="4">
                    Score:
                    </Form.Label>
                    <Col sm="3">
                    <div label="Stroke width" className="scoreimpact ">
                        <CircularProgressbar 
                            minValue={0}
                            maxValue={10}
                            value={table.Score}
                            text={`${table.Score}`}
                            strokeWidth={5}
                        />
                        </div>
                    </Col>
                </Form.Group>
                
                
            
            

        </div>
        

    )
}


export default Details
