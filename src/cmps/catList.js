import React from 'react';
import { connect } from 'react-redux';
import CatPreview from './catPreview';

function CatList(props) {
    return (
        <div className="cat-list">
            {props.cats.sort((a, b) => {
                if (props.sortRank !== null) {
                    return (props.sortRank)? b.rank - a.rank : a.rank - b.rank
                }
                else {
                    if (props.sortName) {
                        return (b.name > a.name)? 1 : -1
                    }
                    return (b.name < a.name)? 1 : -1
                }
            }).map((cat) =>
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
    }
}

function mapDispatchToProps(dispatch) {
    return {

    }
}


export default connect(mapStateToProps, mapDispatchToProps)(CatList)
// export default Counter