import React, { Component } from 'react'
import { connect } from 'react-redux'
import './style.css'

class ItemRedux extends Component {
  render() {
    let {handleAddToCart, handleChangeDetail} = this.props;
    return (
      <div className='col-3 item'>
        <img src={this.props.data.image} className='w-100' alt="" />
        <h3>{this.props.data.name}</h3>
        <p>{this.props.data.price}</p>
        <div className='d-flex'>
        <button className='btn btn-dark me-2' onClick={()=>{handleAddToCart(this.props.data)}}>Add to Carts</button>
        <button className="btn btn-primary" onClick={()=>{handleChangeDetail(this.props.data)}}>Details</button>
        </div>
      </div>
    )
  }
}

let mapDispatchToProps = (dispatch) => {
  return{
    handleAddToCart: (shoe) =>{
      let action = {
        type: "ADD",
        payload: shoe,
      }
      dispatch(action);
    },
    handleChangeDetail: (shoe) =>{
      let action = {
        type: "CHANGEDETAIL",
        payload: shoe,
      }
      dispatch(action);
    }
  }
}

export default connect(null, mapDispatchToProps)(ItemRedux);
