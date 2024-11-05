import React from 'react'
import Table from '../../Components/Table/Table'
import RatioList from '../../Components/RatioList/RatioList'
import { CompanyKeyMetrics } from '../../company'
import { TestDataCompany, testIncomeStatementData } from './TestData'

type Props = {}

const data = TestDataCompany;


//Dummy data
// const tableConfig = [
//   {
//     label: "Market Cap",
//     render: (company: CompanyKeyMetrics) => company.marketCapTTM,
//     subTitle: "Total value of all a company's shares of stock",
//   },
// ]
const tableConfig = [
  {
    label: "symbol",
    render: (company: any) => company.symbol,
  },
];

const DesignPage = (props: Props) => {
  return (
    <>
    <h1>Finshark Design Page</h1>
    <h2>This is finshark design page. This place will hold design</h2>
    <RatioList data={data} config={tableConfig} />
    <Table/>
    </>
)
}

export default DesignPage