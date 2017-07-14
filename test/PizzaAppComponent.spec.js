import React from 'react';
import {expect} from 'code';
import {shallow} from 'enzyme';
import {PizzaAppComponent} from '../src/PizzaAppComponent';

import {Header} from '../src/views/Header';
import {PizzaContainer} from '../src/views/PizzaContainer';
import {Footer} from '../src/views/Footer';

describe('<PizzaAppComponent /> Component', () => {
    let renderedElement;

    beforeEach(() => {
        renderedElement = shallow(<PizzaAppComponent/>);
    });
 //   console.log(renderedElement);
    it('should have panel', () => {
        expect(renderedElement.props().className).to.equal('container panel panel-default');
    });

    describe('Child ELements', function () {
        it('should have child elements', function () {
            expect(renderedElement.props().children[0].type).to.equal(Header);
            expect(renderedElement.props().children[1].type).to.equal('div');
            expect(renderedElement.props().children[2].type).to.equal(Footer);
        });

        describe('Child ELements', function () {
            let loadingElement;
            beforeEach(function () {
                loadingElement = renderedElement.props().children[1].props.children;
            });
            it('should have center tag', function () {
                expect(loadingElement.props.children.type).to.equal('center');           
            });

                describe('Child ELements', function () {
                it('should should have i tag', function () {
                    expect(loadingElement.props.children.props.children.type).to.equal('i');
                });

                describe('when app is loading', function () {
                 it('should show "Loading...', function () {
                expect(loadingElement.props.children.props.children.props.children).to.equal('Loading...');
            });
        });
        });
        });

        describe('when app is loaded', function () {
            it('should show pizza container', function () {
                renderedElement.setState({loading: false});
                expect(renderedElement.props().children[1].props.children.type).to.equal(PizzaContainer);
            });
        });
    });
});


