import React from 'react'
import CardPortfolio from '../CardPortfolio/CardPortfolio';

interface Props {
  portfolioValues: string[];
}

const ListPortfolio = ({portfolioValues}: Props) => {
  return (
    <>
    <h3>My Portfolio</h3>
    {/* List portfolio get data and execute conditional rendering */}
    {/* If have we will do logic in {} */}
    {/* execute map and return display component and pass value into it */}
    <ul>
      {portfolioValues &&
        portfolioValues.map((portfolioValues) => {
          return <CardPortfolio portfolioValue={portfolioValues}/>
        })
      }
    </ul>
    </>
  );
}

export default ListPortfolio