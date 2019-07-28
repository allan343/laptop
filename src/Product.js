import React, { Component } from 'react';
import './App.css';


class Product extends Component{
    constructor(props) {
        super(props)
      }
      
render(){
  console.log(this.props.index);
return <li key={this.props.index} className="feature__item">
                <div className={this.props.featureClass} onClick={this.props.onCheckItem}>
                  { this.props.item.name }
                    ({ new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD'})
                      .format(this.props.item.cost) })
                </div>
              </li>

}


}

export default Product;  