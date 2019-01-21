import React, { Component } from 'react';
import CatList from '../cmps/catList.js'
// import { Link } from "react-router-dom";
import store from '../store/store';
import { connect } from 'react-redux';
import * as actionCreator from '../store/actions/actions'



class CatsPage extends Component {
  async componentDidMount() {
    this.props.onLoad()
  }

  render() {
    return (
        <div className="cats-page">
            <CatList store={store}/>
        </div>
    )
  }
}

function mapStateToProps(state) {
  return {
      cats: state.cats
  }
}

function mapDispatchToProps(dispatch) {
  return {
      onLoad: () => {
          dispatch(actionCreator.loadCats())
      }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(CatsPage)
