import React, { Component } from "react";
import ListRedux from "./ListRedux";
import CartRedux from "./CartRedux";
import { shoeArr } from "./data";
import DetailRedux from "./DetailRedux";

export default class ShoeRedux extends Component {
  state = {
    shoeArr: shoeArr,
    cart: [],
    detail: shoeArr[0],
  };

  handleChangeDetail = (shoe) => {
    this.setState({ detail: shoe });
  };
  render() {
    return (
      <div className="container">
        <div className="row">
          <ListRedux />
          {/* shoeArr={this.state.shoeArr} */}
          {/* handleAddToCart={this.handleAddToCart} */}
          {/* handleChangeDetail={this.handleChangeDetail} */}
          <CartRedux />
          {/* cart={this.state.cart} */}
          {/* handleDelete={this.handleDelete} */}
          {/* handleMinus={this.handleMinus} */}
          {/* handlePlus={this.handlePLus} */}
          <DetailRedux />
          {/* detail={this.state.detail} */}
        </div>
      </div>
    );
  }
}
