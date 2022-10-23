import React from "react";
import cosmeticsItem1 from './img/cosmetics_item1.png'
import cosmeticsItem2 from './img/cosmetics_item2.png'
import cosmeticsItem3 from './img/cosmetics_item3.png'
import cosmeticsItem4 from './img/cosmetics_item4.png'
class Cosmetics extends React.Component {
    render() {
        return (
            <section className="container">
                <div className="cosmetics-wrapper">
                    <div className="cosmetics-item">
                        <img src={cosmeticsItem1} alt="" />
                    </div>
                    <div className="cosmetics-item">
                        <img src={cosmeticsItem2} alt="" />
                    </div>
                    <div className="cosmetics-item">
                        <img src={cosmeticsItem3} alt="" />
                    </div>
                    <div className="cosmetics-item">
                        <img src={cosmeticsItem4} alt="" />
                    </div>
                </div>
            </section>
        )
    }
}
export default Cosmetics