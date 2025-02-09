
import './App.css';
import Navbar from './Navbar'
import CountriesList from './CountriesList'
import countries from './countries.json'

function App() {
  return (
    <div className="App">
      <Navbar />

      <div className="container">
        <div className="row">
          <CountriesList countries={countries} />
          {/* React Router Route rendering the CountryDetails should go here */}
        </div>
      </div>
    </div>

  )
}

export default App;
