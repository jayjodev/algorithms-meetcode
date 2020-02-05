import React, { Component } from 'react';
import { reduxForm, Field } from 'redux-form';
import { compose } from 'redux';
import { connect } from 'react-redux';
import * as actions from '../../actions';

class Primenumber extends Component {
    onSubmit = (formProps) => {
        this.props.calculation(formProps, () => {
        });
    };
    render() {
        const { handleSubmit } = this.props;
        const median_primes = JSON.stringify(this.props.result_median_primes);
        const primes = JSON.stringify(this.props.result_primes);
        const user_input = JSON.stringify(this.props.user_input);

        return (
            <form onSubmit={handleSubmit(this.onSubmit)}>
                <fieldset>
                    <label>number</label>
                    <Field
                        name="number"
                        type="number"
                        component="input"
                        autoComplete="none"
                    />
                </fieldset>
                <div>
                    {/* data ? req.user && req.user[data] : req.user; */}
                    <h2>Result: {this.props.result_median_primes ? median_primes : null}</h2>
                    <h6>**Additional information**</h6>
                    <h6>Your Input value: {this.props.user_input ? user_input : null} </h6>
                    <h6>Primes numbers: {this.props.result_primes ? primes : null} </h6>

                </div>
                <div>
                    {this.props.server_error}
                </div>

                <button>Calculate!</button>
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
)(Primenumber);