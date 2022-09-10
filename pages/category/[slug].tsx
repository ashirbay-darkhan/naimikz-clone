import React, { useState } from 'react'
import SubCatList from '../../components/categories/SubCatList'
import BtnFindCpec from '../../components/common/BtnFindCpec'
import MainLayout from '../../layouts/MainLayout'
import Link from '../../node_modules/next/link'
import { useRouter } from '../../node_modules/next/router'
import Col from '../../node_modules/react-bootstrap/esm/Col'
import Container from '../../node_modules/react-bootstrap/esm/Container'
import Row from '../../node_modules/react-bootstrap/esm/Row'
import data from '../../utils/data'

const CategoryPage = () => {

    const router = useRouter()
    const { query } = useRouter()
    const { slug } = query
    const category = data.categories.find(x => x.slug === slug)
    
     

    if (!category) {
        return <div>Category not found</div>
    }

    let activeLink = 'sidebar-link active-link'

    return (
        <>
        <MainLayout>
            <div className="container pb-4">
                <div className="d-flex start">
                    <nav aria-label="breadcrumb">
                        <ol className="breadcrumb">
                            <li className="breadcrumb-item"><a href="/">Главная</a></li>
                            <li className="breadcrumb-item" aria-current="page">{category.title}</li>
                        </ol>
                    </nav>
                </div>
            </div>
            <Container>
                <Row>
                    <Col sm={12} md={6} lg={5} xl={4}>
                    <div className="sidebar-menu">
                        <div className="categories-list-menu">
                            <ul className='text'>
                                {data.categories.map(cat => 

                                    <li className='mb-3'>
                                        <Link href={cat.slug}>
                                            <a className={(cat.id === category.id)? activeLink : 'sidebar-link'}>{cat.title}</a>
                                        </Link>
                                        <div className='sidbar-spec'>{cat.spec_count} специалистов</div>
                                    </li>
                                )}
                            </ul>
                        </div>
                        <div className="categories-info">
                            categories-info
                        </div>
                    </div>
                    </Col>
                    <Col sm={12} md={6} lg={7} xl={8}>
                    <div className="categories-list pl-5">
                        <BtnFindCpec />
                        <h1 className='w-100'>{category.title} <span className="span-primary">в Алматы</span></h1>
                        
                        {/* {data.sub_cat.map(services => 
                        <>
                            <h4 className='cat_sub_title mt-3'>{services.main_title}</h4>
                            <div className='sidbar-spec mb-3'>{services.spec_count}</div>
                            <ul className='cat-subservices'>
                                <li className='mb-1'><a href="#">{services.title}</a></li>
                            </ul>
                        </>
                        )} */}

                        <h4 className='cat_sub_title mt-3'>Маляры и штукатуры</h4>
                        <div className='sidbar-spec mb-3'>2003  специалиста</div>

                        {data.sub_cat_main.map((sub_cat_main) => 
                        <>
                            <SubCatList sub_cat_main={sub_cat_main} />
                        </>
                        )}
                    </div>
                    </Col>
                </Row>
            </Container>
                
        </MainLayout>
        </>
            
    )
}

export default CategoryPage