import React, { Component } from 'react';
import CatsPage from './pages/CatsPage';
import CatDetails from './pages/CatDetails';
import CatEdit from './pages/CatEdit';
import HomePage from './pages/HomePage';
import Navbar from './cmps/Navbar';
import store from './store/store';


import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

class App extends Component {
  render() {
    return (
      <Router>        
        <div className="App">
          
          <Navbar/>

          <Switch>
            <Route path="/" exact component={HomePage} />
            <Route path="/cat" exact component={CatsPage} />
            <Route
              render={props => {
                return <CatEdit {...props} />;
              }}
              path="/cat/edit/:id"
            />
            <Route
              path="/cat/:id"
              render={props => {
                return <CatDetails {...props} store={store} />;
              }}
            />
             {/* /> */}
             {/* <Route path="/statistics" component={StatisticPage} /> */}
             {/* <Route path="/signup" render={(props) => { */}
               {/* return <SignupPage {...props} handleSubmit={this.handleSubmit.bind(this)}/>}} />  */}
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
