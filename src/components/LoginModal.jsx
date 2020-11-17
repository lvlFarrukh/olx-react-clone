import React from 'react'

// redux action functions
import { connect } from 'react-redux';
import { signup, login } from '../store/action'

class LoginModal extends React.Component{
    constructor() {
        super();
        this.state = {
            email: '',
            password: '',
        }
    }
    render(){
        // console.log("props==>",this.props)
        return(
            <div className="modal fade" id="exampleModal" tabIndex={-1} role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog" role="document">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title" id="exampleModalLabel">Login Here</h5>
                            <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                <span aria-hidden="true">×</span>
                            </button>
                        </div>
                        <div className="modal-body">
                            <input value={this.state.email} onChange={(e)=> this.setState({email: e.target.value})} type="email" className="form-control" style={{margin: "10px", width: "95%"}} placeholder="Enter Email"/>
                            <input value={this.state.password} onChange={(e)=> this.setState({password: e.target.value})} type="password" className="form-control" style={{margin: "10px", width: "95%"}} placeholder="Enter Password"/>
                            
                            <button onClick={
                                ()=>{ this.props.signup(this.state)}} 
                                className="btn btn-secondary" style={{width: "41%", margin: '20px'}}>Sign up
                            </button>

                            <button onClick={
                                ()=>{ this.props.login(this.state)}} 
                                className="btn btn-secondary" style={{width: "41%", margin: '20px'}}>Login
                            </button>
                            
                            <h4 style={{margin: "5px 46%"}}>or</h4>
                            <button className="btn btn-primary" style={{width: "95%", margin: '10px'}}>Continue from Facebook</button>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

const mapStateToProps = (state) => ({ 
    user: state.userData,
})
    
const mapDispatchToProps = (dispatch)=> ({
    signup: (data)=> dispatch(signup(data)),
    login: (data)=> dispatch(login(data))
})

export default connect(mapStateToProps, mapDispatchToProps)(LoginModal);

