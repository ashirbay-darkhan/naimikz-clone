import React from 'react'
import ServiceItem from '../../components/Service/ServiceItem'
import MainLayout from '../../layouts/MainLayout'
import { useRouter } from '../../node_modules/next/router'
import data from '../../utils/data'

const Service = () => {
    
    const { query } = useRouter()
    const { slug } = query
    const service = data.sub_cat_main.find(x => x.slug === slug)

    if (!service) {
        return <div>No service found</div>
    }

    return (
        <>
            <MainLayout>
            <div className="container pb-4">
                <div className="d-flex start">
                    <nav aria-label="breadcrumb">
                        <ol className="breadcrumb">
                            <li className="breadcrumb-item"><a href="/">Главная</a></li>
                            <li className="breadcrumb-item" aria-current="page">{service.title}</li>
                        </ol>
                    </nav>
                </div>
            </div>
            <div className="wrapper-grid">
                <div className="container">
                    <h1>{service.title} - специалисты <span className="span-primary">в Алматы</span></h1>
                    <div className='card-grid pt-4'>
                        {data.sub_cat.map(service => 
                            <ServiceItem service={service} key={service.p_id} />
                        )}
                    </div>
                </div>
            </div>
            </MainLayout>
        </>
    )
}

export default Service