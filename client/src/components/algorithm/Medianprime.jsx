import React, { Component } from 'react';
import { reduxForm, Field } from 'redux-form';
import { compose } from 'redux';
import { connect } from 'react-redux';
import * as actions from '../../actions';

class Medianprime extends Component {
    onSubmit = (formProps) => {
        this.props.calculation(formProps, () => {
        });
    };
    
    render() {
        const { handleSubmit } = this.props;
        const median_primes = JSON.stringify(this.props.result_median_primes);
        return (
            <form onSubmit={handleSubmit(this.onSubmit)}>
                <fieldset>
                    <label>Number: </label>
                    <Field
                        name="number"
                        type="number"
                        component="input"
                        autoComplete="none"
                    />
                </fieldset>
                <br/>
                <button>Calculate!</button>
                <div>
                    <h3>Result: {this.props.result_median_primes ? median_primes : null}</h3>
                </div>
                <div>
                    <p>{this.props.server_error}</p>
                </div>
            </form>
        );
    }
}

function mapStateToProps(state) {
    return {
        user_input: state.result.user_input,
        result_primes: state.result.result_primes,
        result_median_primes: state.result.result_median_primes,
        server_error: state.result.server_error
    }
}

export default compose(
    connect(mapStateToProps, actions),
    reduxForm({ form: 'calculation' })
)(Medianprime);