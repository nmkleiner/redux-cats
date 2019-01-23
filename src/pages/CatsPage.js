import React, { Component } from 'react';
import CatList from '../cmps/catList.js'
// import { Link } from "react-router-dom";
import store from '../store/store';
// import { connect } from 'react-redux';
// import * as actionCreator from '../store/actions/actions'



class CatsPage extends Component {
  async componentDidMount() {
  }

  render() {
    return (
        <div className="cats-page">
            <CatList store={store}/>
        </div>
    )
  }
}

// function mapStateToProps(state) {
//   return {
//       // cats: state.catR.cats
//   }
// }

// function mapDispatchToProps(dispatch) {
//   return {
//   }
// }

// export default connect(mapStateToProps, {})(CatsPage)
export default CatsPage
