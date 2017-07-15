import React, {Component} from 'react';

//Sorting in Ascending and Descending order.
function sortAscAndDesc() {
    const PizzaArray = this;
    this.isPizzaAsc = !this.isPizzaAsc;       
    
    if(this.isPizzaAsc)
         return PizzaArray.sort((nameA, nameB)=>nameA.toLowerCase().localeCompare(nameB.toLowerCase()))
    else
         return PizzaArray.reverse((nameA, nameB)=>nameA.toLowerCase().localeCompare(nameB.toLowerCase()))
}

//Filtering the Pizza Array list
function getFilteredData(pizzaArray, searchPizza) {
  return pizzaArray.filter((pizzaName) => pizzaName.toLowerCase().indexOf((searchPizza.target.value).toLowerCase()) > -1)
}


export class PizzaComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {
            changedPizzaItems: props.pizza,
            pizzaItems: props.pizza
        }
    }

    //Filtering the Pizza List.
    filterPizzaItems(searchPizza) {
        this.state.pizzaItems = this.state.changedPizzaItems;
        this.setState({
            pizzaItems: getFilteredData(this.state.pizzaItems, searchPizza)
        });
    }

   //Sorting the pizza list.
    sortPizzaItems() {
        this.state.pizzaItems.sortAscAndDesc = sortAscAndDesc;
        this.setState({
            pizzaItems: this.state.pizzaItems.sortAscAndDesc()
        });
    }

    render() {
        return (
            <div>
                <div className="row">
                    <div className="col-sm-3">
                    </div>
                    <div className="col-sm-6">
                        <div className="form-group">                                                               
                            <div className="input-group">
                                  <input
                                         type="text"
                                         className="form-control"
                                         placeholder ="Search for Pizzas"
                                         onKeyUp={this.filterPizzaItems.bind(this)}
                                       />
                                    <div className="input-group-addon">
                                        <span className="glyphicon glyphicon-search"/>
                                    </div>
                            </div>
                        </div>                                             
                    </div>
                    
                    <div className="col-sm-3">                       
                        {/* Button on click sorts in ascending and descending order*/}
                        <button
                            type="button"
                            className="btn btn-default"
                            onClick={this.sortPizzaItems.bind(this)}>
                            Sort
                        </button>
                    </div>
                </div>

                <div className="panel-body">
                    <ul className="list-group-item">
                        {
                            this.state.pizzaItems.map(function(item, index) {
                                return (<li className="list-group-item list-group-item-info" key={index}>{item}</li>)
                            })
                        }
                    </ul>
                </div>
            </div>
        );
    }
}
