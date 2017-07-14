import React, {Component} from 'react';
import {Header} from './views/Header';
import {PizzaContainer} from './views/PizzaContainer';
import {Footer} from './views/Footer';
import {fetch} from './services/PizzaService';

function getPizzaList() {
   //Fetching the JSON data from fetch service. 
    return fetch() 
        .then((response)=> 
            self.setState({
                            pizzaItems: response.pizzas, 
                            loading: !(response.pizzas.length)
                        })
        )
}

export class PizzaAppComponent extends Component {
    constructor() {
        super();
        this.state = {
            pizzaItems: [],
            loading: true
        };
    }

    //Setting the timeout 2 second for Loading..
    componentDidMount() {
        self = this;
        global.setTimeout(() => {
             getPizzaList();
     },2000);
    }

    //Displaying the Pizza List.
    renderPizzaPage() {
        return (
          <div className="container panel panel-default" style={{height: '570px'}}>
              <Header/>
              <div className="panel-body" style={{height: '500px'}}>  
                    <PizzaContainer pizza={this.state.pizzaItems}/>
              </div>
              <Footer/>
          </div>
        );
    }

    //Displaying the text Loading...
    renderLoading() {    
        return (
          <div className="container panel panel-default" style={{height: '570px'}}>
              <Header/>
              <div className="panel-body" style={{height: '500px'}}>  
                    <h3><center><i>Loading...</i></center></h3>
              </div>
              <Footer/>
          </div>
        );
    }

    render() {
        const loading = this.state.loading;
        if(loading){
          return this.renderLoading();
        }
        else{
          return this.renderPizzaPage();
        }
  }
}
