import React from 'react';
import { mount } from 'enzyme';
import { MemoryRouter } from 'react-router-dom'
import Signin from '../Signin';
import Root from '../../../Root';

let component;

beforeEach(() => {
    component = mount(
        <Root>
            <MemoryRouter>
                <Signin />
            </MemoryRouter>
        </Root>
    );
});

afterEach(() => {
    component.unmount();
});

/**
 * Test Signin Component: form, fieldset, div, button
 */
it('Signin contains one form', () => {
    expect(component.find('form').length).toEqual(1)
});

it('Signin contains two fieldset', () => {
    expect(component.find('fieldset').length).toEqual(2)
});

it('Signin contains one div', () => {
    expect(component.find('div').length).toEqual(1)
});

it('Signin contains one button', () => {
    expect(component.find('button').length).toEqual(1)
});

