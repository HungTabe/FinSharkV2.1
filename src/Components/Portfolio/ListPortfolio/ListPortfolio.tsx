import React from 'react'
import CardList from '../../CartList/CardList';
import CardPortfolio from '../CardPortfolio/CardPortfolio';

interface Props {
  portfolioValues: string[]; //STOP AT THIS 7:26
}

const ListPortfolio = ({portfolioValues}: Props) => {
  return <>
  <h3>My Portfolio</h3>
  <ul>
  {portfolioValues &&
  portfolioValues.map((portfolioValues) => {
    return <CardPortfolio portfolioValue={portfolioValues}/>
  })
  }
  </ul>
  </>;
}

export default ListPortfolio