import React from 'react'
import { useGlobalContext } from './Context'

const Pagination = () => {
  const {page, nbPages , getNextPage, getPrevPage} = useGlobalContext();
  return (
    <>
    <div className='pagination_btn'>
      <button className='prxt'  onClick={()=> getPrevPage()}>PREV</button>
      <p className='dock'>{page + 1} of {nbPages}</p>
      <button className='prxt' onClick={()=> getNextPage()}>NEXT_PAGE</button>
      
    </div>
    </>
    
  )
}

export default Pagination
