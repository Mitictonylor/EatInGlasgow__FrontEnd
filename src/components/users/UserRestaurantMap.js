import React from "react";
import {Link} from 'react-router-dom';
import { Map, Marker, Popup, TileLayer } from "react-leaflet";
import { Icon } from "leaflet";



export const icon = new Icon({
  iconUrl: "/images/Logo.jpg",
  iconSize: [35, 35]
});

export default function UserRestaurantMap({restaurantList, user}){
  const [activeRestaurant, setActiveRestaurant] = React.useState(null);

  if(restaurantList.length <=0){
    return <h2>Loading</h2>
  }

  const thisUrl= "/users/" + user.id

  return (
    <Map center={[55.860916, -4.251433]} zoom={13}>
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
      />

      {restaurantList.map(restaurant => (
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
            <p>Cousine: {activeRestaurant.cousine}</p>
            <p>Opening Time: {activeRestaurant.openingTime}-{activeRestaurant.closingTime}</p>
            <h5>Address: {activeRestaurant.address}, {activeRestaurant.town}, {activeRestaurant.postcode}</h5>
            <Link to={thisUrl}><button type="button">Go to the booking Form</button></Link>
          </div>
        </Popup>
      )}
    </Map>
  );
}
