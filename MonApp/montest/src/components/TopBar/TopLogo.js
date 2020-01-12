import React from 'react'
import logo from "../../img/logo.png"
import '../../App.css';

class TopLogo extends React.Component{
    render(){
        return(
            <div>
                <img className="logo" src={logo} alt="Logo"/>
            </div>
        )
    }

}
export default TopLogo;