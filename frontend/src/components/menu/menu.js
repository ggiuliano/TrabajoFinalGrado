import React from 'react'

const ElMenu = ({ items }) => {
    return (
      <div className="section-center">
        {items.map((menuItem) => {
          const { id, plato, precio, descripcion } = menuItem
          return (
            <article key={id} className="menu-item">
              <div className="item-info">
                <header>
                  <h4>{plato}</h4>
                  <h4 className="precio">N{precio}</h4>
                </header>
                <p className="item-text">{descripcion}</p>
              </div>
            </article>
          )
        })}
      </div>
    )
  }
  
  export default ElMenu