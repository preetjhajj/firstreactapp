import React from 'react'

const Foodcard = ({MenuData}) => {
  return (
    <>
      <div className='food__section'>
        <div className='container'>
          <div className='food__sec--inner'>
            {MenuData.map((dish) => {
              return <>
                <div className='footer_innerblock' key={dish.sno}>
                  <span className='num'>{dish.sno}</span>
                  <h2 className='title'>{dish.title}</h2>
                  <span className='category'>{dish.category}</span>
                  <p className='desc'>{dish.description}</p>
                  <img src={dish.image} alt='Prantha' />
                  <button>Order Now</button>
                </div>
              </>
            })
            }
          </div>
        </div>
      </div>
    </>
  )
}

export default Foodcard