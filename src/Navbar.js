import React from "react";
import insta from './img/header_insta_icon.png'
import logo from './img/header_logo.png'

class Navbar extends React.Component {
    render() {
        return (
            <nav className="container">
                <div className="nav-wrapper">
                    <div className="nav-block-1">
                        <div className="img-1">
                            <img src={insta} alt="" />
                        </div>
                        <ul className="ul-nav-wrapper">
                            <li>Главная</li>
                            <li>Мастера</li>
                            <li>Косметика</li>
                        </ul>
                    </div>
                    <div className="nav-block-2">
                        <div className="img-2">
                            <img src={logo} alt="" />
                        </div>
                        <ul className="ul-nav-wrapper">
                            <li>Акции</li>
                            <li>Отзывы</li>
                            <li>Контакты</li>
                        </ul>
                    </div>
                </div>
            </nav>
        )
    }
}
export default Navbar