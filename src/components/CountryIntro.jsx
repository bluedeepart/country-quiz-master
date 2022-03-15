import React from "react";
import NotFound from "./NotFound";
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';

const CountryIntro = ({ country }) => {
  if (country) {
    return (
      <div className="country-info-card">
        <div className="country-info-header">
          <div className="country-info-flag">
            <img src={country.flag} alt={country.name} />
            <div className={`tag ${country.independent ? "ind" : "not-ind"}`}>
              {country.independent ? "independent" : "Not Independent"}
            </div>
          </div>
          <div className="country-info-details">
            <h2>{country.name}</h2>
            <p>
              <strong>Capital:</strong> {country.capital}
            </p>
            <p>
              <strong>Native Name:</strong> {country.nativeName}
            </p>
            <p>
              <strong>Region:</strong> {country.region}
            </p>
            <p>
              <strong>Subregion:</strong> {country.subregion}
            </p>
            <p>
              <strong>Population:</strong> {country.population.toLocaleString()}
            </p>
            <p>
              <strong>Calling Codes: </strong>
              {country.callingCodes.map((code) => (
                <span key={code} id={code} className="code">
                  +{code}
                </span>
              ))}
            </p>
            <p>
              <strong>Area:</strong> {country.area} km<sup>2</sup>
            </p>
            <p className="langugae">
              <strong>Languages: </strong>
              {country.languages.map((lang) => (
                <span key={lang.iso639_1} id={lang.iso639_1}>
                  {lang.name}
                </span>
              ))}
            </p>
            <p className="langugae">
              <strong>Currencies: </strong>
              {country.currencies.map((curr) => (
                <span key={curr.code} id={curr.code}>
                  {curr.name} ({curr.symbol})
                </span>
              ))}
            </p>
            {country.borders ? (
              <ul className="border-list">
                <li>
                  <strong>Borders:</strong>
                </li>
                {country.borders.map((border) => (
                  <li key={border} id={border}>
                    {border}
                  </li>
                ))}
              </ul>
            ) : null}
          </div>
        </div>

        <div className="country-info-map">
          <MapContainer
            center={[country.latlng[0], country.latlng[1]]}
            zoom="8"
          >
            <TileLayer
              attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
              url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
            <Marker position={[country.latlng[0], country.latlng[1]]}>
              <Popup>
                A pretty CSS3 popup. <br /> Easily customizable.
              </Popup>
            </Marker>
          </MapContainer>
        </div>
      </div>
    );
  } else {
    console.log("Not Found");
    <NotFound />;
  }
};

export default CountryIntro;
