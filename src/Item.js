import React, { Component } from 'react';
import './App.css';


class Item extends Component{
    constructor(props) {
        super(props)
      }

      
render(){
    return <div className="summary__option" key={this.props.mykey}>
    <div className="summary__option__label">{this.props.mykey}  </div>
    <div className="summary__option__value">{this.props.selected[this.props.mykey].name}</div>
    <div className="summary__option__cost">
      { new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD'})
          .format(this.props.selected[this.props.mykey].cost) }
    </div>
</div>
}
}

export default Item