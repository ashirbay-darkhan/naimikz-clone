import React from 'react'
import data from '../../utils/data'
import ServiceItem from './ServiceItem'

const ServiceList = () => {
  return (
    <section id="home" className="categories-section">
        <div className="container">
            <h1>Услуги по категориям в Алматы</h1>
            <div className="categories">
                {data.sub_cat.map(service => 
                    <ServiceItem service={service} key={service.p_id} />
                )}
                <div className="blocks">
                    <a href='/' className="block-body">
                        <div className='category-title pt-2 mb-1'>Более 180 000 мастеров с отзывами</div>
                        <button type="button" className="main-btn search-btn mt-4">
                            Создать&nbsp;заказ 
                        </button>
                    </a>
                </div>
            </div>
        </div>
    </section>
  )
}

export default ServiceList