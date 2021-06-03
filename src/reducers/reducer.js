import { SORT_COUNTRIES, UPDATE_SORT, DATA, SEARCH } from '../actions'

const reducer = (state, action) => {
  if (action.type === DATA) {
    return {
      ...state,
      countries: action.payload,
      filteredCountries: action.payload,
    }
  }
  if (action.type === SEARCH) {
    return { ...state, countries: action.payload }
  }

  if (action.type === UPDATE_SORT) {
    return { ...state, sort: action.payload }
  }
  if (action.type === SORT_COUNTRIES) {
    const { sort, filteredCountries, countries } = state
    let tempCountries = [...filteredCountries]

    if (sort === 'Americas') {
      tempCountries = tempCountries.filter((item) => item.region === 'Americas')
    }
    if (sort === 'Africa') {
      tempCountries = tempCountries.filter((item) => item.region === 'Africa')
    }
    if (sort === 'Asia') {
      tempCountries = tempCountries.filter((item) => item.region === 'Asia')
    }
    if (sort === 'Europe') {
      tempCountries = tempCountries.filter((item) => item.region === 'Europe')
    }
    if (sort === 'Oceania') {
      tempCountries = tempCountries.filter((item) => item.region === 'Oceania')
    }

    return { ...state, countries: tempCountries }
  }

  return state
}

export default reducer
