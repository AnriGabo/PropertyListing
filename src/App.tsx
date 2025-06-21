import { useState } from 'react'
import './App.css'
import HeaderBackground from './components/backgroundImage/HeaderBackground'
import FilterBarList from './components/filterBar/FilterBarList'

function App() {
  const [country, setCountry] = useState<string>("")
  
  console.log(country)
  return (
    <div className='All__Wrapper'>
      <HeaderBackground />
      <FilterBarList chooseCountry={country} updateCountry={setCountry} />
    </div>
  )
}

export default App


