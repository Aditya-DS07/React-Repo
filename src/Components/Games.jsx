import React from 'react'
import Data from '../Data'

const Games = () => {
  return (
    <div>
      <h2>Hollywood</h2>
      <div className="blog-grid">
        {Data.filter((item) => item.category === "Hollywood").map((item) => (
          <div key={item.id} className="blog-card">
            <img src={item.img_url} alt={item.title} />
            <div className="blog-card-body">
              <h3>{item.title}</h3>
              <p>{item.description.slice(0, 120)}...</p>
              {item.rating && <p><b>Rating:</b> {item.rating}</p>}
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Games