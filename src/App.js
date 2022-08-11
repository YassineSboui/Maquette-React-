import React,{useState} from 'react';
import './App.css';
import FormulaireTableau from './Components/Form.js';
import Map from './Components/Map.js';
import {Row,Col} from 'react-bootstrap';
import { disableBodyScroll, enableBodyScroll } from 'body-scroll-lock';

function App() {
  const [viewport, setViewport] = React.useState({
    latitude:36.79867646057936,
    longitude:10.171801432475629,
    width: "100vw",
    height: "100vh",
    zoom: 10 ,
})
  const [table, settable] = useState({ 
    Adresse: "",
    Score: "",
    Prix: "" ,
    Dimension : "" ,
    Resolution : "" ,
    Calendrier: "" ,
    Disponibilite: "" ,
    file : "" ,
    Preview : "",
    visible : false })

  const [isDropdownShowing, setIsDropdownShowing] = useState(true);
  isDropdownShowing ? disableBodyScroll(Map) : enableBodyScroll(Map)  
  return (
   
      <Row>
        <Col className="decalage"  sm={table.visible ? 4 : 0} >
          {table.visible ?<FormulaireTableau tableau settable={settable} table={table} setViewport={setViewport} viewport={viewport} />  :null}  
        </Col>
        <Col className="decalage" sm={table.visible ? 8 : 12}> 
          <Map setViewport= {setViewport} viewport ={viewport} settable={settable} table={table} isDropdownShowing={isDropdownShowing}/>
          </Col>
      </Row>
     
  );
}

export default App;
