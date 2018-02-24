import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

Component.propTypes = {
    name: PropTypes.string,
    authArray: PropTypes.arrayOf(PropTypes.string),
 };
 
export default function(ComposedComponent){
    class Authentication extends Component{
        
    
         componentWillMount(){
             if(!this.props.authenticated){
                this.props.router.push('/');
             }
           
         }

         componentWillUpdate(nextProps){
           
            if(!this.props.nextProps){
               this.props.router.push('/');
            }
          
        }
      
        render(){
           console.log(this.props.router)
            return <ComposedComponent {...this.props}/>
            
        }
    }
   
    
    function mapStateToProps(state) {
       
        return {
            authenticated:state.authenticated
        }
    }
    

    return connect(mapStateToProps)(Authentication);
};





// function mapDispatchToProps(dispatch){
//     return bindActionCreators({carDetail,clearDetail}, dispatch);
// }

