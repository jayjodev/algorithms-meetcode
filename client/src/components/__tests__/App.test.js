import React from 'react';
import { shallow } from 'enzyme';
import App from '../App';
import Header from '../Header';

let component;

beforeEach(() => {
    component = shallow(<App />);
});

it('App contains Header', () => {
    expect(component.find(Header).length).toEqual(1)
});