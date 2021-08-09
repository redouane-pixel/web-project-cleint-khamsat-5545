import React, {Component} from 'react';
import TopComponent from './topComponent';
import ListProducts from './listProductsComponent'
class Page1 extends Component {
  state= {}
    render() { 
      return(
          <div className="container">
            {/* this is for the top of the page, the titels and... */}
          <TopComponent/>
          {/* this component is the list of products */}
          <ListProducts/>
        </div>
     );
    }
  }
export default Page1;