import React, { Component } from 'react';
import CatList from '../cmps/catList.js'
import CatFilter from '../cmps/catFilter.js'
import store from '../store/store';
// import { connect } from 'react-redux';
// import * as actionCreator from '../store/actions/actions'



class CatsPage extends Component {

  render() {
    return (
        <div className="cats-page">
            <CatFilter store={store}/>
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
