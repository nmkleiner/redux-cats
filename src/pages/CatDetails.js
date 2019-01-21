import React, { Component } from 'react';
import { Link } from "react-router-dom";
import { connect } from 'react-redux';
import * as actionCreator from '../store/actions/actions'

class CatDetails extends Component {
  async componentDidMount() {
    const {id} = this.props.match.params;
    this.props.onDetailsLoad(id)
  }

  render() {
    return (
        <div className="cat-details">
          <img src={process.env.PUBLIC_URL + this.props.selectedCat.pic} alt="cat"/>
          <p>This is {this.props.selectedCat.name}</p>
          <p>{this.props.selectedCat.gender === 'male'?'He':'She'} is {this.props.selectedCat.age} years old.</p>
          <p>{this.props.selectedCat.rank} people like {this.props.selectedCat.name}!</p>
          <Link to={'edit/' + this.props.selectedCat.id}>Edit</Link><br/>
        </div>
    )
  }
}

function mapStateToProps(state) {
  return {
      selectedCat: state.selectedCat
  }
}

function mapDispatchToProps(dispatch) {
  return {
      onDetailsLoad: (id) => {
          dispatch(actionCreator.selectCat(id))
      },
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(CatDetails)
