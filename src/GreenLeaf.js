import React, { Component } from 'react';
import './App.css';


class GreenLeaf extends Component{
    constructor(props) {
        super(props)
      }
      
render(){
 
return <section className="main__summary">
<h3>NEW GREENLEAF 2018</h3>
{this.props.summary}
<div className="summary__total">
  <div className="summary__total__label">Your Price: </div>
  <div className="summary__total__value">
  { new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD'})
      .format(this.props.total) }
  </div>
</div>
</section>

}


}

export default GreenLeaf;  