import React from 'react'
import './CSS/todo.css'
import {Form,Col,Image} from 'react-bootstrap';
import Details from './Details.js';
import Caracteristique from './Caracteristique.js';
import Disponibilité from './Disponibilité.js';
import { AiFillLeftCircle } from "react-icons/ai";


function FormulaireTableau({table,settable,setViewport,viewport}) {
    

    const NonVisiblehandler = (event) => {
        table.visible = false
        viewport.width="100vw"
        settable({...table});
        setViewport({...viewport});
    }
    return (
        <div className="Background">
            <Form >
                <Col xs={6} md={4}>
                <div class="image-rognage">
                    {table.file && <Image className="photo"  src={table.Preview} rounded alt={table.file.name}  />}
                </div>    
                </Col> 
                <AiFillLeftCircle className="hide" onClick={NonVisiblehandler} />
                <Details tableau settable={settable} table={table}  />
                <Caracteristique tableau settable={settable} table={table} />
                <Disponibilité tableau settable={settable} table={table}  />
            </Form>
        </div>
    )
}
export default FormulaireTableau
