import React from 'react';
import {expect} from 'code';
import {shallow} from 'enzyme';

import {Footer} from '../../src/views/Footer';

describe('<Footer /> Component', () => {
    let renderedElement;

    beforeEach(() => {
        renderedElement = shallow(<Footer/>);
    });

    it('should have panel footer', () => {
        expect(renderedElement.props().className).to.equal('panel-footer');
    });

    it('should have center tag', () => {
        expect(renderedElement.props().children.props.children.type).to.equal('center');
    });

    it('should have footer text', () => {
        expect(renderedElement.props().children.props.children.props.children).to.equal('This app reated for ReactJS front-end test');
    });

});
