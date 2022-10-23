import React from 'react'
import Navbar from './Navbar'
import headerBtn from './img/header_btn.png'

class Header extends React.Component {
    render() {
        return (
            <header>
                <div className="container">
                    <Navbar />
                    <h1 className='header-hello-block'>
                        Салон красоты <br /> «Delote-Beauty» <br /> на Крестовском
                   </h1>
                      <div className="header-btn-wrapper">
                            <div className="header-btn">
                            <img src={headerBtn} alt="" />
                            <p>
                                Прокрутите вниз
                            </p>
                        </div>
                        </div>
                </div>
            </header>
        )
    }
}
export default Header