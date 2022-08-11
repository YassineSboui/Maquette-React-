import React,{useState} from 'react'
import './CSS/todo.css'
import {Form,Row,Button,InputGroup} from 'react-bootstrap';

 


function Disponibilité({table,settable}) {

    const [jour, setjour] =useState({
        DateDebut:"",
        DateFin:"",
        HeureDebut: "",
        HeureFin: "",
        Recurrance : "",
    })

    const DateDebuthandler = (event) => {
        jour.DateDebut = event.target.value
        setjour({...jour});}

    const DateFinhandler = (event) => {
        jour.DateFin = event.target.value
        setjour({...jour}
        );}

    const HeureDebuthandler = (event) => {
        jour.HeureDebut = event.target.value
        setjour({...jour}
        );}  

    const HeureFinhandler = (event) => {
        jour.HeureFin = event.target.value
        setjour({...jour}
        );}
            

    const Recurrancehandler = (event) => {
        jour.Recurrance = event.target.value
        setjour({...jour}
        );
    }
    return (
        <div style={{padding:"5%"}}>  
            <Row >
                <Form.Group className="mb-3" controlId="DateDebut">
                    <InputGroup>
                        <Form.Label>De : </Form.Label>
                        <Form.Control type="date" value={jour.DateDebut} onChange={DateDebuthandler} placeholder="..." />
                    </InputGroup>   
                </Form.Group>
                <Form.Group className="mb-3" controlId="DateFin">
                    <InputGroup>
                        <Form.Label>A : </Form.Label>
                        <Form.Control type="date" value={jour.DateFin} onChange={DateFinhandler} placeholder="..."  />
                    </InputGroup>
                </Form.Group>       
            </Row>
            <Row > 
                <Form.Group className="mb-3" controlId="jour">
                    <InputGroup>
                        <Form.Label>Heure : </Form.Label>
                        <Form.Control type="time" value={jour.HeureDebut} onChange={HeureDebuthandler} placeholder="..." />
                        <Form.Control type="time" value={jour.HeureFin} onChange={HeureFinhandler} placeholder="..." />
                    </InputGroup>   
                </Form.Group>
            </Row>
            <Row >  
                <Form.Group className="mb-3" controlId="recurrance">
                    <InputGroup>
                        <Form.Label>Recurrance : </Form.Label>
                        <Form.Control type="number" value={jour.Recurrance} onChange={Recurrancehandler} placeholder="..." />
                    </InputGroup>   
                </Form.Group>
                <Button variant="primary">Verifier Disponibilité</Button>{' '}
            </Row>
        </div>
        

    )
}


export default Disponibilité