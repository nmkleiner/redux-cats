import { connect } from 'react-redux';
import React, { Component } from 'react';
import CatsPage from './pages/CatsPage';
import CatDetails from './pages/CatDetails';
import CatEdit from './pages/CatEdit';
import HomePage from './pages/HomePage';
import Navbar from './cmps/Navbar';
import store from './store/store';
import * as actionCreator from './store/actions/actions'



import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

class App extends Component {

  async componentDidMount() {
    await this.props.onLoad()
    console.log(this.props)
  }
  render() {
    return ( 
      <React.Fragment>

      {this.props.cats &&
        <Router>        
          <div className="App">
            <Navbar/>

            <Switch>
              <Route path="/redux-cats/" exact component={HomePage} />
              <Route path="/redux-cats/cat" exact component={CatsPage} />
              <Route
                render={props => {
                  return <CatEdit {...props} />;
                }}
                path="/redux-cats/cat/edit/:id"
                />
              <Route
                path="/redux-cats/cat/:id"
                render={props => {
                  return <CatDetails {...props} store={store} />;
                }}
                />
            </Switch>
          </div>
        </Router>
      }
    </React.Fragment>
    );
  }
}


function mapStateToProps(state) {
  return {
      cats: state.catR.cats
  }
}

function mapDispatchToProps(dispatch) {
  return {
      onLoad: () => {
          dispatch(actionCreator.loadCats())
      }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App)
