import React from 'react'
import { Button, Label, Input } from 'reactstrap'
import axios from 'axios'
import { Link } from "react-router-dom";
import logo from "../../img/logo.png"


//import { Col, Row, Button, Form, FormGroup, Label, Input } from 'reactstrap';


class Login extends React.Component{
    constructor(){
        super()

        this.state={
            nom:"",
            pass:"",
            log:false
        }
    }
    onChange(e){
        this.setState({ nom : e.target.value,
        pass: e.target.value});
       

}

    onLog(){
        if( this.state.nom=="admin" && this.state.pass=="admin" ){
            this.setState({log:true})
        }
    }

    render(){
        return(
        <div>
            {
            !this.state.log ?
            <form onSubmit={this.onSubmit}>
                <img src={logo} style={{
                                        textalign: "center",
                                        display: "block",
                                        justifycontent: "center",
                                        alignitems: "center",
                                        margin: "auto",}}>
                </img>
                <br></br>
                    <Label>Nom d'utilisateur</Label>
                    <Input style={{marginBottom:"2%"}}  type="text" onChange={this.onChange}/>

                     <Label>Mot de passe</Label>
                     <Input style={{}}  type="password"
                       name="password"
                       placeholder="Enter Password"
                       onChange={this.onChange} />
                    <br></br>

                    <Button type="submit" className="btn btn-lg btn-primary btn-block" onClick={this.onLog}>Se Connecter</Button>
                          
            </form> 
            :
            <p>Hello</p>
            }
        </div>
        )
    }

}
export default Login