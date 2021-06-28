//import GeoLocator from './components/GeoLocator'

import "./App.css";
import useCurrentLocation from "./components/UseCurrentLocation";
import GoogleMapsComponent from "./components/GoogleMapsComponent";

const geolocationOptions = {
  // Using this option you can define when should the location request timeout and
  // call the error callback with timeout message.
  timeout: 1000 * 60 * 1, // 1 min (1000 ms * 60 sec * 1 minute = 60 000ms)
};

function App() {
  const { location, error } = useCurrentLocation(geolocationOptions);
  // console.log("location:", location);
  return (
    <div className='App'>
      <h1>Behold, Geolocation!</h1>

      {location ? (
        <p>
          Latitude: {location.latitude} Longitude: {location.longitude}
        </p>
      ) : (
        <p>Loading...</p>
      )}
      {error && <p>Location error: {error}</p>}
      <div className='center'>
        <GoogleMapsComponent {...location} />
      </div>
    </div>
  );
}

export default App;
