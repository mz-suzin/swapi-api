import React, { useEffect, useState } from "react";
import { fetchData } from '../utils/Api'
import CardList from '../utils/CardList'

function App() {
    const [people, setPeople] = useState([]);

    useEffect(() => {
        fetchData().then(response => setPeople(response))
    }, []);

    return (
        <div className='tc'>
            <h1>Star Wars React API First Page</h1>
            <CardList people={people} />
        </div>
    )
}

export default App