import React, { SyntheticEvent } from 'react'
import CardPortfolio from '../CardPortfolio/CardPortfolio';

interface Props {
  portfolioValues: string[];
  onPortfolioDelete: (e: SyntheticEvent) => void
}

const ListPortfolio = ({portfolioValues, onPortfolioDelete}: Props) => {
  return (
    // <>
    // <h3>My Portfolio</h3>
    // {/* List portfolio get data and execute conditional rendering */}
    // {/* If have we will do logic in {} */}
    // {/* execute map and return display component and pass value into it */}
    // <ul>
    //   {portfolioValues &&
    //     portfolioValues.map((portfolioValues) => {
    //       return <CardPortfolio portfolioValue={portfolioValues} onPortfolioDelete={onPortfolioDelete}/>
    //     })
    //   }
    // </ul>
    // </>
    <section id="portfolio">
      <h2 className="mb-3 mt-3 text-3xl font-semibold text-center md:text-4xl">
        My Portfolio
      </h2>
      <div className="relative flex flex-col items-center max-w-5xl mx-auto space-y-10 px-10 mb-5 md:px-6 md:space-y-0 md:space-x-7 md:flex-row">
        <>
          {portfolioValues.length > 0 ? (
            portfolioValues.map((portfolioValue) => {
              return (
                <CardPortfolio
                  portfolioValue={portfolioValue}
                  onPortfolioDelete={onPortfolioDelete}
                />
              );
            })
          ) : (
            <h3 className="mb-3 mt-3 text-xl font-semibold text-center md:text-xl">
              Your portfolio is empty.
            </h3>
          )}
        </>
      </div>
    </section>
  );
}

export default ListPortfolio