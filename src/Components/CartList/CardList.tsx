import React from 'react'
import Card from '../Card/Card'

interface Props {}

const CardList : React.FC<Props> = (props: Props) : JSX.Element => {
  return <div>
    <Card companyName='Apple' ticker='AAPL' price={100} />
    <Card companyName='MSFT' ticker='MSFT' price={200}/>
    <Card companyName='Tesla' ticker='TSLA' price={150}/>
  </div>
}

export default CardList