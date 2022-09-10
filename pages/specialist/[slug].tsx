import React from 'react'
import MainLayout from '../../layouts/MainLayout'
import { Button } from '../../node_modules/@mui/material/index'
import Link from '../../node_modules/next/link'
import { useRouter } from '../../node_modules/next/router'
import Col from '../../node_modules/react-bootstrap/esm/Col'
import Container from '../../node_modules/react-bootstrap/esm/Container'
import Image from '../../node_modules/react-bootstrap/esm/Image'
import Row from '../../node_modules/react-bootstrap/esm/Row'
import data from '../../utils/data'


const Spectialist = () => {


  return (
    <MainLayout>
      <div className="container pb-4">
          <div className="d-flex start">
              <nav aria-label="breadcrumb">
                  <ol className="breadcrumb">
                      <li className="breadcrumb-item"><a href="/">Главная</a></li>
                      <li className="breadcrumb-item" aria-current="page">User</li>
                  </ol>
              </nav>
          </div>
      </div>
      <Container>
        <Row>
          <Col sm={12} md={7} lg={5} xl={4}>
            <div className="sidebar_menu">
              <div className="avatar_info">
                <img 
                  className='spec_img'
                  src="https://upload.naimi.kz/picture/thumbnail/qRJ23YqyQT0XnCaoV2CBncve63DqMocFCy8NOH29DA9W6cPDkIjN4ZSbyG6WTZ8s5rh3IxTHnLsdzGhtjGEMGOIxVqiWcUNtPZhEiq14D" 
                  alt="Specialist" 
                />
                <h4 className='avatar_name mt-4'>Ришат Юлдашев</h4>
                <p className='text-gray'>29 лет —— в Naimi 3 года 2 мес.</p>
                <div className="medals">
                 🥇 🥇 🥇
                </div>
                <button type="button" className="main-btn mt-4 w-100">
                    Позвонить 
                </button>
              </div>
            </div>
          </Col>
          <Col sm={12} md={5} lg={7} xl={8}>
            <div>
              <div className='spec_gray_text mb-3'>О СЕБЕ</div>
              <p className='card'>Здравствуйте 👩‍🎤 все виды по ремонту 🌈 отделка покраска обой левкас все види по👩‍🎨 ремонту ,,🥳 реставрация деревянные изделия все необходимые инструменты есть сабои</p>
            </div>
            <div>
              <div className='spec_gray_text mt-5 mb-3'>УСЛУГИ И ЦЕНЫ (0)</div>
              <p className='card'>Специалист еще не заполнил этот блок. Вы можете анонимно порекомендовать ему указать эту информацию в анкете, нажав кнопку “Рекомендую заполнить”</p>
              <button type="button" className="tr-blue-btn">Рекомендую заполнить</button>
            </div>
            <div>
              <div className='spec_gray_text mt-5 mb-3'>ОТЗЫВЫ КЛИЕНТОВ (73)</div>
              <p className='card'>Здравствуйте 👩‍🎤 все виды по ремонту 🌈 отделка покраска обой левкас все види по👩‍🎨 ремонту ,,🥳 реставрация деревянные изделия все необходимые инструменты есть сабои</p>
              <button type="button" className="tr-blue-btn">Рекомендую заполнить</button>
            </div>
          </Col>
        </Row>
      </Container>
    </MainLayout>
  )
}

export default Spectialist