import React from 'react'
import Link from '../../node_modules/next/link'

const SubCatList = ({ sub_cat_main }) => {
  console.log(sub_cat_main.service);


  return (
    <ul className='cat-subservices'>
      <li className='mb-1'>
            <Link href={`/service/${sub_cat_main.slug}`}>
                <a>{sub_cat_main.title}</a>
            </Link>
        </li>
        {/* {sub_cat_main.map(sub_cat => 
            <li className='mb-1'>
                <Link href={`/service/${sub_cat.title}`}>
                    <a>{sub_cat.title}</a>
                </Link>
            </li>
        )} */}
    </ul>
  )
}

export default SubCatList