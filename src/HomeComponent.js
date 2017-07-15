import React, {Component} from 'react';
import {Header} from './views/Header';
import {PizzaComponent} from './views/PizzaComponent';
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

export class HomeComponent extends Component {
    constructor() {
        super();
        this.state = {
            pizzaItems: [],
            loading: true
        };
    }

    //Setting the Loading..timeout for 2 seconds.
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
                    <PizzaComponent pizza={this.state.pizzaItems}/>
              </div>
              <Footer/>
          </div>
        );
    }

    //Displaying the text Loading...
    renderLoading() {    
        return (
          <div>
               <h3><center><i>Loading...</i></center></h3>
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
