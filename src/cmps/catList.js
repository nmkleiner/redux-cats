import React from 'react';
import { connect } from 'react-redux';
import CatPreview from './catPreview';
function CatList(props) {
    return (
        <div className="cat-list">
            {props.cats.sort((a, b) => b.rank - a.rank).map((cat) =>
                <CatPreview cat={cat} key={cat.id} />
            )}
        </div>
    )
}


function mapStateToProps(state) {
    return {
        cats: state.catR.cats
    }
}

function mapDispatchToProps(dispatch) {
    return {

    }
}


export default connect(mapStateToProps, mapDispatchToProps)(CatList)
// export default Counter