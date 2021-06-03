import React from 'react'
import styled from 'styled-components'
import { HiOutlineSearch } from 'react-icons/hi'
import { useGlobalContext } from '../context'

function SearchInput() {
  const { searchTerm, setSearchTerm, sort, sortData } = useGlobalContext()

  return (
    <Wrapper>
      <form className="form" onSubmit={(e) => e.preventDefault()}>
        <HiOutlineSearch className="search-icon" />
        <input
          type="text"
          className="form-input"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          placeholder="Search for a country..."
        />
      </form>
      <form className="sort-form">
        <select
          name="sort"
          id="sort"
          value={sort}
          onChange={sortData}
          className="select-form"
        >
          <option value="all">Filter by Region</option>
          <option value="Americas">America</option>
          <option value="Africa">Africa</option>
          <option value="Asia">Asia</option>
          <option value="Europe">Europe</option>
          <option value="Oceania">Oceania</option>
        </select>
      </form>
    </Wrapper>
  )
}

const Wrapper = styled.form`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 4rem;
  flex-wrap: wrap;

  .form,
  .select-form {
    background-color: var(--clr-card-bcg);
    border-radius: 5px;
    box-shadow: 0 0 10px var(--dark-gray);
  }

  .form {
    position: relative;
    padding: 1rem;
    max-width: 400px;
    width: 100%;
    display: flex;
    align-items: center;

    .search-icon {
      color: var(--clr-elements);
      font-size: 1.1rem;
    }

    @media (max-width: 768px) {
      margin-bottom: 2rem;
    }
  }

  .form-input {
    border-color: transparent;
    padding: 0 1rem;
    outline: none;
    background: var(--clr-card-bcg);
    color: var(--clr-elements);
  }

  .form-input::placeholder {
    color: var(--clr-elements);
  }

  /* select */
  .sort-form {
    position: relative;
  }

  .select-form {
    padding: 1rem 1.5rem;
    display: flex;
    align-self: center;
    border-color: transparent;
    outline: none;
    color: var(--clr-elements);
    cursor: pointer;
  }
`

export default SearchInput
