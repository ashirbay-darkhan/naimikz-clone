import React from 'react'
import Footer from '../components/ui/Footer';
import Navbar from '../components/ui/Navbar';
import Head from '../node_modules/next/head';

interface MainLayoutProps {
    title?: string;
    description?: string;
    keywords?: string;
}

const MainLayout: React.FC<MainLayoutProps> = ({
    children,
    title,
     description,
     keywords
    
}) => {
  return (
    <>
        <Head>
            <title>{title || 'Naimi.kz в Алматы ✔️ бесплатный сервис для поиска специалистов и работы'}</title>
            <meta name="description" content={`Более 1500 услуг в Алматы ⚡ Выбирай и нанимай проверенных специалистов ⚡ Удобный способ заказа услуг в Алматы ⚡ Быстро и качественно с Naimi.kz` + description}/>
            <meta name="robots" content="index, follow"/>
            <meta name="keywords" content={keywords || "Музыка, треки, артисты"}/>
            <meta name="viewport" content="width=device-width, initial-scale=1"/>
        </Head>
        <Navbar />
            {children}
        <Footer />
    </>
  )
}

export default MainLayout