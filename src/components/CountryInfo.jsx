import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import CountryIntro from "./CountryIntro";
import Loading from "./Loading";
import NotFound from "./NotFound";

const CountryInfo = () => {
  const [restcountriesData, setRestcountriesData] = useState([]);
  const [isNotFound, setIsNotFound] = useState(false);

  const { countryInfo } = useParams();

  const url = `https://restcountries.com/v2`;

  useEffect(() => {
    const fetchcountriesData = async () => {
      let countryName = countryInfo.split("-").join(" ");
      const res = await fetch(`${url}/name/${countryName}?fullText=true`);
      const data = await res.json();
      if (data.message === "Not Found") {
        setIsNotFound(true);
      } else {
        setRestcountriesData(data.filter((item) => item.name === countryName));
      }
    };
    fetchcountriesData();

    //eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  if (isNotFound) {
    return <NotFound />;
  }

  return (
    <>
      {restcountriesData.length === 0 ? (
        <>
          <div
            className="country-info-card loading-card"
            style={{ display: "flex" }}
          >
            <Loading />
          </div>
        </>
      ) : (
        <>
          {restcountriesData.map((country) => (
            <CountryIntro country={country} key={country.callingCodes} />
          ))}
        </>
      )}
    </>
  );
};

export default CountryInfo;
