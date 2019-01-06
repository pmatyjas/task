import React from "react";

class Panel extends React.Component {
    state = {
        species: ''
    };
    handleSpecies = (e) => {
        this.setState({
            species: e.target.value
        });
        this.props.sortBySpecies(e.target.value)
    };

    render() {
        return (
            <div className='panel'>
                <div className='panel__names'>
                    <p>Sortowanie</p>
                    <p>Filtry</p>
                </div>
                <div className='panel__filtres'>
                    <div>
                        <button className='panel__button' onClick={this.props.sortByAge}>Wiek</button>
                        <button className='panel__button' onClick={this.props.sortByName}>Imię</button>
                    </div>
                    <select className="panel__select" value={this.state.species} onChange={this.handleSpecies}>
                        <option value="Dog">Pies</option>
                        <option value="Cat">Kot</option>
                        <option value="All">Wszystkie</option>
                    </select>

                </div>
            </div>
        )
    }
}

export default Panel;