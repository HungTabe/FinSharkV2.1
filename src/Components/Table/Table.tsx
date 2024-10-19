import React from 'react'
import { testIncomeStatementData } from './testData'

// Import and const test data into file
const data = testIncomeStatementData;
type Props = {}

// Lấy type của test data
type Company = (typeof data)[0];

// Stop at 7:31 Table

const configs = [
  {
    label: "Year",
    render: (company: Company) => company.acceptedDate
  },
  {
    label: "Cost of Revenue",
    render: (company: Company) => company.costOfRevenue
  }
]
const Table = (props: Props) => {
  const renderedRow = data.map((company) => {
    return (
      <tr key={company.cik}>
        {configs.map((val:any) => {
          return (
            <td className='p-4 whitespace-nowrap text-sm font-normal text-gray-900'>
              {val.render(company)}
            </td>
          )
        })}
      </tr>
    )
  })
  return (
    <div>Table</div>
  )
}

export default Table