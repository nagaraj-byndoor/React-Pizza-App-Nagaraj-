import React, {Component} from 'react';

//function returns filtered data.
function getFilteredData(pizzasList, searchData) {
    return pizzasList.filter(function (pizzas) {
        return pizzas.toLowerCase().includes(searchData.target.value);
    });
}

//Sorting in Ascending and Descending order.
function sortAscAndDesc() {
    const PizzaArray = this;
    this.isAscending = !this.isAscending;   
      /*if(this.isAscending){
            return  PizzaArray.sort();
        }else{
             return PizzaArray.reverse(); 
        }    */
  return PizzaArray.sort(function(nameA, nameB) {
        if (nameA > nameB ) {
            return (PizzaArray.isAscending ? 1 : -1);
        }
        if (nameA < nameB ) {
            return (PizzaArray.isAscending ? -1 : 1);
        }
        // pizza names must be equal
        return 0;
        });
        
}

export class PizzaContainer extends Component {
    constructor(props) {
        super(props);
        this.state = {
            dirtyPizzasList: props.pizza,
            pizzasList: props.pizza
        }
    }

//Filtering the Pizza List.
    filterPizza(searchData) {
        this.state.pizzasList = this.state.dirtyPizzasList;
        this.setState({pizzasList: getFilteredData(this.state.pizzasList, searchData)});
    }

//Sorting the pizza list.
    sortPizzaList() {
        this.state.pizzasList.sortAscAndDesc = sortAscAndDesc;
        this.setState({pizzasList: this.state.pizzasList.sortAscAndDesc()});
    }

    render() {
        return (
            <div>
                <div className="row">
                    <div className="col-sm-3"></div>
                        <div className="col-sm-6">
                            <div className="form-group ">                                                               
                                <div className="input-group">
                                      <input
                                             type="text"
                                             className="form-control"
                                             placeholder ="Search for Pizzas"
                                             onKeyUp={this.filterPizza.bind(this)}
                                        />
                                        <div className="input-group-addon">
                                            <span className="glyphicon glyphicon-search"/>
                                        </div>
                                </div>
                            </div>                                             
                    </div>
                    
                    <div className="col-sm-3">                       
                        <button
                            type="button"
                            className="btn btn-primary"
                            onClick={this.sortPizzaList.bind(this)}>
                            sort
                        </button>
                    </div>
                </div>

                <div className="panel-body">
                    <ul className="list-group-item">
                        {
                            this.state.pizzasList.map(function(item, index) {
                                return (<li className="list-group-item list-group-item-info" key={index}>{item}</li>)
                            })
                        }
                    </ul>
                </div>
            </div>
        );
    }
}