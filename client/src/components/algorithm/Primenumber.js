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
        const userInput = this.props.userInput;
        const primes = JSON.stringify(this.props.primes);
        const medianPrime = JSON.stringify(this.props.medianPrime);

        // const result2 = Object.keys(result).map(obj => result[obj])

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
                    <h2>The median numbers of primes numbers:  {medianPrime}</h2>
                    
                    <h6>**Additional information**</h6>
                    <h6>User Input:{userInput} </h6>
                    <h6>Primes numbers: {primes} </h6>

                </div>
                <div>
                    {this.props.errorMessage}
                </div>

                <button>Calculate!</button>
            </form>
        );
    }
}

function mapStateToProps(state) {
    return {
        userInput: state.result.result.userInput,
        primes: state.result.result.primes,
        medianPrime: state.result.result.medianPrime,
        error_message: state.result.error_message
    }
}

export default compose(
    connect(mapStateToProps, actions),
    reduxForm({ form: 'calculation' })
)(Primenumber);