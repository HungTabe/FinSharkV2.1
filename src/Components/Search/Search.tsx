import React, { ChangeEvent, useState, MouseEvent, SyntheticEvent } from 'react'

type Props = {}

const Search : React.FC<Props> = (props: Props) : JSX.Element => {
    const [search, setSearch] = useState<string>("")
    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
        setSearch(e.target.value);
        console.log(e)
    }
    const onClickA = (e: SyntheticEvent) => {
      console.log(e)
    }
  return (
    <div>
    <input type="text" value={search} onChange={(e) => handleChange(e)} />
    <button onClick={(e) => onClickA(e)} />
    </div>
  )
}

export default Search