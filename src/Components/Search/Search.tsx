import React, { ChangeEvent, useState, MouseEvent, SyntheticEvent } from 'react'

//Define things this component take
interface Props {
  // onClick func take e param and return void
  // Really like at TTA
  onClick: (e: SyntheticEvent) => void
  search: string | undefined
  handleChange: (e: ChangeEvent<HTMLInputElement>) => void
}

// setup prop to pass them down : Pass function and pass value
const Search : React.FC<Props> = ({onClick, search, handleChange}: Props) : JSX.Element => {
  return (
    <div>
    <input type="text" value={search} onChange={(e) => handleChange(e)} />
    <button onClick={(e) => onClick(e)} />
    </div>
  )
}

export default Search