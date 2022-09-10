import React from 'react'
import data from '../../utils/data'
import CategoriesItem from './CategoriesItem'

const Categories = () => {
  return (
    <section id="home" className="categories-section">
        <div className="container">
            <h1>Услуги по категориям в Алматы</h1>
            <div className="card-grid">
                {data.categories.map(category => 
                    <CategoriesItem category={category} key={category.id} />
                )}
            
                <div className="blocks">
                    <a href='/' className="block-body">
                        <div className='category-title pt-2 mb-1'>Более 180 000 мастеров с отзывами</div>
                        <button type="button" className="main-btn search-btn mt-4 w-100">
                            Создать&nbsp;заказ 
                        </button>
                    </a>
                </div>
                
            </div>
        </div>
    </section>
  )
}

export default Categories