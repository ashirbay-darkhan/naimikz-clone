import React from 'react'
import Link from '../../node_modules/next/link'

const CategoriesItem = ({ category }) => {
  return (
    <div className="blocks">   
      <Link href={`category/${category.slug}`}>
          <a className="block-body">
              <img className='mb-5' src={category.img} alt="" />
              <div className='category-title mb-1'>{category.title}</div>
              <p className="category-description my-2">{category.description}</p>
          </a>
      </Link>   
    </div>
  )
}

export default CategoriesItem