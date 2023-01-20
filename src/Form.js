import React from "react";
import a from './App.css'
class Form extends React.Component{
    userData;

    constructor(props){
        super(props);
        this.state={
            name:'',
            email:'',
            message:'',


        };
       
        this.onChangeName = this.onChangeName.bind(this);
        this.onChangeEmail = this.onChangeEmail.bind(this);
        this.onChangeMessage = this.onChangeMessage.bind(this);
        
    }
    onChangeName(event){
        this.setState({
            name:event.target.value,
            

        })
    };
    onChangeEmail(event){
        this.setState({
            email:event.target.value,
            

        })
    };
    onChangeMessage(event){
        this.setState({
            message:event.target.value,
            

        })
    };
    
    componentDidMount() {
        this.userData = JSON.parse(localStorage.getItem('user'));

        if (localStorage.getItem('user')) {
            this.setState({
                name: this.userData.name,
                email: this.userData.email,
                message: this.userData.message
            })
        } else {
            this.setState({
                name: '',
                email: '',
                message: ''
            })
        }
    }

    componentWillUpdate(nextProps, nextState) {
        localStorage.setItem('user', JSON.stringify(nextState));
    }
    render(){
        return(
            <form action="/contact_reply"  >
      <div>
        <label className="contactMail"> Name: </label>
        <input  type='name' className='input' value={this.state.name} onChange={this.onChangeName} /><br></br>
      </div>
      
      <div>
        <label className="contactMail"> Email: </label>
        <input type='email' className='input' value={this.state.email} onChange={this.onChangeEmail}  /><br></br> <br></br>
      </div>
      <div>
        <label className="contactMail"> Message: </label>
        <textarea  type='text'   value={this.state.message} onChange={this.onChangeMessage}/><br></br>
      </div>
      <br></br>
      <input className='button' type="submit" value="Send" />
    </form>
        )
    }

}
export default Form