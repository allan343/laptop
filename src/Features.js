import React, { Component } from 'react';
import './App.css';
import Product from './Product';

class Features extends Component{
  /*
    constructor(props) {
        super(props)
      }
*/
      render(){
          return Object.keys(this.props.features)
        .map(key => {
          const options = this.props.features[key].map((item, index) => {
            const selectedClass = item.name === this.props.selected[key].name ? 'feature__selected' : '';
            const featureClass = 'feature__option ' + selectedClass;
            return <Product index={index} featureClass={featureClass} item={item} name = {item.name} cost={item.cost}  onCheckItemFn={this.props.onCheckItemFn}/>
          });

          return <div className="feature" key={key}>
            <div className="feature__name">{key}</div>
            <ul className="feature__list">
              { options }
            </ul>
          </div>
        });  

      }
}

export default Features;  