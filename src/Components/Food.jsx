import React from 'react'
import Data from '../Data'

const Food = () => {
  return (
    <div>
      <h2>Food</h2>
      <div className="blog-grid">
        {Data.filter((item) => item.category === "Food").map((item) => (
          <div key={item.id} className="blog-card">
            <img src={item.img_url} alt={item.title} />
            <div className="blog-card-body">
              <h3>{item.title}</h3>
              <p>{item.description.slice(0, 120)}...</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Food