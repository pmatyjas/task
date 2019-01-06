import React, {Component} from 'react';
import './App.css';
import Panel from './panel.js';
import Pet from './pet.js';
import Form from "./form.js";


class App extends Component {
    constructor(props) {
        super(props);

        this.state = {
            pets: [],
            showForm: false,
            sortedName: false,
            sortedAge: false,

        };

        fetch("http://127.0.0.1:8080/pets-data.json")
            .then(resp => resp.json())
            .then(this.setState.bind(this));
    }

    addPet = (formPet) => {
        let pets = [...this.state.pets, formPet];
        this.setState({
            pets: pets
        })
    }

    deletePet = (index) => {
        console.log(index)
        let pets = this.state.pets.filter((pet, i) => {
            return i !== index
        })
        this.setState({
            pets: pets
        })
    }

    showForm = () => {
        this.setState({
            showForm: !this.state.showForm
        })

    }

    sortByAge = () => {

        this.setState({
            sortedAge: !this.state.sortedAge
        })

        if (this.state.sortedAge === false) {
            this.state.pets.sort((a, b) => a.birthYear - b.birthYear);
        } else {
            this.state.pets.sort((a, b) => b.birthYear - a.birthYear);
        }

    };
    sortByName = () => {

        if (this.state.sortedName === false) {
            this.state.pets.sort(function (a, b) {
                return a.name === b.name ? 0 : a.name < b.name ? -1 : 1;
            })
        } else {
            this.state.pets.sort(function (a, b) {
                return a.name === b.name ? 0 : a.name > b.name ? -1 : 1;
            })
        }
        this.setState({
            sortedName: !this.state.sortedName
        })
    }

    sortBySpecies = (selected) => {
        let selectedPets = this.state.pets.filter(pet => {
            return (pet.species === selected);
        })

        if (selected === "All") {
            selectedPets = this.state.pets
        }
        console.log(selectedPets)

    }

    closeForm = () => {
        this.setState({
            showForm: !this.state.showForm
        })
    }

    render() {
        console.log(this.state.pets);

        return (
            <div className="App">
                <Panel sortByAge={this.sortByAge} sortByName={this.sortByName} sortBySpecies={this.sortBySpecies}/>
                <Pet pets={this.state.pets} deletePet={this.deletePet}/>
                <button className='addButton' onClick={this.showForm}>+</button>
                {this.state.showForm ? <Form addPet={this.addPet} closeForm={this.closeForm}/> : null}
            </div>
        );
    }
}

export default App;
