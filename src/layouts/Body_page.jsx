import React from 'react'

function Body_page({children}) {
  return (
    <div className='space-y-6  h-[86vh] overflow-y-auto scroll-hidden '>
      {children}
    </div>
  )
}

export default Body_page
