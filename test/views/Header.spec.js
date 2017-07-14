import React from 'react';
import {expect} from 'code';
import {shallow} from 'enzyme';

import {Header} from '../../src/views/Header';

describe('<Header /> Component', () => {
    let renderedElement;

    beforeEach(() => {
        renderedElement = shallow(<Header/>);
    });

    it('should have panel heading primary', () => {
        expect(renderedElement.props().className).to.equal('panel panel-primary');
    });

     it('should have panel headding', () => {
        expect(renderedElement.props().children.props.className).to.equal('panel-heading');
    });

    it('should have header text', () => {
        const headerText = ' Pizza point';
        expect(renderedElement.props().children.props.children.props.children).to.equal(headerText)
    });
});
