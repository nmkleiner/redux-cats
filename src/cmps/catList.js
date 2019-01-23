import React from 'react';
import { connect } from 'react-redux';
import CatPreview from './catPreview';

function CatList(props) {
    const {sortRank,sortName,cats,filter} = props
    return (
        <div className="cat-list">
            {cats
                .sort((a, b) => {
                    if (sortRank !== null) {
                        return (sortRank)? b.rank - a.rank : a.rank - b.rank
                    }
                    else {
                        if (sortName) {
                            return (b.name > a.name)? 1 : -1
                        }
                        return (b.name < a.name)? 1 : -1
                    }
                })
                .filter((cat) => {
                    return cat.name.toLowerCase().includes(filter.toLowerCase())
                })
                .map((cat) =>
                    <CatPreview cat={cat} key={cat.id} />
                )}
        </div>
    )
}


function mapStateToProps(state) {
    return {
        cats: state.catR.cats,
        sortName: state.catR.sortName,
        sortRank: state.catR.sortRank,
        filter: state.catR.filter
    }
}

function mapDispatchToProps(dispatch) {
    return {

    }
}


export default connect(mapStateToProps, mapDispatchToProps)(CatList)
// export default Counter