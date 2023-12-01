import React, { Component } from "react";
import { connect } from "react-redux";

class DetailRedux extends Component {
  render() {
    let {detail} = this.props;
    return (
      <div className="row pt-5">
        <div className="col-4">
          <h3>{detail.name}</h3>
          <img src={detail.image} className="w-50" alt="" />
        </div>
        <div className="col-8">
          <table>
            <thead>
              <tr>
                <strong
                  style={{
                    position: "relative",
                    left: "350px",
                    fontSize: "18px",
                  }}
                >
                  Shoe Details
                </strong>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>
                  <strong>Id</strong>
                </td>
                <span>{detail.id}</span>
                <td></td>
              </tr>
              <tr>
                <td>
                  <strong>Alias</strong>
                </td>
                <td>
                  <span>{detail.alias}</span>
                </td>
              </tr>
              <tr>
                <td>
                  <strong>Description</strong>
                </td>
                <td>
                  <span>{detail.description}</span>
                </td>
              </tr>
              <tr>
                <td>
                  <strong>Short description</strong>
                </td>
                <span>{detail.shortDescription}</span>
                <td></td>
              </tr>
              <tr>
                <td>
                  <strong>Quantity</strong>
                </td>
                <span>{detail.quantity}</span>
                <td></td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    );
  }
}

let mapStateToProps = (state) =>{
    return{
        detail: state.detail,
    }
}

export default connect(mapStateToProps)(DetailRedux);