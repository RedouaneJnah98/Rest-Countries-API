import React from 'react'
import Search from './SearchInput'
import { useGlobalContext } from '../context'
import CountryList from './CountryList'

function Home() {
  const { countries } = useGlobalContext()

  return (
    <div className="section-center">
      <Search />
      <CountryList countries={countries} />
    </div>
  )
}

export default Home
