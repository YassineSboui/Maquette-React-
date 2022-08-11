import React from 'react'
import './CSS/todo.css'
import {Table} from 'react-bootstrap';

 


function Caracteristique({table}) {

    return (
        <div style={{padding:"5%"}}>
            <Table striped bordered hover>
            <thead>
                <tr>
                <th>Dimension</th>
                <th>Resoution</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                <td>{table.Dimension}</td>
                <td>{table.Resolution }</td>
                </tr> 
            </tbody>
            </Table>    
        </div>
        

    )
}


export default Caracteristique