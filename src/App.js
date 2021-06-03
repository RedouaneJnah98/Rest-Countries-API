import './App.css'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import { Header, Home } from './components'
import AppProvider from './context'
import SignleCountry from './page/SingleCountry'

function App() {
  return (
    <AppProvider>
      <Header />
      <Router>
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/detail/:id" children={<SignleCountry />} />
        </Switch>
      </Router>
    </AppProvider>
  )
}

export default App
