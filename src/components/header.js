import React, { Component } from 'react';
import { Link } from 'react-router';
import { connect } from 'react-redux';
import * as actions from '../actions'
//import { bindActionCreators } from 'redux';

class Header extends Component {
    authButton(){
        if(this.props.authenticated){
            return <button className="logout btn btn-success" onClick={()=>this.props.authenticate(false)}>SignOut</button>
        } else {
            return <button className="logout btn btn-success" onClick={()=>this.props.authenticate(true)}>SignIn</button>
        }
        
    }
    render() {
        return (

            <nav className="navbar navbar-default">
        <div className="container-fluid">
          
          <div id="navbar" className="navbar-collapse collapse">
            <ul className="nav navbar-nav">
              <li> <Link to="/">Home</Link></li>
              <li><Link to="/resources">Resources</Link></li>
             
         
            </ul>
            <ul className="nav navbar-nav navbar-right">
             
            <li > {this.authButton()}</li>
            </ul>
          </div>{/*/.nav-collapse */}
        </div>{/*/.container-fluid */}
      </nav>

         
        );
    }
}

function mapStateToProps(state) {
    console.log(state)
    return {
        authenticated:state.authenticated
    }
}


// function mapDispatchToProps(dispatch){
//     return bindActionCreators({carDetail,clearDetail}, dispatch);
// }

export default connect(mapStateToProps,actions)(Header);