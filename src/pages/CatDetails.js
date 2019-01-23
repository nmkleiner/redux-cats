import React, { Component } from 'react';
import { Link } from "react-router-dom";
import { connect } from 'react-redux';
import * as actionCreator from '../store/actions/actions'

class CatDetails extends Component {
  async componentDidMount() {
    const {id} = this.props.match.params;
    await this.props.onLoad()
    this.props.onDetailsLoad(id)
  }

  render() {
    return (
      <React.Fragment>
        {
          this.props.selectedCat &&
          <div className="cat-details">
            <img src={process.env.PUBLIC_URL + this.props.selectedCat.pic} alt="cat"/>
            <p>This is {this.props.selectedCat.name}</p>
            <p>{this.props.selectedCat.gender === 'male'?'He':'She'} is {this.props.selectedCat.age} years old.</p>
            <p>{this.props.selectedCat.rank} people like {this.props.selectedCat.name}!</p>
            <Link to={'edit/' + this.props.selectedCat.id}>Edit</Link><br/>
          </div>
        }
      </React.Fragment>
    )
  }
}

function mapStateToProps(state) {
  return {
      selectedCat: state.catR.selectedCat
  }
}

function mapDispatchToProps(dispatch) {
  return {
    onDetailsLoad: (id) => {
        dispatch(actionCreator.selectCat(id))
    },
    onLoad: async () => {
      await dispatch(actionCreator.loadCats())
      return Promise.resolve()
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(CatDetails)
