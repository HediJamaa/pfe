import React from 'react'

function Cardpost({ product }) {
  return (
    <div>


      <div className="food-card">
        <img src={product?.img} alt={product?.titel} />
        <div className="food-sec">
          <h4 className="food-title">{product?.title}</h4>
          <p className="food-desc">{product?.content}</p>
          <p className="food-desc">{product?.Crea}</p>
        </div>
      </div>

    </div>
  )
}

export default Cardpost