import { useSearchParams } from "react-router-dom";
import styles from "./Map.module.css";

function Map() {
  const [searchParams, setSearchParams] = useSearchParams();
  const lat = searchParams.get("lat");
  const lng = searchParams.get("lng");

  return (
    <div className={styles.mapContainer}>
      <h1>Map</h1>
      <h2>
        Latitude position is {lat} and Longitude position is {lng}
      </h2>
    </div>
  );
}

export default Map;
