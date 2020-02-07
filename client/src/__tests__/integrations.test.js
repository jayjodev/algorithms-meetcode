import React from 'react';
import { mount } from 'enzyme';
import moxios from 'moxios';
import Root from '../Root';
import Medianprime from '../components/algorithm/Medianprime';
import { MemoryRouter } from 'react-router-dom'

beforeEach(() => {
    moxios.install();
    moxios.stubRequest(`${process.env.REACT_APP_BACKEND_SERVER}/algorithm/median-prime-number`, {
        status: 200,
        response: { userInput: 7, medianPrime: [3, 5], primes: [2, 3, 5, 7] }
    });
});

afterEach(() => {
    moxios.uninstall();
})

it('can display response data', (done) => {
    const component = mount(
        <Root>
            <MemoryRouter>
                <Medianprime />
            </MemoryRouter>
        </Root>
    );
    // Simulate form submission
    component.find('form').simulate('submit');

    moxios.wait(() => {
        component.update();
        expect(component.render().text()).toContain('Result: [3,5]');
        expect(component.render().text()).toContain('Input number: 7');
        expect(component.render().text()).toContain('Primes numbers: [2,3,5,7]');
        done();
    });
});