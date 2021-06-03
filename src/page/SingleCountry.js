import React, { useState, useEffect } from 'react'
import styled from 'styled-components'
import axios from 'axios'
import { useParams } from 'react-router-dom'
import { Link } from 'react-router-dom'
import { BsArrowLeft } from 'react-icons/bs'

const endPoint = 'https://restcountries.eu/rest/v2/callingcode/'

function SingleCountry() {
  const { id } = useParams()
  const [country, setCountry] = useState([])

  useEffect(() => {
    async function getData() {
      try {
        const response = await axios.get(`${endPoint}${id}`)
        const data = response.data[0]
        if (data) {
          const { name, population, flag, capital, region, subregion } = data

          const { name: currency } = data.currencies[0]
          const nativeName = data.altSpellings[1]
          const borders = data.borders
          const levelDomain = data.topLevelDomain[0]
          const languages = data.languages.map((item) => item.name)

          const newData = {
            name,
            population,
            flag,
            capital,
            region,
            subregion,
            currency,
            nativeName,
            borders,
            levelDomain,
            languages,
          }

          setCountry(newData)
        }
      } catch (error) {
        console.log(error)
      }
    }

    getData()
  }, [id])

  if (country.length) {
    return <h4>Ooops... there is no data about this country!!</h4>
  }

  const {
    name,
    population,
    flag,
    capital,
    region,
    subregion,
    currency,
    nativeName,
    borders,
    languages,
    levelDomain,
  } = country

  return (
    <Wrapper className="section-center">
      <div className="btn-container">
        <Link to="/" className="btn">
          <BsArrowLeft className="icon" />
          Back
        </Link>
      </div>
      <Container>
        <div className="img-container">
          <img src={flag} alt="name" />
        </div>
        <CountryInfo>
          <h3 className="title">{name}</h3>
          <Infos>
            <div>
              <p>
                Native Name: <span>{nativeName}</span>
              </p>
              <p>
                Population: <span>{population}</span>
              </p>
              <p>
                Region: <span>{region}</span>
              </p>
              <p>
                Sub Region: <span>{subregion}</span>
              </p>
              <p>
                Capital: <span>{capital}</span>
              </p>
            </div>
            <div>
              <p>
                Top Level Domain: <span>{levelDomain}</span>
              </p>
              <p>
                Currencies: <span>{currency}</span>
              </p>
              <p>
                Languages:
                <span> {languages && languages.join(', ')} </span>
              </p>
            </div>
          </Infos>
          <div className="border-country">
            <p>Border Countries:</p>
            <div className="container">
              {borders &&
                borders.map((item, index) => {
                  return (
                    <button key={index} className="countries-btn">
                      {item}
                    </button>
                  )
                })}
            </div>
          </div>
        </CountryInfo>
      </Container>
    </Wrapper>
  )
}

const Wrapper = styled.section`
  .btn-container {
    display: inline-block;
    margin-top: 5rem;
  }
  .btn {
    display: flex;
    align-items: center;
    justify-content: center;
    text-decoration: none;
    color: var(--clr-font);
    font-weight: 600;
    background: var(--clr-bcg);
    padding: 0.5rem 2rem;
    border-radius: 4px;
    box-shadow: 0 0 10px var(--dark-gray);
  }

  .icon {
    margin-right: 0.5rem;
    font-size: 1.1rem;
  }

  @media (max-width: 768px) {
    padding: 4rem 0;
  }
`

const Container = styled.article`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(400px, 1fr));
  align-items: center;
  row-gap: 2rem;
  margin-top: 3rem;

  .img-container {
    max-width: 500px;

    img {
      width: 100%;
    }
  }
`

const CountryInfo = styled.article`
  .title {
    margin-bottom: 1.5rem;
    font-size: 2rem;
    font-weight: 800;
    color: var(--clr-font);
  }

  p {
    font-weight: 700;
    color: var(--clr-font);
    font-size: 0.85rem;
    margin: 0.5rem 0;
  }

  span {
    font-weight: normal;
    color: var(--clr-elements);
  }

  .border-country {
    display: flex;
    align-items: center;
    flex-wrap: wrap;
    margin-top: 3.5rem;

    p {
      margin-right: 1rem;
    }
  }

  button {
    border-color: transparent;
    background: var(--clr-card-bcg);
    color: var(--clr-elements);
    margin: 0 0.2rem;
    box-shadow: 0 0 5px var(--dark-gray);
    border-radius: 4px;
    padding: 0.25rem 1.5rem;
  }

  @media (max-width: 768px) {
    button {
      margin-top: 0.5rem;
    }
  }
`

const Infos = styled.main`
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
`

export default SingleCountry
