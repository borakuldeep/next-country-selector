import ReactMapboxGl, { Popup } from "react-mapbox-gl";
import "mapbox-gl/dist/mapbox-gl.css";


// put your own api key here
const MAP_API_KEY = process.env.mapBoxKey;

const getPopUp = (country) => {
  return (
    <Popup
      key={country.name}
      coordinates={[country.latlng[1], country.latlng[0]]}
    >
      <p>{country.name}</p>
    </Popup>
  );
};

const Map = ({ data, center }) => {
  const Map = ReactMapboxGl({
    accessToken: MAP_API_KEY,
  });

  const getZoomLevel = () => {
    // set zoom level according to the results
    // more zoom if less country found
    if (data.length === 1) return 4;
    else if (data.length === 2) return 3;
    return 2;
  };

  return (
    <Map
      style="mapbox://styles/mapbox/navigation-night-v1"
      zoom={[getZoomLevel()]}
      center={[center[0], center[1]]}
      animationOptions={{
        duration: 500,
        offset: center,
      }}
      containerStyle={{
        height: "100vh",
        width: "100vw",
      }}
    >
      {data.map((item) => getPopUp(item))}
    </Map>
  );
};

export default Map;
