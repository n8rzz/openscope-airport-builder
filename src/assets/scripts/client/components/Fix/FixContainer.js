import React, { Component } from 'react';
import { connect } from 'react-redux';
import Fix from './Fix';

class FixContainer extends Component {
    render() {
        return (
            <Fix />
        );
    }
}

const mapStoreToProps = (state) => ({});

const mapDispatchToProps = (dispatch) => ({});

export default connect(
    mapStoreToProps,
    mapDispatchToProps
)(FixContainer);
