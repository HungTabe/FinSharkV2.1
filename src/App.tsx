import React, { ChangeEvent, SyntheticEvent, useState } from 'react';
import logo from './logo.svg';
import './App.css';
import CardList from './Components/CartList/CardList';
import Search from './Components/Search/Search';
import { CompanySearch } from './company';
import { searchCompanies } from './api';
import { setServers } from 'dns';
import ListPortfolio from './Components/Portfolio/ListPortfolio/ListPortfolio';

function App() {
  const [search, setSearch] = useState<string>("")
  const [portfolioValues, setPortfolioValues] = useState<string[]>([])
  const [searchResult, setSearchResult] = useState<CompanySearch[]>([])
  const [serverError, setServerError] = useState<string>('')
    const handleSearchChange = (e: ChangeEvent<HTMLInputElement>) : void => {
        setSearch(e.target.value);
        console.log(e)
    }
    const onSearchSubmit = async (e: SyntheticEvent) => {
      e.preventDefault()
      const result = await searchCompanies(search);
      // setSearchResult(result.data) : gay ra loi mismatch type
      if(typeof result === 'string'){
        setServerError(result)
      } else if (Array.isArray(result.data)){
        setSearchResult(result.data)
      }
    }
  const onPortfolioCreateApp = (e: any): void => { 
    e.preventDefault()
    const exists = portfolioValues.find((value) => value === e.target[0].value)
    if(exists) {
    const updatedPortfolio = [...portfolioValues, e.target[0].value]
    setPortfolioValues(updatedPortfolio) }
  }

  return (
    <div className="App">
    <Search onSearchSubmit={onSearchSubmit} search={search} handleSearchChange={handleSearchChange}/>
    <ListPortfolio portfolioValues={portfolioValues} />
    <CardList searchResults={searchResult} onPortfolioCreate={onPortfolioCreateApp}/>
    {serverError && <h1>{serverError}</h1>}
    </div>
  );
} 
export default App;
