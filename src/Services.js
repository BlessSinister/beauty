import React from "react";
import item1 from './img/services_item1.png'
import item2 from './img/services_item2.png'
import item3 from './img/services_item3.png'
import item4 from './img/services_item4.png'
import item5 from './img/services_item5.png'
import item6 from './img/services_item6.png'

class Services extends React.Component {
    render() {
        return (
            <section className="container">
                <div className="services-wrapper">
                    <div className="services-block1">
                        <div className="services-card-1">
                            <div className="services-item1">
                                <img src={item1} alt="" />
                            </div>
                            <p className="services-item1-text">Парикмахерские услуги</p>
                        </div>
                        <div className="services-card-2">
                            <div className="services-item2">
                                <img src={item2} alt="" />
                            </div>
                            <p className="services-item1-text">Маникюр</p>
                        </div>
                        <div className="services-card-3">
                            <div className="services-item3">
                                <img src={item3} alt="" />
                            </div>
                            <p className="services-item1-text">Педикюр</p>
                        </div>
                    </div>

                    <div className="services-block1">
                        <div className="services-card-1">
                            <div className="services-item1">
                                <img src={item4} alt="" />
                            </div>
                            <p className="services-item1-text">Косметология</p>
                        </div>
                        <div className="services-card-2">
                            <div className="services-item2">
                                <img src={item5} alt="" />
                            </div>
                            <p className="services-item1-text">Эстетист по телу</p>
                        </div>
                        <div className="services-card-3">
                            <div className="services-item3">
                                <img src={item6} alt="" />
                            </div>
                            <p className="services-item1-text">Визаж</p>
                        </div>
                    </div>
                </div>
            </section>
        )
    }
}
export default Services