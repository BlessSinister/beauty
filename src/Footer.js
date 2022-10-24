import React from "react";
import logo from './img/footer_logo.png'
import insta from './img/footer_insta.png'

class Footer extends React.Component {
    render() {
        return (
            <footer className="container">
                <div className="footer-wrapper">
                    <div className="footer-block-1">
                        <div className="footer-item-1">
                            <div className="footer-img-block">
                                <img src={logo} alt="" />
                            </div>
                            <div className="footer-text-position">
                                <h3 className="footer-h3">Контакты</h3>
                                <p>+7 (812) 123-45-67</p>
                                <p>+7 (911) 123-45-67</p>
                                <p>Новоостровский проспект, дом 36 лит. С</p>
                            </div>
                        </div>
                        <div className="footer-item-2">
                            <div className="footer-text-position">
                                <h3 className="footer-h3-block2">Режим работы</h3>
                                <p>C 10:00 до 21:00 (Пн-Пт)</p>
                                <p>С 11:00 до 20:00 (Сб-Вс)</p>
                            </div>
                            <div className="footer-img-block">
                                <h3 className="footer-h3-block2">Мы в Instagram</h3>
                                <img src={insta} alt="" />
                            </div>
                        </div>
                    </div>
                    <div className="footer-block-2">
                        <p className="footer-copytights">
                            Copyright © 2017 - 2022
                        </p>
                    </div>
                </div>
            </footer>
        )
    }
}
export default Footer