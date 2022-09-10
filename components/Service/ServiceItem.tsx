import React from 'react'
import Link from '../../node_modules/next/link'
import LocationOnIcon from '@mui/icons-material/LocationOn';

const ServiceItem = ({ service }) => {
  return (
    <div className="blocks">   
      <Link href={`/specialist/${service.slug}`}>
          <a className="block-body">
            <div className='d-flex card_header'>
              <img className='mb-5 service_img' src="https://upload.naimi.kz/picture/thumbnail/qRJ23Kbx1ppUy2i9QicuxnzCKZ7yStE7pjIJl1CcPa99IkcitlmD4jtPGEnlLRbPJqzojYrtUUuDhfZUmzTikuptlhuLTTJab9Qj8JeHs" alt="Image" />
                <div className='serv_info'>
                    <p className='serv_name'>Дамели&nbsp;<span className='rev'>(29&nbsp;отзывова)</span></p>
                    <div className='serv_location mt-1'>
                      <LocationOnIcon fontSize="small" />
                      0.8 км от вас
                    </div>
                </div>
            </div>
            <div className='mb-1 serv_descr'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Laboriosam eos delectus repudiandae omnis accusamus ut!</div>
          </a>
      </Link>
    </div>
  )
}

export default ServiceItem