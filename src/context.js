import React, { useState, useEffect, useContext, useReducer } from 'react'
import axios from 'axios'
import reducer from './reducers/reducer'

// Actions
import { SORT_COUNTRIES, UPDATE_SORT, DATA, SEARCH } from './actions'

const url = 'https://restcountries.eu/rest/v2/all'
const searchURL = 'https://restcountries.eu/rest/v2/name/'

const getLocalStorage = () => {
  let theme = 'light-theme'
  if (localStorage.getItem('theme')) {
    theme = localStorage.getItem('theme')
  }

  return theme
}

const initialState = {
  countries: [],
  filteredCountries: [],
  sort: 'Americas',
}

const AppContext = React.createContext()

const AppProvider = ({ children }) => {
  const [theme, setTheme] = useState(getLocalStorage)
  const [searchTerm, setSearchTerm] = useState('')

  const [state, dispatch] = useReducer(reducer, initialState)

  const fetchData = async () => {
    try {
      if (searchTerm) {
        let searchRes = await axios.get(`${searchURL}${searchTerm}`)
        const data = searchRes.data

        dispatch({ type: SEARCH, payload: data })
      } else {
        let response = await axios.get(url)
        const data = response.data

        dispatch({ type: DATA, payload: data })
      }
    } catch (error) {
      console.log(error)
    }
  }

  const sortData = (e) => {
    let value = e.target.value
    dispatch({ type: UPDATE_SORT, payload: value })
  }

  const toggleTheme = () => {
    if (theme === 'light-theme') {
      setTheme('dark-theme')
    } else {
      setTheme('light-theme')
    }
  }

  useEffect(() => {
    fetchData()

    document.documentElement.className = theme
    localStorage.setItem('theme', theme)
    // eslint-disable-next-line
  }, [searchTerm, theme])

  useEffect(() => {
    dispatch({ type: SORT_COUNTRIES })
  }, [state.sort])

  return (
    <AppContext.Provider
      value={{
        ...state,
        toggleTheme,
        searchTerm,
        setSearchTerm,
        sortData,
      }}
    >
      {children}
    </AppContext.Provider>
  )
}

export const useGlobalContext = () => {
  return useContext(AppContext)
}

export default AppProvider
