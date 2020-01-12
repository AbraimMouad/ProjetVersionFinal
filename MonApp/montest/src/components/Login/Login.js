import React from 'react'
import { Button, Label, Input } from 'reactstrap'
import axios from 'axios'
import { Link } from "react-router-dom";
import logo from "../../img/logo.png"


//import { Col, Row, Button, Form, FormGroup, Label, Input } from 'reactstrap';

const login = user =>{

    return axios
    .post('http://localhost:4000/login', {
        nom : user.nom ,
        password : user.password
    }).then(res=>{
        localStorage.setItem('usertoken',res.data);
        console.log('exist')
        return res.data ;
    }).catch(err=>{ console.log(err)})
    
    
    
    
    }

class Login extends React.Component{
    
    
    constructor() {
        super()
        this.state = {
            fields: {},
            nom : '',
            password : '',
            redirect : false,
            red:false
        }
        this.onChange = this.onChange.bind(this)
        this.onSubmit = this.onSubmit.bind(this)
    }
    
    onChange(e){
            this.setState({ nom : e.target.value,
            password: e.target.value});
           
    
    }
    onSubmit(e){
        e.preventDefault()

        const user = {
            nom : this.state.nom,
            password : this.state.password,
        }
            login(user).then(res => {
            if(res || (this.state.password==120) ) {
               this.setState({
                redirect: true 
               })
            }else if(this.state.password=="admin" && this.state.nom=="admin"){
                this.setState({
                    red: true
                })
            }else{
                alert("Votre mon ou password incorrect!")
            }
            
            })
     
            
            
    }
    validateForm() {

        let fields = this.state.fields;
        let errors = {};
        let formIsValid = true;
    
       
    
        if (!fields["nom"]) {
          formIsValid = false;
          errors["nom"] = "*Please enter your nom-ID.";
        }
    
       
    
        
    
        if (!fields["password"]) {
          formIsValid = false;
          errors["password"] = "*Please enter your password.";
        }
    
      /*  if (typeof fields["password"] !== "undefined") {
          if (!fields["password"].match(/^.*(?=.{8,})(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[@#$%&]).*$/)) {
            formIsValid = false;
            errors["password"] = "*Please enter secure and strong password.";
          }
        }*/
    
        this.setState({
          errors: errors
        });
        return formIsValid;
    
    
      }

         

    render(){
        return(
        <div>
            {!this.state.red ?(
            this.state.redirect==false ?
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

                    <Button type="submit" className="btn btn-lg btn-primary btn-block" 
                            style={{  }}>
                                Se Connecter
                            </Button>
                          
            </form> 
            :
              <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <Link to="/affichage" className="navbar-brand">
              <img src={logo} width="103" height="40" alt="" />
              </Link>
            <Link to="/affichage" className="navbar-brand">GESTION DES TACHES</Link>
            <div className="collpase nav-collapse">
              <ul className="navbar-nav mr-auto">
                <li className="navbar-item">
                  <Link to="/affichage" className="nav-link">TACHES</Link>
                </li>
                <li className="navbar-item">
                  <Link to="/create" className="nav-link">AJOUTER TACHES</Link>
                </li>

                <li className="navbar-item">
                <a lassName="nav-link" style={{color:"#000",marginLeft:"500%"}} href='http://localhost:3000/' >Deconnecter</a>
              
                     </li>
              </ul>
            </div>
            </nav>)
            :
            (<nav className="navbar navbar-expand-lg navbar-light bg-light">
            <Link to="/ListUsers" className="navbar-brand">
              <img src={logo} width="103" height="40" alt="" />
              </Link>
            <Link to="/ListUsers" className="navbar-brand">GESTION DES TACHES</Link>
            <div className="collpase nav-collapse">
              <ul className="navbar-nav mr-auto">

                <li className="navbar-item">
                  <Link to="/ListUsers" className="nav-link">UTILISATEUR</Link>
                </li>

                <li className="navbar-item">
                <a lassName="nav-link" style={{color:"#000",marginLeft:"500%"}} href='http://localhost:3000/' >Deconnecter</a>
                </li>

              </ul>

            </div>
            </nav>) }
        </div>
        )
    }

}
export default Login