import React, { Component } from 'react'
import ItemRedux from './ItemRedux';
import { connect } from 'react-redux'

class ListRedux extends Component {
  render() {
      let {shoeArr} = this.props;
    return (
      <div className='col-6 row'>
        {shoeArr.map(item => <ItemRedux key={item.id} data={item}  handleChangeDetail={this.props.handleChangeDetail}/>)}
        {/* handleAddToCart={this.props.handleAddToCart} */}
      </div>
    )
  }
}
//REDUX
let mapStateToProps = (state) =>{
   return{
    shoeArr: state.shoeArr,
   }
}

export default connect(mapStateToProps)(ListRedux);