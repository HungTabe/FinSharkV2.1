import React from 'react'
import { testIncomeStatementData } from './TestDataV2'

const data = testIncomeStatementData

type Props = {
};

// This means data from testIncomeStatementData
// testIncomeStatementData is an array of many object
// type define and Company will take the first type 
// object
type Company = (typeof data)[0]

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

// To make table we will make function for Thead and Tbody
// function to generate them

const TableV2 = (props: Props) => {
  const renderedRows = data.map((company) => {
    return (
        <tr key={company.cik} >
            {configs.map((val:any) => {
                return (
                    <td className='p-4 whitespace-nowrap text-sm font-normal text-gray-900 '>
                        {val.render(company)}
                    </td>
                )
            })}
        </tr>
    )
  })//  13/13 in video
  const renderedHeaders = configs.map((config: any) => {
    return (
        <th className='p-4 text-left text-xs font-medium text-gray-500 uppercase ta'
            key={config.label}
        >
            {config.label}
        </th>
    )
  })
  return (
    <div className='bg-white shadow rounded-lg p-4 sm:p6 x' >TableV2</div>
  )
}

export default TableV2