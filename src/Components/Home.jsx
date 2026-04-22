import React from 'react'
import Data from '../Data'

const Home = () => {
  return (
    <div>
      <h2>All Blogs</h2>
      <div className="blog-grid">
        {Data.map((item) => (
          <div key={item.id} className="blog-card">
            <img src={item.img_url} alt={item.title} />
            <div className="blog-card-body">
              <h3>{item.title}</h3>
              <p>{item.description.slice(0, 120)}...</p>
              {item.rating && <p><b>Rating:</b> {item.rating}</p>}
              <p><b>Category:</b> {item.category}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Home