import React from "react";
import ourWorks1 from './img/ourWorks_item1.png'
import ourWorks2 from './img/ourWorks_item2.png'
import ourWorks3 from './img/ourWorks_item3.png'
import ourWorks4 from './img/ourWorks_item4.png'
import ourWorks5 from './img/ourWorks_item5.png'
import ourWorks6 from './img/ourWorks_item6.png'
import ourWorks7 from './img/ourWorks_item7.png'
import ourWorks8 from './img/ourWorks_item8.png'
import ourWorks9 from './img/ourWorks_item9.png'

class OurWorks extends React.Component {
    render() {
        return (
            <section className="container">
                <div className="ourWorks-wrapper">
                    <h2 className="ourWorks-h2">
                        Наши работы
                    </h2>
                    <ul className="ourWorks-ul-wrapper">
                        <li>Показать все</li>
                        <li>Парикмахерские услуги</li>
                        <li>Маникюр</li>
                        <li>Педикюр</li>
                    </ul>
                    <div className="ourWorks-item-wrapper">
                        <div className="ourWorks-item">
                            <img src={ourWorks1} alt="" />
                        </div>
                        <div className="ourWorks-item">
                            <img src={ourWorks2} alt="" />
                        </div>
                        <div className="ourWorks-item">
                            <img src={ourWorks3} alt="" />
                        </div>
                    </div>
                    <div className="ourWorks-item-wrapper">
                        <div className="ourWorks-item">
                            <img src={ourWorks4} alt="" />
                        </div>
                        <div className="ourWorks-item">
                            <img src={ourWorks5} alt="" />
                        </div>
                        <div className="ourWorks-item">
                            <img src={ourWorks6} alt="" />
                        </div>
                    </div>
                    <div className="ourWorks-item-wrapper">
                        <div className="ourWorks-item">
                            <img src={ourWorks7} alt="" />
                        </div>
                        <div className="ourWorks-item">
                            <img src={ourWorks8} alt="" />
                        </div>
                        <div className="ourWorks-item">
                            <img src={ourWorks9} alt="" />
                        </div>
                    </div>
                </div>
            </section>
        )
    }
}
export default OurWorks