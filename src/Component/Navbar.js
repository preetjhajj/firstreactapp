import React from 'react'

const Navbar = ({filteritem, MenuList}) => {
  return (
    <>
      <nav>
        <div className='nav__wrap'>
          {MenuList.map((elemE) => {
            return <button onClick={() => filteritem(elemE)}>{elemE}</button>
          })}
        </div>
      </nav>
    </>
  )
}

export default Navbar