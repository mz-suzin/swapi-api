import React from "react";
import Card from '../component/Card';

const CardList = ({people}) => {
    return (
        <div>
            {
                people.map((person) => {
                    return <Card key={person.name} id={person.name} name={person.name}
                    height={person.height} mass={person.mass} birthYear={person.birth_year}/>
                    }
                )
            }
        </div>
    )
}

export default CardList;