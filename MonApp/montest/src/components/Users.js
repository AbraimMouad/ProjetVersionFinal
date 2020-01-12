import React, { Component } from 'react'

import axios from 'axios'
class Users extends Component {
    
    constructor(props){
super(props);

    }
    
 
    
    render() {
        return (

        <tr>
            <td>{this.props.obj.nom}</td>

            <td>{this.props.obj.password} </td>
        </tr>
        )
    }
}




export default Users ;
