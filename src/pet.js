import React from "react";

class Pet extends React.Component {

    deletePet = (index) => {
        this.props.deletePet(index)
    };

    render() {
        const {pets} = this.props;
        const petList = pets.map((pet, index) => {

            const favFoods = pet.favFoods;
            let fav;
            if (favFoods !== undefined) {
                fav = favFoods.map((fav, index) => {
                    console.log(fav, index);
                    return <li key={index}>{fav}</li>
                })
            }

            return (
                <div className='pet' key={index}>
                    <div className='pet__image'>
                        <img alt="pet" src={pet.photo}/>
                    </div>
                    <div className='pet__description'>
                        <p className='pet__name'>Imie: {pet.name} , {index}</p>
                        <p className='pet__age'>Wiek: {(new Date()).getFullYear() - pet.birthYear} lat</p>
                        <p className='pet__species'>Gatunek: {pet.species}</p>
                        <div className='pet__foods'>
                            <p>Ulubione jedzenie</p>
                            <ul className='pet__food-types'>
                                {fav}
                            </ul>
                        </div>
                    </div>
                    <button className='pet__deleteButton' onClick={() => {
                        this.deletePet(index)
                    }}>Usun
                    </button>
                </div>
            )
        });

        return <div className='petList'> {petList}</div>
    }
}

export default Pet;