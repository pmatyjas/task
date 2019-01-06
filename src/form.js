import React from "react";

class Form extends React.Component {
    state = {
        name: '',
        birthYear: '',
        species: '',
        photo: '',
        favFood: '',
        extrafood: false,
        errors: {}
    };

    handleChange = (event) => {
        this.setState({
            [event.target.id]: event.target.value
        })
    };

    addFood = (event) => {
        this.setState({
            extrafood: true
        });
        event.preventDefault();
        console.log(this.state.favFood)
    };

    handleValidation = () =>{
        let formisValid = true;
        let errors = {};


        if (!this.state.name){
            formisValid = false;
            errors["name"] = "Wpisz imię";

        }

        if ((!this.state.birthYear) || !(this.state.birthYear > 0) || (this.state.birthYear % 1 !== 0)){
            errors["birthYear"] = "Uzupełnij liczbą całkowitą";
            formisValid = false
        }
        if (!this.state.species){
            errors["species"] = "Wpisz gatunek";
            formisValid = false
        }
        if (!this.state.photo){
            errors["photo"] = "Uzupełnij Url";
            formisValid = false
        }
        this.setState({errors: errors});
        return formisValid

    };

    handleSubmit = (event) => {
        event.preventDefault();
        this.handleValidation() ? this.props.addPet(this.state) : console.log ('ERROR');
    };
    deleteFood = (event) => {
        event.preventDefault();
    };

    closeForm = (e) => {
        if (e.keyCode === 27) {
            this.props.closeForm(e)
        }
    };

    render() {

        return <div className="form__container" tabIndex="1" onKeyDown={(e) => this.closeForm(e)}>

            <form className="form" onSubmit={this.handleSubmit}>
                <input type="text" id='name' value={this.state.name} onChange={this.handleChange} placeholder='Imię'/>
                <span className='name__error' >{this.state.errors["name"]} </span>
                <input type="number" id='birthYear' value={this.state.birthYear} onChange={this.handleChange} placeholder='Wiek'/>
                <span  className='birthYear__error' >{this.state.errors["birthYear"]} </span>
                <input type="text" id='species' value={this.state.species} onChange={this.handleChange} placeholder='Gatunek'/>
                <span  className='species__error' >{this.state.errors["species"]} </span>
                <input type="text" id='photo' value={this.state.photo} onChange={this.handleChange} placeholder='Url'/>
                <span  className='photo__error'>{this.state.errors["photo"]} </span>
                <input type="text" id='favFood' value={this.state.favFood} onChange={this.handleChange} placeholder='Jedzenie'/>
                <button className="addButton addFoodButton" onClick={this.addFood}>+</button>
                {this.state.extrafood ?
                    <div className="form__extraFood-container">
                        <div className="form__extraFood">{this.state.favFood}
                            <button className="form__deleteFood" onClick={this.deleteFood}>-</button>
                        </div>
                    </div> : null}
                <button type='submit' className="panel__button">Dodaj</button>
            </form>
        </div>
    }
}

export default Form;