import React, { Component } from 'react';
import { connect } from 'react-redux';

export default (ChildComponent) => {
    class ComposedComponent extends Component {
        // The component just got rendered
        componentDidMount() {
            this.shouldNavigateAway();
        }

        // The component just got updated
        componentDidUpdate() {
            this.shouldNavigateAway();
        }

        shouldNavigateAway() {
            if (!this.props.auth) {
                this.props.history.push('/');
                console.log('You need to leave')
            }
        }

        render() {
            return <ChildComponent {...this.props} />;
        }
    }

    function mapStateToProps(state) {
        return { auth: state.auth.authenticated };
    }

    return connect(mapStateToProps)(ComposedComponent);
};