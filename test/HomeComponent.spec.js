import React from 'react';
import {expect} from 'code';
import {shallow} from 'enzyme';
import {HomeComponent} from '../src/HomeComponent';

import {Header} from '../src/views/Header';
import {PizzaComponent} from '../src/views/PizzaComponent';
import {Footer} from '../src/views/Footer';

describe('<HomeComponent /> Component', () => {
    let homeElement;

    beforeEach(() => {
        homeElement = shallow(<HomeComponent/>);
     });
     
        describe('Loading page ELements', function () {

                it('Loading page should have h3 element', function () {
                    expect(homeElement.props().children.type).to.equal('h3');           
                });

                it('Loading page should have center element', function () {
                    expect(homeElement.props().children.props.children.type).to.equal('center');           
                });

                it('Loading page should have i element', function () {
                    expect(homeElement.props().children.props.children.props.children.type).to.equal('i');
                 });   
                it('Loading page should show "Loading...', function () {
                    expect(homeElement.props().children.props.children.props.children.props.children).to.equal('Loading...')
                });       
            });

        it('Pizza home page should have panel', () => {
            homeElement.setState({loading: false});
            expect(homeElement.props().className).to.equal('container panel panel-default');
        });

        describe('Pizza home page ELements', function () {
            it('Pizza home page should have child elements', function () {
                homeElement.setState({loading: false});
                expect(homeElement.props().children[0].type).to.equal(Header);
                expect(homeElement.props().children[1].type).to.equal('div');
                expect(homeElement.props().children[2].type).to.equal(Footer);
            }); 

        describe('when pizza app is loaded', function () {
            it('Pizza home page should show pizza container', function () {
                homeElement.setState({loading: false});
                expect(homeElement.props().children[1].props.children.type).to.equal(PizzaComponent);
            });

            it('Pizza home page should set pizza list', function () {
                homeElement.setState({loading: false});
                const pizzaItems = ['veg-extravaganza', 'chicken-fiesta', 'paneer-n-onion']
                homeElement.setState({pizzaItems: pizzaItems});
                expect(homeElement.props().children[1].props.children.props.pizza).to.equal(pizzaItems);
            });
        });
    });
});


