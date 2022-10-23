import React from "react";
import Cosmetics from "./Cosmetics";
import quoteImg from './img/main_quote.png'
import Services from './Services'

class Main extends React.Component {
    render() {
        return (
            <main className="container">

                <div className="main-qoute-wrapper">
                    <img src={quoteImg} alt="" />
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. In arcu nibh vitae amet. Ipsum, pharetra donec ornare velit. Id at quisque accumsan risus ac ipsum ut. Sit elit, facilisi proin non malesuada sociis tristique. Viverra augue lorem ut quisque quam tortor, malesuada iaculis. <br />
                        Et elementum at nulla venenatis, faucibus integer. Auctor neque eros, viverra rutrum. Fames ultrices condimentum tortor nec penatibus. Velit imperdiet sapien fringilla vestibulum sit fames.
                    </p>
                </div>
                <Services />
                <Cosmetics />
            </main>
        )
    }
}
export default Main