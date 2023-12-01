import React, { Component } from 'react'
import { connect } from 'react-redux'

class ItemRedux extends Component {
  render() {
    let {handleAddToCart, handleChangeDetail} = this.props;
    return (
      <div className='col-4'>
        <img src={this.props.data.image} className='w-50' alt="" />
        <h3>{this.props.data.name}</h3>
        <p>{this.props.data.price}</p>
        <button className='btn btn-dark' onClick={()=>{handleAddToCart(this.props.data)}}>Add to Carts</button>
        <br />
        <button className="btn btn-primary" onClick={()=>{handleChangeDetail(this.props.data)}}>Details</button>
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
