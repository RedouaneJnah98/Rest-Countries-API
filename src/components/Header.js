import React from 'react'
import styled from 'styled-components'
import { IoMoonOutline } from 'react-icons/io5'
import { useGlobalContext } from '../context'

function Header() {
  const { toggleTheme } = useGlobalContext()

  return (
    <Wrapper>
      <nav className="section-center navbar">
        <h1 className="logo">Where in the world?</h1>
        <button type="button" onClick={() => toggleTheme()}>
          <IoMoonOutline className="icon" /> Dark Mode
        </button>
      </nav>
    </Wrapper>
  )
}

const Wrapper = styled.header`
  height: 70px;
  background: var(--clr-card-bcg);
  box-shadow: 0 0px 15px var(--dark-gray);

  .navbar {
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 100%;

    .logo {
      font-weight: 800;
      font-size: 1.5rem;
      color: var(--clr-elements);
    }
  }

  button {
    background: transparent;
    border-color: transparent;
    display: flex;
    align-items: center;
    cursor: pointer;
    font-weight: 600;
    color: var(--clr-font);
  }

  .icon {
    margin-right: 0.5rem;
  }

  @media (max-width: 768px) {
    .navbar {
      .logo {
        font-size: 1.2rem;
      }
    }
  }
`

export default Header
