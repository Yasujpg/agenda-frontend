import { Component, Fragment } from "react";
import Navbar from "./Components/Navbar/Navbar";
import Main from "./Components/Main/Main";
import Footer from "./Components/Footer/Footer";

export default class EjerClase extends Component {

    render(){
        return(
            <Fragment>
                <Navbar />
                <Main />
                <Footer />
            </Fragment>
        )
    }
}
