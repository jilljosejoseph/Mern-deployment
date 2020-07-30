import React, {useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from '@reach/router';

const Display = props => {

    const [animals, setAnimals] = useState([]);

    useEffect( () => {
        axios.get("http://localhost:8000/api/pet")
        .then(res => {
            console.log(res);
            setAnimals(res.data);
        })
        .catch(errors => console.log(errors));
    }, []);

    return (
        <div>
            {animals.map( (animal, i) => 
                <div className="card mb-2" key={animal._id}>
                    <div className="card-header bg-primary text-light">{animal.pName}</div>
                    <div className="card-body">
                        <p>Type: {animal.pType}</p>
                        <p>Actions</p>
                        <Link className="btn btn-outline-info" to={`/edit/${animal._id}`}>edit</Link>
                        <Link className="btn btn-outline-info" to={`/view/${animal._id}`}>details</Link>

                    </div>
                </div>
            )}
        </div>
    )

}

export default Display;