import ReactMapboxGl, { Layer, Popup } from "react-mapbox-gl";
import "mapbox-gl/dist/mapbox-gl.css";

const getPopUp = (country) => {
  return (
    <Popup
      key={country.name}
      coordinates={[country.latlng[1], country.latlng[0]]}
    >
      <p>Country details {country.name}</p>
    </Popup>
  );
};

const Map = ({data, center}) => {

  const Map = ReactMapboxGl({
    accessToken:
      "YOUR API KEY",
  });

  return (
    <Map
      style="mapbox://styles/mapbox/streets-v9"
      zoom={[2]}
      center={[center[0],center[1]]}
      animationOptions={{
        duration: 500,
        offset: center,
      }}
      containerStyle={{
        height: "100vh",
        width: "100vw",
      }}
    >
      <Layer
        type="symbol"
        id="marker"
        layout={{ "icon-image": "marker-15" }}
      ></Layer>
      {/* <Feature coordinates={[-0.481747846041145, 51.3233379650232]} /> */}
      {data.map((item) => getPopUp(item))}
    </Map>
  );
};

export default Map;
