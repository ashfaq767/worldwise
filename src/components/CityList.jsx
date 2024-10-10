import CityItem from "./CityItem";
import styles from "./CityList.module.css";
import Spinner from "./Spinner";
import Message from "./Message";

function CityList({ cities, loading }) {
  if (loading) {
    return <Spinner />;
  }
  if (!cities.length) {
    return (
      <Message message="add your first city by clicking the city on the map" />
    );
  }
  console.log(cities[1]);
  return (
    <ul className={styles.cityList}>
      {cities.map((city) => {
        return <CityItem city={city} key={city.id} />;
      })}
    </ul>
  );
}

export default CityList;
