import React from 'react'

function Cardeeee({ product }) {
  return (
    <div>

       
          <div className="food-card">
            <img src={product?.img} alt={product?.titel} />
            <div className="food-sec">
              <h4 className="food-title">{product?.titel}</h4>
              <p className="food-desc">{product?.description}</p>
              <button className="food-button">See more</button>
            </div>
          </div>

      </div>
  )
}

export default Cardeeee