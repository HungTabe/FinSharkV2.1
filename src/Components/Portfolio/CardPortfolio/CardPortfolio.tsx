import React, { SyntheticEvent } from 'react'
import DeletePortfolio from '../DeletePortfolio/DeletePortfolio';

interface Props {
  // When exe map in PortfolioList then element of array will
  // be seperate each to pass to this component
  portfolioValue: string;
  onPortfolioDelete: (e: SyntheticEvent) => void;
}

const CardPortfolio = ({portfolioValue, onPortfolioDelete}: Props) => {
  return (
  <>
    <h4>{portfolioValue}</h4>
    <DeletePortfolio onPortfolioDelete={onPortfolioDelete}/>
  </>
  );
}

export default CardPortfolio