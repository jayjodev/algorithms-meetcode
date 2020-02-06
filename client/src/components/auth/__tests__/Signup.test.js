import React from 'react';
import { mount } from 'enzyme';
import { MemoryRouter } from 'react-router-dom'
import Signup from '../Signup';
import Root from '../../../Root';

let component;

beforeEach(() => {
    component = mount(
        <Root>
            <MemoryRouter>
                <Signup />
            </MemoryRouter>
        </Root>
    );
});

afterEach(() => {
    component.unmount();
});

/**
 * Test Signup Component: form, fieldset, div, button
 */
it('Signup contains one form', () => {
    expect(component.find('form').length).toEqual(1)
});

it('Signup contains two fieldset', () => {
    expect(component.find('fieldset').length).toEqual(2)
});

it('Signup contains one div', () => {
    expect(component.find('div').length).toEqual(1)
});

it('Signup contains one button', () => {
    expect(component.find('button').length).toEqual(1)
});

