import React from 'react'
import { version } from 'react-dom'
import Map,{Marker, Popup} from 'react-map-gl'

const MapComponent = () => {
    const [viewport, setViewport] = React.useState({
        viewState: {
            latitude: 37.785164,
            longitude: -100,
            zoom: 3,
            bearing: 0,
            pitch: 0
        },
    })
    const handleViewportChange = (viewport) => {
        console.log(viewport);
        setViewport(viewport)
    }
  return (
   <Map
      {...viewport}
      onMove={handleViewportChange}
      mapboxAccessToken="pk.eyJ1IjoicmV2YW45OSIsImEiOiJjbDFzemJueHYyNHpvM2JxcjN4ZncxYzA3In0.emNHZSa1no3viZZCM4s0cw"
      mapStyle='mapbox://styles/mapbox/streets-v11'
    >
        <Marker latitude={37.785164} longitude={-100}>
            <div style={{color:'white', background:'black'}}>hello </div>
        </Marker>
        <Popup latitude={37.785164} longitude={-100}>
                asdfas
        </Popup>
    </Map>
  )
}

export default MapComponent