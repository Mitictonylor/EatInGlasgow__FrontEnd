import React from "react";
import { Map, Marker, Popup, TileLayer } from "react-leaflet";
import { Icon } from "leaflet";
import * as parkData from "../../data/skateboard-parks.json";


export const icon = new Icon({
   iconUrl: "/images/Logo.jpg",
  iconSize: [35, 35]
});

export default function App({restaurants}) {
  const [activeRestaurant, setActiveRestaurant] = React.useState(null);

  return (
    <Map center={[55.8, -4.25]} zoom={12}>
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
      />

      {restaurants.features.map(restaurant => (
        <Marker
          key={restaurant.id}
          position={[
            restaurant.longitude,
            restaurant.latitude
          ]}
          onClick={() => {
            setActiveRestaurant(restaurant);
          }}
          icon={icon}
        />
      ))}

      {activeRestaurant && (
        <Popup
          position={[
            restaurants.longitude,
            restaurants.latitude
          ]}
          onClose={() => {
            setActiveRestaurant(null);
          }}
        >
          <div>
            <h2>{activeRestaurant.name}</h2>
            <p>{activeRestaurant.cousine}</p>
            <p>{activeRestaurant.openingTime}- {activeRestaurant.closingTime}</p>
          </div>
        </Popup>
      )}
    </Map>
  );
}
