import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'

function CountryList({ countries }) {
  return (
    <Wrapper>
      {countries.map((item, index) => {
        const { flag, name, population, capital, region } = item
        const id = item.callingCodes[0]

        return (
          <div className="card" key={index}>
            <Link to={`/detail/${id}`}>
              <img src={flag} alt={name} />
            </Link>
            <div className="infos">
              <h3>{name}</h3>
              <h6>
                Population: <span>{population}</span>
              </h6>
              <h6>
                Region: <span>{region}</span>
              </h6>
              <h6>
                Capital: <span>{capital}</span>
              </h6>
            </div>
          </div>
        )
      })}
    </Wrapper>
  )
}

const Wrapper = styled.section`
  margin-top: 3rem;
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  column-gap: 2rem;
  gap: 3rem;

  .card {
    max-width: 280px;
    width: 100%;
    background: var(--clr-card-bcg);
    /* box-shadow: 0px 0px 5px var(--dark-gray); */

    img {
      height: 150px;
      width: 100%;
      object-fit: cover;
    }

    .infos {
      padding: 1rem 1.5rem;

      h6 {
        font-size: 0.9rem;
        margin: 0.5rem 0;
        color: var(--clr-font);
        font-weight: 600;
      }

      span {
        font-weight: 300;
        color: var(--clr-elements);
      }
    }

    h3 {
      margin-bottom: 1rem;
      color: var(--clr-font);
    }
  }
`

export default CountryList
