import { Component, Fragment } from "react";

import Navbar from "./Components/Navbar/Navbar";
import Header from "./Components/Header/Header";
import Main from "./Components/Main/Main";
import Cards from "./Components/Cards/Cards";
import Text from "./Components/Text/Text";
import Footer from "./Components/Footer/Footer";

export default class EjercicioRanas extends Component {

    render() {
        return (
            <Fragment>
                <Navbar />
                <Header />
                <Main />
                <Cards />
                <Text />
                <Footer />
            </Fragment>
        );
    }
}
