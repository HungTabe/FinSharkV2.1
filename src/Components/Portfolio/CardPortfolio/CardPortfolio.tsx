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
    <div className="flex flex-col w-full p-8 space-y-4 text-center rounded-lg shadow-lg md:w-1/3">
      <p className="pt-6 text-xl font-bold">{portfolioValue}</p>
      <DeletePortfolio
        portfolioValue={portfolioValue}
        onPortfolioDelete={onPortfolioDelete}
      />
    </div>
  );
}

export default CardPortfolio