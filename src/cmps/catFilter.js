import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actionCreator from '../store/actions/actions'
class CatPreview extends Component {
    constructor() {
        super()
        this.state = {
            sortName: false,
            sortRank: false
        }
    }
    onSortNameClick() {
        const sortName = !this.state.sortName
        this.setState({ sortName })
        this.props.onSortNameClick(sortName)
    }
    
    async onSortRankClick() {
        const sortRank = !this.state.sortRank
        this.setState({ sortRank })
        this.props.onSortRankClick(sortRank)
        // if (!this.state.sortRank) {
        //     await this.setState({ sortRank: -1 })
        // } else {
        //     const sortRank = (this.state.sortRank === 1) ? -1 : 1;
        //     await this.setState({ sortRank })
        // }
        // this.props.onSortRankClick({num: this.state.sortRank})
    }

    render() {
        const { sortName, sortRank } = this.state
        return (
            <div className="cat-filter flex">
                <h2>
                </h2>
                <button onClick={this.onSortRankClick.bind(this)}>
                    {
                        (sortRank) ?
                            <i className="fas fa-sort-numeric-up"></i> :
                            <i className="fas fa-sort-numeric-down"></i>
                    }
                </button>

                <button onClick={this.onSortNameClick.bind(this)}>
                    {
                        (sortName) ?
                            <i className="fas fa-sort-alpha-up"></i> :
                            <i className="fas fa-sort-alpha-down"></i>
                    }
                </button>
            </div>
        )
    }
}

function mapDispatchToProps(dispatch) {
    return {
        onSortNameClick: (order) => {
            dispatch(actionCreator.sortByName(order))
        },
        onSortRankClick: (order) => {
            dispatch(actionCreator.sortByRank(order))
        },

    }
}

export default connect(null, mapDispatchToProps)(CatPreview)
