import React, { Component } from "react";

export default class producTable extends Component {
  render() {
    return (
      <div className="card-body">
        <a href className="btn btn-sm btn-link float-right mb-3">
          Export
          <i className="mdi mdi-download ml-1" />
        </a>
        <h4 className="header-title mt-2">Top Selling Products</h4>
        <div className="table-responsive">
          <table className="table table-centered table-nowrap table-hover mb-0">
            <tbody>
              <tr>
                <td>
                  <h5 className="font-14 my-1 font-weight-normal">
                    ASOS Ridley High Waist
                  </h5>
                  <span className="text-muted font-13">07 April 2018</span>
                </td>
                <td>
                  <h5 className="font-14 my-1 font-weight-normal">$79.49</h5>
                  <span className="text-muted font-13">Price</span>
                </td>
                <td>
                  <h5 className="font-14 my-1 font-weight-normal">82</h5>
                  <span className="text-muted font-13">Quantity</span>
                </td>
                <td>
                  <h5 className="font-14 my-1 font-weight-normal">$6,518.18</h5>
                  <span className="text-muted font-13">Amount</span>
                </td>
              </tr>
              <tr>
                <td>
                  <h5 className="font-14 my-1 font-weight-normal">
                    Marco Lightweight Shirt
                  </h5>
                  <span className="text-muted font-13">25 March 2018</span>
                </td>
                <td>
                  <h5 className="font-14 my-1 font-weight-normal">$128.50</h5>
                  <span className="text-muted font-13">Price</span>
                </td>
                <td>
                  <h5 className="font-14 my-1 font-weight-normal">37</h5>
                  <span className="text-muted font-13">Quantity</span>
                </td>
                <td>
                  <h5 className="font-14 my-1 font-weight-normal">$4,754.50</h5>
                  <span className="text-muted font-13">Amount</span>
                </td>
              </tr>
              <tr>
                <td>
                  <h5 className="font-14 my-1 font-weight-normal">
                    Half Sleeve Shirt
                  </h5>
                  <span className="text-muted font-13">17 March 2018</span>
                </td>
                <td>
                  <h5 className="font-14 my-1 font-weight-normal">$39.99</h5>
                  <span className="text-muted font-13">Price</span>
                </td>
                <td>
                  <h5 className="font-14 my-1 font-weight-normal">64</h5>
                  <span className="text-muted font-13">Quantity</span>
                </td>
                <td>
                  <h5 className="font-14 my-1 font-weight-normal">$2,559.36</h5>
                  <span className="text-muted font-13">Amount</span>
                </td>
              </tr>
              <tr>
                <td>
                  <h5 className="font-14 my-1 font-weight-normal">
                    Lightweight Jacket
                  </h5>
                  <span className="text-muted font-13">12 March 2018</span>
                </td>
                <td>
                  <h5 className="font-14 my-1 font-weight-normal">$20.00</h5>
                  <span className="text-muted font-13">Price</span>
                </td>
                <td>
                  <h5 className="font-14 my-1 font-weight-normal">184</h5>
                  <span className="text-muted font-13">Quantity</span>
                </td>
                <td>
                  <h5 className="font-14 my-1 font-weight-normal">$3,680.00</h5>
                  <span className="text-muted font-13">Amount</span>
                </td>
              </tr>
              <tr>
                <td>
                  <h5 className="font-14 my-1 font-weight-normal">
                    Marco Shoes
                  </h5>
                  <span className="text-muted font-13">05 March 2018</span>
                </td>
                <td>
                  <h5 className="font-14 my-1 font-weight-normal">$28.49</h5>
                  <span className="text-muted font-13">Price</span>
                </td>
                <td>
                  <h5 className="font-14 my-1 font-weight-normal">69</h5>
                  <span className="text-muted font-13">Quantity</span>
                </td>
                <td>
                  <h5 className="font-14 my-1 font-weight-normal">$1,965.81</h5>
                  <span className="text-muted font-13">Amount</span>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        {/* end table-responsive*/}
      </div>
    );
  }
}
