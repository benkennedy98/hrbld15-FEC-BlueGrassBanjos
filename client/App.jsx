/* eslint-disable react/prop-types */
/* eslint-disable no-console */
/* eslint-disable react/destructuring-assignment */
/* eslint-disable react/no-unused-state */
/* eslint-disable no-unused-vars */
import React from 'react';
import Overview from './components/productOverview/displayOverview';
import QandA from './components/QandA/QandA';
import RelatedProducts from './components/RelatedProducts/RelatedProducts';
import ReviewsComponent from './components/reviews/ReviewsComponent';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      product: this.props.match.params.id,
    };
    this.handleProductClick = this.handleProductClick.bind(this);
  }

<<<<<<< HEAD
  handleProductClick (product_id) {
    this.setState({
      product: product_id
    });
  }

=======
>>>>>>> 8507d4c8a918289ee3e6d8bcb9046c36cd0b2884
  render() {
    const prod = this.state;
    if (!prod.product) {
      prod.product = 18078;
    }
    return (
      <div>
        <div className="hello">Hello World!!!!</div>
        <Overview product={prod.product} />
        <RelatedProducts selectedProduct={prod.product} productClick={this.handleProductClick}/>
        <QandA productId={prod.product} />
        <ReviewsComponent product={prod.product} />
      </div>
    );
  }
}

export default App;

  // componentDidMount() {
    // Requests.default.getReviews(18201, (err, data) => {
    //   if (err) {
    //     console.log(err);
    //   } else {
    //     this.setState({
    //       reviewsData: data.data,
    //     });
    //   }
    // });

    // this.setState({
    //   product: this.props.match.params.id,
    // });
    // console.log(this.props.match.params);
  // }
