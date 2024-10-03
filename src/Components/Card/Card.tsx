import React, { SyntheticEvent } from 'react'
// Quick tsrafce to make demo code
import './Card.css'
import { CompanySearch } from '../../company';
import AddPortfolio from '../Portfolio/AddPortfolio/AddPortfolio';
type Props = {
    id: string;
    searchResults: CompanySearch;
    onPortfolioCreate: (e: SyntheticEvent) => void
}

const Card: React.FC<Props> = ({ id, searchResults, onPortfolioCreate }: Props) : JSX.Element => {
  return <div className='card'>
    <img src="https://i.pinimg.com/originals/1c/54/f7/1c54f7b06d7723c21afc5035bf88a5ef.png" alt="Nice Image" />
    <div className='details'>
        <h2>{searchResults.name} ({searchResults.symbol})</h2>
        <p>${searchResults.currency}</p>
    </div>
    <p className='info'>{searchResults.exchangeShortName} - {searchResults.stockExchange}</p>
    <AddPortfolio onPortfolioCreate={onPortfolioCreate} symbol={searchResults.symbol} />
    </div>
}

export default Card