import React from 'react'
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

const Navbar = () => {
  return (
        <nav className="navbar navbar-expand-lg outline">
            <div className="container fluid">
              <a className="navbar-brand" href="/">
                  <img src="https://static.naimi.kz/j2yoGZ3TxX/img/logo.svg" alt="" width="185px" height="115px" className="d-inline-block align-text-top" />
              </a>
              <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
              </button>
              <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <form className="d-flex ms-auto"  role="search">
                    <button type="button" className="tr-btn">
                    <ExpandMoreIcon className="btn-icon"/>
                      RU
                    </button>
                    <button type="button" className="main-btn">
                      Войти
                    </button>
                </form>
              </div>
            </div>
        </nav>
  )
}

export default Navbar