import React, { useState } from 'react'

const BtnFindCpec = () => {
    const [searchType, setSearchType] = useState(true)
    
    return (
    <div className="d-flex">
        <button 
            className={searchType ? 'spec-btn active' : 'spec-btn'}
            onClick={() => setSearchType(true)}
        >
            Найти&nbsp;специалиста
        </button>
        <button 
            className={searchType ? 'spec-btn' : 'spec-btn active'}
            onClick={() => setSearchType(false)}
        >
            Найти&nbsp;работу
        </button>
    </div>
    )
}

export default BtnFindCpec