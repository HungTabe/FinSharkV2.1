import React from 'react'
// Quick tsrafce to make demo code
import './Card.css'
type Props = {
    companyName: string;
    ticker: string;
    price: number;
}

const Card = ({ companyName, ticker, price}: Props) => {
  return <div className='card'>
    <img src="https://i.pinimg.com/originals/1c/54/f7/1c54f7b06d7723c21afc5035bf88a5ef.png" alt="Nice Image" />
    <div className='details'>
        <h2>{companyName} ({ticker})</h2>
        <p>${price}</p>
    </div>
    <p className='info'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis deleniti quas magni expedita modi praesentium, molestiae exercitationem rem sunt natus iste asperiores, rerum numquam, similique laudantium perferendis a? Adipisci, iste.</p>
    </div>
}

export default Card