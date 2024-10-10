import CountryItem from "./CountryItem";
import styles from "./CountryList.module.css";
import Spinner from "./Spinner";
import Message from "./Message";

function CountryList({ cities, loading }) {
  if (loading) {
    return <Spinner />;
  }
  if (!cities.length) {
    return (
      <Message message="add your first city by clicking the city on the map" />
    );
  }

  const countries = cities.reduce((arr, city) => {
    if (!arr.map((el) => el.country).includes(city.country)) {
      return [...arr, { country: city.country, emoji: city.emoji }];
    } else {
      return arr;
    }
  }, []);

  console.log(cities[1]);
  return (
    <ul className={styles.countryList}>
      {countries.map((country) => {
        return <CountryItem country={country} />;
      })}
    </ul>
  );
}

export default CountryList;
