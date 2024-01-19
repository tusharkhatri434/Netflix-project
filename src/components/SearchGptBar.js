import React from 'react'

const SearchGptBar = () => {
  return (
    <div className='p-5 flex justify-center'>
        <form className='border-2 border-solid border-white'>
            <input type='text' placeholder='What would you like to watch today ?'></input>
            <button>Submit</button>
        </form>
    </div>
  )
}

export default SearchGptBar