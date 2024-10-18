import React from 'react'
import { testIncomeStatementData } from './testData'

// Import and const test data into file
const data = testIncomeStatementData;
type Props = {}

// Lấy type của test data
type Company = (typeof data)[0];

// Stop at 7:31 Table
const Table = (props: Props) => {
  return (
    <div>Table</div>
  )
}

export default Table