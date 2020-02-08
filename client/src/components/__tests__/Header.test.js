import React from 'react';
import { mount } from 'enzyme';
import { MemoryRouter } from 'react-router-dom'
import Header from '../Header';
import Root from '../../Root';

let component;

beforeEach(() => {
    component = mount(
        <Root>
            <MemoryRouter>
                <Header />
            </MemoryRouter>
        </Root>
    );
});

afterEach(() => {
    component.unmount();
});

/**
 * Test Hearder Component: divs, links, words
 */
it('Header contains three divs', () => {
    expect(component.find('div').length).toEqual(3)
});

// The test is pending: signup Link is Hided
// it('Header contains three Links', () => {
//     expect(component.find('Link').length).toEqual(3)
// });

it('Header component contains Main Text: "Algorithm Calculator"', () => {
    expect(component.render().text()).toContain('Algorithm Calculator');
});