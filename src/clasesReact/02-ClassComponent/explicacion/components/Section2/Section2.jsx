import { Component } from "react";
import fotoLisa from '/images/lisa.jpg'
import fotoFamily from '../../../../../assets/family.jpg'

export default class Section2 extends Component{

    render(){
        return(
            <section>
                <div className='section2'>
                    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quasi voluptas eaque accusamus cum molestias eligendi vitae repellendus aliquid voluptatibus nostrum? Beatae natus voluptate aliquid minus id ex cupiditate! Consectetur suscipit iusto dolorem, corporis qui quisquam eum eius dolor repudiandae? Tempora optio saepe asperiores deleniti blanditiis assumenda inventore nulla iure. Rerum.</p>
                </div>
                <img className='foto' src="/images/maggie.jpg" alt="" />
                <img className='foto' src={fotoLisa} alt="" />
                <img className='foto' src={fotoFamily} alt="" />
            </section>
        )
    }

}