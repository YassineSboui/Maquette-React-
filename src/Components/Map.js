import React,{ useState,useEffect } from "react";
import './CSS/todo.css'
import ReactMapGl,{Marker,Popup} from "react-map-gl";
import * as parkData from "../data/skateboard-parks.json";
import {Card,Button} from 'react-bootstrap';
import Details from './Details.js';
import Carte from './Popup.js';



function Map({viewport , setViewport,settable , table}){
    const [selectedPark, setSelectedPark] = useState(null);
    const visiblehandler = () => {
      table.Adresse=selectedPark.properties.ADDRESS
      table.Score = selectedPark.properties.Score
      table.Prix = selectedPark.properties.Prix
      table.Dimension = selectedPark.properties.FACILITY_T
      table.Resolution = selectedPark.properties.FACILITY_1
      table.Calendrier = selectedPark.properties.MODIFIED_D
      table.Disponibilite = selectedPark.properties.NOTES
      table.file =selectedPark.properties.PICTURE_LI
      table.Preview =selectedPark.properties.PICTURE_LI 
      table.visible = true
      viewport.width="auto"
      settable({...table});
      setViewport({...viewport});    
  } 
  useEffect(() => {
        const listener = e => {
          if (e.key === "Escape") {
            setSelectedPark(null);
          }
        };
        window.addEventListener("keydown", listener);
    
        return () => {
          window.removeEventListener("keydown", listener);
        };
      }, []);
    return (
    <div>
        <ReactMapGl  {...viewport}
            minZoom={5.5}
            mapboxApiAccessToken="pk.eyJ1IjoieWFzc2luZXNib3VpIiwiYSI6ImNrcXV3dXlwdjA4b3Ayb3FhODhhbWE1NDcifQ.zfs-pBXlW0UQ2ygNgQ3B7w"
            mapStyle="mapbox://styles/yassinesboui/ckr4oyl1f0nup17muku27ojf5/draft" 
            onViewportChange={
            viewport =>  { setViewport({...viewport}) }}>
            {parkData.features.map(park => (
            <Marker
            key={park.properties.PARK_ID}
            latitude ={ park.geometry.coordinates[1]}
            longitude ={ park.geometry.coordinates[0]}
            >
            <button className="marker-btn"
            onClick={e => {
                e.preventDefault();
                setSelectedPark(park);
                console.log(selectedPark)
              }}
            >
                <img src ="/Marker.png" alt = "skate park icon" /> 
            </button>
            </Marker>
            ))}
        {selectedPark ? (
          <Popup
            latitude={selectedPark.geometry.coordinates[1]}
            longitude={selectedPark.geometry.coordinates[0]}
            onClose={() => {
              setSelectedPark(null);
            }}
          >
              <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" src={selectedPark.properties.PICTURE_LI} />
                <Card.Body>
                  <Card.Text>
                   <Carte selectedPark={selectedPark}  />
                  </Card.Text>
                  <Button variant="primary" onClick={visiblehandler} className="me-2">More details</Button>
                </Card.Body>
              </Card>           
          </Popup>     
        ) : null}
        </ReactMapGl>
    </div>
    )
}
export default Map
