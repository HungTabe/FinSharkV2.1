import React, { SyntheticEvent } from 'react'
import CardPortfolio from '../CardPortfolio/CardPortfolio';

interface Props {
  portfolioValues: string[];
  onPortfolioDelete: (e: SyntheticEvent) => void
}

const ListPortfolio = ({portfolioValues, onPortfolioDelete}: Props) => {
  return (
    <>
    <h3>My Portfolio</h3>
    {/* List portfolio get data and execute conditional rendering */}
    {/* If have we will do logic in {} */}
    {/* execute map and return display component and pass value into it */}
    <ul>
      {portfolioValues &&
        portfolioValues.map((portfolioValues) => {
          return <CardPortfolio portfolioValue={portfolioValues} onPortfolioDelete={onPortfolioDelete}/>
        })
      }
    </ul>
    </>
  );
}

export default ListPortfolio