import React, { useEffect, useState } from 'react';
import api from 'src/api';
import { useParams, NavLink } from 'react-router-dom';
import { numberFormat, extractLanguagesNames } from '../utils';

const FlagDetail = () => {
  const { codeCountry } = useParams();
  const [countryData, setCountryData] = useState({});

  const fetchFlagDetail = async (code) => {
    try {
      const res = await api.get(`/alpha/${code}`);
      const flag = res.data;
      setCountryData(flag);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    fetchFlagDetail(codeCountry);
  }, [codeCountry]);

  const {
    name,
    population,
    flag,
    region,
    subregion: subRegion,
    capital,
    topLevelDomain,
    languages,
    currencies,
    borders,
  } = countryData;

  return (
    <main className="detail-container">
      <NavLink to="/">
        <button type="button" className="detail-container__btn-go-back">
          <i className="fas fa-long-arrow-alt-left" /> Back
        </button>
      </NavLink>
      <article className="detail-container__country-detail">
        <img
          className="detail-container__country-detail--img"
          src={flag}
          alt={`drapeau de ${name}`}
        />
        <div className="detail-container__country-detail--text">
          <h1>{name}</h1>
          <div className="data">
            <div className="data__details-left">
              <div className="country-detail">
                <p className="country-detail--title">Native name: </p>
                <p>{name}</p>
              </div>
              <div className="country-detail">
                <p className="country-detail--title">Population: </p>
                <p>{numberFormat(population)}</p>
              </div>

              <div className="country-detail">
                <p className="country-detail--title">Region: </p>
                <p>{region}</p>
              </div>

              <div className="country-detail">
                <p className="country-detail--title">Sub Region: </p>
                <p>{subRegion}</p>
              </div>

              <div className="country-detail">
                <p className="country-detail--title">Capital: </p>
                <p>{capital}</p>
              </div>
            </div>
            <div className="data__details-right">
              <div className="country-detail">
                <p className="country-detail--title">Top Level Domain: </p>
                <p>{topLevelDomain}</p>
              </div>

              <div className="country-detail">
                <p className="country-detail--title">Currencies: </p>
                {currencies?.map((element) => (
                  <p key={element.code}>{element.name}</p>
                ))}
              </div>

              <div className="country-detail">
                <p className="country-detail--title">Languages: </p>
                <p>{extractLanguagesNames(languages)}</p>
              </div>
            </div>
          </div>
          <aside className="border-country">
            <p className="border-country--title">Border Countries:</p>
            {borders?.map((element) => (
              <NavLink to={`/flag/${element}`}>
                <button className="border-country--btn" key={element}>
                  {element}
                </button>
              </NavLink>
            ))}
          </aside>
        </div>
      </article>
    </main>
  );
};

export default FlagDetail;
