import React, { useState } from 'react'
import BtnFindCpec from '../common/BtnFindCpec';

const HomeSearch = () => {
    const [searchType, setSearchType] = useState(true)
    

    return (
        <section
            className="p-5 p-lg-0 text-center text-sm-start"
        >
            <div className="container d-flex">
                <div className="d-sm-flex col-md-5 align-items-center justify-content-between">
                    <div className=''>
                        <BtnFindCpec />
                        <h1>Лучшие специалисты <span className="span-primary">в Алматы</span> с отзывами и ценами</h1>

                        <div className='flex'>
                        <form className="d-flex" role="search">
                            <input className="form-control search me-2" type="search" placeholder="Поиск специалистов" aria-label="Search" />
                            <button type="button" className="main-btn search-btn">
                                Оставить&nbsp;заявку 
                            </button>
                        </form>
                        </div>  
                    </div>
                </div>
                <div className='d-sm-flex col-md-7'>
                    <div className='slider'>
                        <img
                            className="img-fluid  d-none d-md-block"
                            src="https://static.naimi.kz/j2yoGZ3TxX/site_img/main-page/specialist_1.png"
                            alt=""
                        />
                    </div>
                </div>
            </div>
        </section>
    )
}

export default HomeSearch