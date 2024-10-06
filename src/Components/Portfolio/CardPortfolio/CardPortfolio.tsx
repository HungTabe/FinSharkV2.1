import React from 'react'

interface Props {
  // When exe map in PortfolioList then element of array will
  // be seperate each to pass to this component
  portfolioValue: string;
}

const CardPortfolio = ({portfolioValue}: Props) => {
  return (
  <>
    <h4>{portfolioValue}</h4>
    <button>X</button>
  </>
  );
}

export default CardPortfolio