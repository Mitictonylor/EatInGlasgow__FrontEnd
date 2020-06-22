import React from "react";
import { Map, Marker, Popup, TileLayer } from "react-leaflet";
import { Icon } from "leaflet";



export const icon = new Icon({
  iconUrl: "/images/Logo.jpg",
  iconSize: [35, 35]
});

export default function UserRestauranMap({restaurants}) {
  const [activeRestaurant, setActiveRestaurant] = React.useState(null);
const filteredRestaurants = restaurants.filter(restaurant => restaurant.latitude != 0)
console.log(filteredRestaurants[0])

if (!filteredRestaurants){
  return "Loading"
}

  return (
    <Map center={[55.860916, -4.251433]} zoom={12}>
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
      />

      {filteredRestaurants.map(restaurant => (
        <Marker
          key={restaurant.id}
          position={[
            restaurant.latitude,
            restaurant.longitude
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
            activeRestaurant.latitude,
            activeRestaurant.longitude
          ]}
          onClose={() => {
            setActiveRestaurant(null);
          }}
        >
          <div>
            <h2>{activeRestaurant.name}</h2>
            <p>{activeRestaurant.cousine}</p>
          </div>
        </Popup>
      )}
    </Map>
  );
}
