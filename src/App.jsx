import { useState } from 'react'
import './App.css'
import MapComponent from './components/Map'
import "mapbox-gl/dist/mapbox-gl.css";
import axios  from 'axios';

function App() {
  const hello = async ()=>{
    try{
      const {data} = await axios.get(`https://api.mapbox.com/v4/mapbox.mapbox-terrain-v2/tilequery/44.00070934373695,36.19857917157243.json?layers=contour&limit=50&access_token=pk.eyJ1IjoiYW5kcmVpbXVudGVhbnU5OCIsImEiOiJja25oaXdoeXYwMGVpMnFwODlteGpjZHI3In0.RGTXHOrO7n1Xu4t1Wc_ikQ`,{})
      console.log(data)
    }catch(error){
      console.log(error)
    }
  }
  hello()

  return (
    <div className="App">
      <MapComponent/>
    </div>
  )
}

export default App
