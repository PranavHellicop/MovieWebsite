import React from 'react'
import { useApp } from '../context/AppContext'


export const Search = () => {

  const {query,setQuery,isError} = useApp()

  return (
    <section>
    
        <form onSubmit={(e)=>e.preventDefault()}>
        <div className='search-box'>
            <h2>Search for any movie</h2>
            <input 
            type="text"
            value={query}
            onChange={(e)=>setQuery(e.target.value)}
            />
            
    </div>
        </form>
    <div className="error-card">
      <p>{isError.show && isError.msg}</p>
    </div>
    </section>
  )
}
