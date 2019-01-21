import React, {Component} from 'react';
import { Link } from "react-router-dom";
import { connect } from 'react-redux';
import * as actionCreator from '../store/actions/actions'
class CatPreview extends Component {

    render() {
        return (
            <div className="cat-preview">
            <img src={process.env.PUBLIC_URL + this.props.cat.pic} alt="cat"/>
            <p>Name: {this.props.cat.name}</p>
            <p>Rank: {this.props.cat.rank}</p>
            <div className="flex">
                <button 
                    disabled={this.props.cat.clickedDec} 
                    onClick={this.props.onDecrementClick.bind({},this.props.cat.id)}
                >
                    <i className="fas fa-thumbs-down red-text"></i>
                </button>
                <button 
                    disabled={this.props.cat.clickedInc}
                    onClick={this.props.onIncrementClick.bind({},this.props.cat.id)}
                >
                    <i className="fas fa-thumbs-up green-text"></i>
                </button>
            </div>
            <Link to={'/cat/' + this.props.cat.id}>see more</Link>
            </div>
        )
    }
    
}

function mapDispatchToProps(dispatch) {
    return {
        onIncrementClick: (id) => {
            dispatch(actionCreator.incrementRank(id))
        },
        onDecrementClick: (id) => {
            dispatch(actionCreator.decrementRank(id))
        },
        
    }
}

export default connect(null, mapDispatchToProps)(CatPreview)
