import React from 'react';
import {expect} from 'code';
import {shallow} from 'enzyme';

import {PizzaComponent} from '../../src/views/PizzaComponent'

describe('<PizzaComponent /> Component', () => {
    let pizzaElement, testProps;
    beforeEach(() => {
        testProps = {
            pizza: ['veg-extravaganza', 'chicken-fiesta', 'paneer-n-onion']
        };

        pizzaElement = shallow(<PizzaComponent {...testProps}/>);
    });

    it('should have pizza list', function () {
        expect(pizzaElement.state('pizzaItems')).to.equal(testProps.pizza);
    });

    it('should have a div element', () => {
        expect(pizzaElement.props().children[0].type).to.equal('div');
    });


    describe('Pizza page elements', function () {
            let searchElement;
            beforeEach(function () {
                searchElement = pizzaElement.props().children[0];
            });
            it('should have div element', () => {
                 expect(searchElement.props.children[0].type).to.equal('div');
            });
            it('should have div element', () => {
                 expect(searchElement.props.children[1].type).to.equal('div');
            });

            it('should have div element', () => {
                 expect(searchElement.props.children[1].props.children.type).to.equal('div');
            });;
    });
 

    describe('Searching pizza items', function () {
            let searchElement;
            beforeEach(function () {
                searchElement = pizzaElement.props().children[0].props.children[1].props.children.props.children.props.children[0];
            });

            it('should have a input textbox', function () {
                expect(searchElement.type).to.equal('input');
            })

            it('should filter Pizza List', function () {
                const filteredItem = ['veg-extravaganza'];
                searchElement.props.onKeyUp({target: {value: 've'}});
                expect(pizzaElement.state('pizzaItems')).to.equal(filteredItem);
            });
    });


    describe('Check for sorting pizza items', function () {    
            let sortingElement;
            beforeEach(function () {
                sortingElement =  pizzaElement.props().children[0].props.children[2].props.children;
            }); 

            it('should have a sort button', () => {
                 expect(sortingElement.type).to.equal('button');
            });

            it('should have a sort button class name as button btn btn-primary ', () => {
                 expect(sortingElement.props.className).to.equal('btn btn-default');
            });

            it('should sort pizza items', function () {
                const sortedItemList = ['chicken-fiesta', 'paneer-n-onion', 'veg-extravaganza'];
                sortingElement.props.onClick();
                expect(pizzaElement.state('pizzaItems')).to.equal(sortedItemList);
            });
    });

});
