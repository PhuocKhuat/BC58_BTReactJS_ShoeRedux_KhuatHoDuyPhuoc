import React, { Component } from "react";
import { connect } from "react-redux";

class CartRedux extends Component {
  //  renderCart = () => ();
  render() {
    let { cart, handleDelete, handleMinus, handlePlus } = this.props;
    return (
      <div className="col-6">
        <table className="table">
          <thead>
            <tr>
              <th>Id</th>
              <th>Name</th>
              <th>Price</th>
              <th>Image</th>
              <th>Quantity</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {cart.map((item) => (
              <tr>
                <td>{item.id}</td>
                <td>{item.name}</td>
                <td>{item.price* item.soLuong}</td>
                <td>
                  <img src={item.image} alt="" className="w-50" />
                </td>
                <td>
                  <button
                    className="btn btn-secondary w-25"
                    onClick={() => {
                     handleMinus(item);
                    }}
                  >
                    -
                  </button>
                  {item.soLuong}
                  <button
                    className="btn btn-success w-25"
                    onClick={() => {
                      handlePlus(item);
                    }}
                  >
                    +
                  </button>
                </td>
                <td>
                  <button
                    className="btn btn-danger"
                    onClick={() => {
                      handleDelete(item);
                    }}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  }
}

let mapStateToProps = (state) => {
  return {
    cart: state.cart,
  };
};

let mapDispatchToProps = (dispatch) =>{
   return {
      handleDelete: (shoe)=>{
         let action = {
           type: "DELETE",
           payload: shoe,
         }
         dispatch(action);
      },
      handleMinus: (shoe)=>{
         let action = {
            type: "MINUS",
            payload: shoe,
         }
         dispatch(action);
      },
      handlePlus: (shoe) =>{
         let action ={
            type: "PLUS",
            payload: shoe,
         }
         dispatch(action);
      }
   }
}
export default connect(mapStateToProps, mapDispatchToProps)(CartRedux);
