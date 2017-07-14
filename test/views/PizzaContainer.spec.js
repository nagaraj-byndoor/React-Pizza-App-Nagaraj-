import React from 'react';
import {expect} from 'code';
import {shallow} from 'enzyme';

import {PizzaContainer} from '../../src/views/PizzaContainer'

describe('<PizzaContainer /> Component', () => {
    let renderedElement, testProps;

    beforeEach(() => {
        testProps = {
            pizza: ['veg-pizza', 'non-veg-pizza']
        };

        renderedElement = shallow(<PizzaContainer {...testProps}/>);
    });

    it('should have pizza list', function () {
        expect(renderedElement.state('pizzaItems')).to.equal(testProps.pizza);
    });

    it('should div element', () => {
        expect(renderedElement.props().children[0].type).to.equal('div');
    });

     describe('filter pizza items', function () {
            let filterElement;

            beforeEach(function () {
                filterElement = renderedElement.props().children[0];
            });
            it('should div element', () => {
                 expect(filterElement.props.children[0].type).to.equal('div');
            });
            it('should div element', () => {
                 expect(filterElement.props.children[1].type).to.equal('div');
            });

            it('should div element', () => {
                 expect(filterElement.props.children[1].props.children.type).to.equal('div');
            });

            it('should have sort buttont', () => {
                 expect(filterElement.props.children[2].props.children.type).to.equal('button');
            });
            it('should have sort button btn btn-primary ', () => {
                 expect(filterElement.props.children[2].props.children.props.className).to.equal('btn btn-default');
            });
        });

    it('should div element', () => {
        expect(renderedElement.props().children[1].type).to.equal('div');
    });

    
        describe('sort items', function () {     
            it('should sort items', function () {
                const sortedItemList = ['veg-pizza', 'non-veg-pizza'];
                expect(renderedElement.state('pizzaItems')).to.equal(sortedItemList);
            });
    });
});
