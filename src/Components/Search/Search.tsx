import React, { ChangeEvent, useState, MouseEvent, SyntheticEvent } from 'react'

//Define things this component take
interface Props {
  // onClick func take e param and return void
  // Really like at TTA
  onSearchSubmit: (e: SyntheticEvent) => void
  search: string | undefined
  handleSearchChange: (e: ChangeEvent<HTMLInputElement>) => void
}

// setup prop to pass them down : Pass function and pass value
const Search : React.FC<Props> = ({onSearchSubmit, search, handleSearchChange}: Props) : JSX.Element => {
  return (
    // <div>
    // <input type="text" value={search} onChange={(e) => handleChange(e)} />
    // <button onClick={(e) => onClick(e)} />
    // </div>
    // <>
    // <form onSubmit={onSearchSubmit}>
    //   <input value={search} onChange={handleSearchChange} />
    // </form>
    // </>
    <section className="relative bg-gray-100">
      <div className="max-w-4xl mx-auto p-6 space-y-6">
        <form
          className="form relative flex flex-col w-full p-10 space-y-4 bg-darkBlue rounded-lg md:flex-row md:space-y-0 md:space-x-3"
          onSubmit={onSearchSubmit}
        >
          <input
            className="flex-1 p-3 border-2 rounded-lg placeholder-black focus:outline-none"
            id="search-input"
            placeholder="Search companies"
            value={search}
            onChange={handleSearchChange}
          ></input>
        </form>
      </div>
    </section>
  )
}

export default Search