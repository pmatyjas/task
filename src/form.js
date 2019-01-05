import React from "react";

class Form extends React.Component {
    state = {
        name: 'Imie',
        age: 'Wiek',
        species: 'Gatunek',
        photo: 'Url',
        food: 'Jedzenie',
        extrafood: false
    };

    handleName = (event) => {
        this.setState({name: event.target.value})
    };
    handleAge = (event) => {
        this.setState({age: event.target.value})
    };
    handleSpecies = (event) => {
        this.setState({species: event.target.value})
    };
    handleUrl = (event) => {
        this.setState({url: event.target.value})
    };
    handleFood = (event) => {
        this.setState({food: event.target.value})
    };

    addFood = (event) => {
        this.setState({
            extrafood: true
        })
        event.preventDefault();
        console.log(this.state.food)
        let favFoods = [];
        favFoods.push(this.state.food)
        console.log(favFoods)
    };

    handleSubmit = (event) => {
        event.preventDefault();
        this.props.addPet(this.state)
    }
    render() {


        return <div className="form__container">

            <form className="form" onSubmit={this.handleSubmit}>
                <input type="text" value={this.state.name} onChange={this.handleName}/>
                <input type="text" value={this.state.age} onChange={this.handleAge}/>
                <input type="text" value={this.state.species} onChange={this.handleSpecies}/>
                <input type="text" value={this.state.url} onChange={this.handleUrl}/>
                <input type="text" value={this.state.food} onChange={this.handleFood}/>
                <button className="addButton addFoodButton" onClick={this.addFood}>+</button>
                {this.state.extrafood ?
                    <div className="form__extraFood">{this.state.food}
                        <button className="form__deleteFood"> X </button>
                    </div> : null}
                <button type='submit' className="panel__button">Dodaj</button>
            </form>
        </div>
    }
}

export default Form;