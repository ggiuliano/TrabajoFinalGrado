import React from 'react'

const Categorias = ({ categories, filterItems }) => {
  return (
    <div className="btn-container">
      {categories.map((categoria, index) => {
        return (
          <button
            type="button"
            className="filter-btn"
            key={index}
            onClick={() => filterItems(categoria)}
          >
            {categoria}
          </button>
        )
      })}
    </div>
  )
}

export default Categorias