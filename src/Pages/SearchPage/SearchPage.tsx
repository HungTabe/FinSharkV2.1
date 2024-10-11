import React, { ChangeEvent, SyntheticEvent, useState } from 'react'
import CardList from '../../Components/CartList/CardList';
import ListPortfolio from '../../Components/Portfolio/ListPortfolio/ListPortfolio';
import Search from '../../Components/Search/Search';
import Navbar from '../../Components/Navbar/Navbar';
import { searchCompanies } from '../../api';
import { CompanySearch } from '../../company';

type Props = {}

const SearchPage = (props: Props) => {
  const [search, setSearch] = useState<string>("");
  const [searchResult, setSearchResult] = useState<CompanySearch[]>([]);
  // array to keep PortfolioValues
  const [portfolioValues, setPortfolioValues] = useState<string[]>([]);
  const [serverError, setServerError] = useState<string>("");
  const handleSearchChange = (e: ChangeEvent<HTMLInputElement>): void => {
    setSearch(e.target.value);
    console.log(e);
  };
  const onSearchSubmit = async (e: SyntheticEvent) => {
    e.preventDefault();
    const result = await searchCompanies(search);
    // setSearchResult(result.data) : gay ra loi mismatch type
    if (typeof result === "string") {
      setServerError(result);
    } else if (Array.isArray(result.data)) {
      setSearchResult(result.data);
    }
  };
  const onPortfolioCreate = (e: any): void => {
    e.preventDefault();
    console.log("AAA");
    // Check list đã có value chưa nếu có thì nếu chưa thì
    const exists = portfolioValues?.find(
      (value) => value === e.target[0].value
    );
    if (exists) {
      return;
    } else {
      // nếu tồn tại thì dùng add, ko thì add vào
      // instead of push in old array we can
      // make update array keep new value and old value and then
      // set back to old array
      const updatedPortfolio = [...portfolioValues, e.target[0].value];
      setPortfolioValues(updatedPortfolio);
    }
  };

  // Make logic handle item in here, directly handle with array main data
  const onPortDelete = (e: any) => {
    // difficult to think out type so use any type
    e.preventDefault();
    // make new array without value import to
    const removed = portfolioValues.filter((value) => {
      return value !== e.target[0].value;
    });
    setPortfolioValues(removed);
  };

  return (
    <div className="App">
      {/* <Hero /> */}
      <Search
        onSearchSubmit={onSearchSubmit}
        search={search}
        handleSearchChange={handleSearchChange}
      />
      {/* Import component in to APP */}
      {/* Pass data portfolio value in to Component ListPortfolio */}
      <ListPortfolio
        portfolioValues={portfolioValues}
        onPortfolioDelete={onPortDelete}
      />
      <CardList
        searchResults={searchResult}
        onPortfolioCreate={onPortfolioCreate}
      />
      {serverError && <h1>{serverError}</h1>}
    </div>
  )
}

export default SearchPage