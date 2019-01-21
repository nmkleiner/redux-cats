import React, { Component } from 'react';
import { Link, Redirect } from "react-router-dom";
import { connect } from 'react-redux';
import utilService from '../services/util.service';
import * as actionCreator from '../store/actions/actions'

class CatEdit extends Component {

  constructor(props) {
    super()

    let { id } = props.match.params;
    if (id === 'new') {
      id = utilService.makeId(6)
      this.state = {
        selectedCat: { id, name: '', age: '', gender: '',rank:0, pic: 'https://cataas.com/cat' },
        toCatsPage: false,
        toCatDetails: false,
        addCat: true
      }
    }
    else {
      this.state = {
        selectedCat: { ...props.selectedCat },
        toCatsPage: false,
        toCatDetails: false
      }
    }
  }

  async componentDidMount() {
    let { id } = this.props.match.params;
    if (id !== 'new') {
      this.props.onEditLoad(id)
      this.setState({ selectedCat: { ...this.props.selectedCat, } })
    }
  }
  handleNameChange = (ev) => {
    const { value } = ev.target
    this.setState({ selectedCat: { ...this.state.selectedCat, name: value } })
  }
  handleAgeChange = (ev) => {
    const { value } = ev.target
    this.setState({ selectedCat: { ...this.state.selectedCat, age: value } })
  }
  handleGenderChange = (ev) => {
    const { value } = ev.target
    this.setState({ selectedCat: { ...this.state.selectedCat, gender: value } })
  }

  render() {
    if (this.state.toCatsPage === true) {
      return <Redirect to='/cat' />
    }
    if (this.state.toCatDetails === true) {
      return <Redirect to={'/cat/' + this.state.selectedCat.id} />
    }
    return (
      <div className="cat-edit">
        {this.props.selectedCat &&
          <Link to={'/cat/' + this.props.selectedCat.id}>
            <i className="fas fa-arrow-left"></i>
          </Link>
        }

        <form onSubmit={this.props.onSubmitCat.bind(this)}>
          <label>
            Name:
              <input type="text"
              value={this.state.selectedCat.name}
              onChange={this.handleNameChange}
            />
          </label>
          <label>
            Age:
              <input type="number"
              value={this.state.selectedCat.age}
              onChange={this.handleAgeChange}
            />
          </label>
          <label>
            Gender:
              <select type="text"
              value={this.state.selectedCat.gender}
              onChange={this.handleGenderChange}
            >
              <option>Choose gender</option>
              <option value="male">Male</option>
              <option value="female">Female</option>
            </select>
          </label>
          <button type="submit">save</button>
          <button type="button" onClick={this.props.onDeleteCat.bind(this)}>delete</button>
        </form>
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
    onEditLoad: (id) => {
      dispatch(actionCreator.selectCat(id))
    },
    onSubmitCat: function (ev) {
      ev.preventDefault();
      if (this.state.addCat) {
        dispatch(actionCreator.addCat(this.state.selectedCat))
        setTimeout(() => this.setState({ toCatsPage: true }), 300)
      }
      else {
        dispatch(actionCreator.updateCat(this.state.selectedCat))
        setTimeout(() => this.setState({ toCatDetails: true }), 300)
      }
    },
    onDeleteCat: function () {
      dispatch(actionCreator.deleteCat(this.state.selectedCat.id))
      setTimeout(() => this.setState({ toCatsPage: true }), 300)
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(CatEdit)
