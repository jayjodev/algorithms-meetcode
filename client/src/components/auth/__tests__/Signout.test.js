import React from 'react';
import { mount } from 'enzyme';
import { MemoryRouter } from 'react-router-dom'
import Signout from '../Signout';
import Root from '../../../Root';

let component;

beforeEach(() => {
    component = mount(
        <Root>
            <MemoryRouter>
                <Signout />
            </MemoryRouter>
        </Root>
    );
});

afterEach(() => {
    component.unmount();
});

/**
 * Test Signout Component: div, text
 */
it('Signout contains one div', () => {
    expect(component.find('div').length).toEqual(1)
});

it('Signup contains text: Sorry to see you go', () => {
    expect(component.render().text()).toContain('Sorry to see you go');
});

