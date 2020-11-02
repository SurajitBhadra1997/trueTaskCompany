import React, { Component } from 'react';
import { Link } from "react-router-dom";
import Breadcomb from "../components/breadcomb";
import { reactLocalStorage } from "reactjs-localstorage";
import HttpClient from "../../utils/HttpClient";
import ReactJsAlert from "reactjs-alert";


export default class index extends Component {

  constructor(props) {
    super(props);

    this.state = {
      userId:"",
      subscription:[],
      title: "",
      type: "",
      status: false,
      email:"",
      issubscribed:"",

    };
  }
  componentDidMount() {
    
    this.getUserdata();
   
  }
  
 getUserdata = async () => {
    let data = reactLocalStorage.getObject("user_data");
    console.log(data);
    if (data && Object.keys(data).length !== 0) {
      this.setState({ isLogin: true, 
        userData: data,
        email:data.email,
         userId: data.id });
         setTimeout(() => {
     this.getSubscription();
    }, 3000);
    }
  };

 getSubscription= async () =>
 {
 
  let data = {
  company_id:this.state.userData.id,
  };

  setTimeout(() => {
    console.log(data);
  }, 3000);
  
  let result = await HttpClient.requestData("subscription-list", "POST", data);
  console.log(result);
  if (result && result.status) 
    {
     this.setState({
       subscription:result.data,
       issubscribed:result.isSubscribed,
      });
      console.log(this.state.subscription);

    }
    else{

    }
    }


 subscriptionBuy = async(packprice,packid)=>
 {
  let data = {
   company_id:this.state.userData.id,
   price:packprice,
   subscription:packid,
  };
  console.log(data);
  let result = await HttpClient.requestData("subscription-buy", "POST", data);
  console.log(result);
  if (result && result.status) 
    {
     this.setState({
      type: "success",
      status: true,
      title: "Subscription done successfully",
     subscription:result.data,
     issubscribed:result.isSubscribed,
      
      });
      reactLocalStorage.set('subscription_status',this.state.issubscribed);
      
      console.log(this.state.subscription);
    }
  
    else
 {
  this.setState({
    type: "error",
    status: true,
    title: "sorry something went wrong please try again",
    });
 }
 }
 
    render() {
        return (
          <div className="container-fluid">
              <ReactJsAlert
                type={this.state.type} // success, warning, error, info
                title={this.state.title} // title you want to display
                status={this.state.status} // true or false
                Close={() => this.setState({ status: false })}
              />
            {/* start page title */}
            <Breadcomb pageTitle="Subscription" />
            
            <div className="row justify-content-center">
              <div className="col-xl-10">
                {/* Pricing Title*/}
                <div className="text-center">
                  <h3 className="mb-2">Our Plans and Pricing</h3>
                  <p className="text-muted w-50 m-auto">
                    We have plans and prices that fit your business perfectly.
                    Make your client site a success with our products.
                  </p>
                </div>
                {/* Plans */}
                <div className="row mt-sm-5 mt-3 mb-3">
                  {/* <div className="col-md-4">
                    <div className="card card-pricing">
                      <div className="card-body text-center">
                        <p className="card-pricing-plan-name font-weight-bold text-uppercase">
                          Professional Pack
                        </p>
                        <i className="card-pricing-icon dripicons-user text-primary" />
                        <h2 className="card-pricing-price">
                          $19 <span>/ Month</span>
                        </h2>
                        <ul className="card-pricing-features">
                          <li>10 GB Storage</li>
                          <li>500 GB Bandwidth</li>
                          <li>No Domain</li>
                          <li>1 User</li>
                          <li>Email Support</li>
                          <li>24x7 Support</li>
                        </ul>
                        <button className="btn btn-primary mt-4 mb-2 btn-rounded">
                          Choose Plan
                        </button>
                      </div>
                    </div>{" "} */}
                    {/* end Pricing_card */}
                  {/* </div>{" "} */}
                  {/* end col */}
                  {this.state.subscription.map(
                 (item, index) => {
                  return (
                  <div className="col-md-4">
                  
                    <div className="card card-pricing card-pricing-recommended" key={index}>
                      <div className="card-body text-center">
                        {/* {item.name=="BUSINESS PACK"?
                        (<div className="rcmd_line card-pricing-plan-tag">Recommended</div>):
                        null} */}
                        <p className="card-pricing-plan-name font-weight-bold text-uppercase">
                         {item.name}
                        </p>
                         {/* <i className={item.logo} />  */}
                        
                        <h2 className="card-pricing-price">
                          Rs.{item.price} <span>/{item.no_of_month} Month</span>
                        </h2>
                        <ul className="card-pricing-features">
                          {/* <li>{item.storage} Storage</li>
                          <li>{item.bandwidth} Bandwidth</li>
                           <li>{item.domain} Domain</li>
                           {item.user=="0"||item.user=="1"?
                            (<li>
                              {item.user}user
                            </li>):
                             (<li>
                             {item.user}users
                           </li>)}

                          <li>Email Support</li> */}
                          <li>24x7 Support</li>
                        </ul>

                        {/* {item.buy_status=="N"?
                        (<button className="btn btn-primary mt-4 mb-2 btn-rounded"
                        onClick={() => this.subscriptionBuy(item.price,item.id)}
                      
                        >
                          Choose Plan
                        </button>):
                        (<button className="btn btn-success mt-4 mb-2 btn-rounded"
                       
                        >
                         Subscribed
                        </button>)
                          } */}
                          {
                            item.buy_status=="Y"&&this.state.issubscribed=="Y"?
                            <button className="btn btn-success mt-4 mb-2 btn-rounded"> 
                              Subscribed
                            </button>:
                            item.buy_status=="N"&&this.state.issubscribed=="Y"?
                            <button className="btn btn-primary mt-4 mb-2 btn-rounded"
                            onClick={() =>{
                              this.setState({ isLogin: true, 
                               type:"warning",
                               status:true,
                               title:"You Have a current ongoing plan,you can only choose new plan after it gets over"
                                });
                             }}
                            
                            >
                               Choose Plan
                            </button>:
                            <button className="btn btn-primary mt-4 mb-2 btn-rounded"
                            onClick={() => this.subscriptionBuy(item.price,item.id)}
                          
                            >
                              Choose Plan
                            </button>
                          }
                      </div>
                    </div>
                     
                    {/* end Pricing_card */}
                  </div>
                   );
                  }
                )}
                 
                  {/* end col */}
                  {/* <div className="col-md-4">
                    <div className="card card-pricing">
                      <div className="card-body text-center">
                        <p className="card-pricing-plan-name font-weight-bold text-uppercase">
                          Enterprise Pack
                        </p>
                        <i className="card-pricing-icon dripicons-store text-primary" />
                        <h2 className="card-pricing-price">
                          $39 <span>/ Month</span>
                        </h2>
                        <ul className="card-pricing-features">
                          <li>100 GB Storege</li>
                          <li>Unlimited Bandwidth</li>
                          <li>10 Domain</li>
                          <li>Unlimited User</li>
                          <li>Email Support</li>
                          <li>24x7 Support</li>
                        </ul>
                        <button className="btn btn-primary mt-4 mb-2 btn-rounded">
                          Choose Plan
                        </button>
                      </div>
                    </div>{" "} */}
                    {/* end Pricing_card */}
                  {/* </div>{" "} */}
                  {/* end col */}
                </div>
                {/* end row */}
              </div>{" "}
              {/* end col*/}
            </div>
            {/* end row */}
          </div>
        );
    }
}
