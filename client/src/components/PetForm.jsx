import React, { useState } from 'react';
import { navigate } from '@reach/router';
import axios from 'axios';

const PetForm = props => {
    const [pName, setpName] = useState("");
    const [pType, setpType] = useState("");
    const [pDescription, setpDescription] = useState("");
    const [skill1, setSkill1] = useState("");
    const [skill2, setSkill2] = useState("");
    const [skill3, setSkill3] = useState("");
    const [errors, setErrors] = useState({});

    const CreatePet = e => {
        e.preventDefault();
        const petItem = {pName, pType, pDescription, skill1, skill2, skill3};
        axios.post("http://localhost:8000/api/pet", petItem)
            .then( res => {
                console.log(res);
                if(res.data.errors) {
                    setErrors(res.data.errors);
                } else {
                    navigate("/")
                }
            }).catch(errors => console.log(errors));
    }

    return (
        <div className="row">
            <form className="col-sm-8 offset-sm-2" onSubmit={CreatePet}>
                <div className="row">
                    <div className="col-sm-6">
                        <div className="form-group">
                            <label>Pet Name:</label>
                            <input type="text" className="form-control" onChange={e => setpName(e.target.value)} />
                            {errors.pName ? <p className="text-danger">{errors.pName.properties.message}</p> : ""}
                        </div>
                        <div className="form-group">
                            <label>Pet Type:</label>
                            <input type="text" className="form-control" onChange={e => setpType(e.target.value)} />
                            {errors.pType ? <p className="text-danger">{errors.pType.properties.message}</p> : ""}

                        </div>
                        <div className="form-group">
                            <label>Pet Description:</label>
                            <input type="text" className="form-control" onChange={e => setpDescription(e.target.value)} />
                            {errors.pDescription ? <p className="text-danger">{errors.pDescription.properties.message}</p> : ""}

                        </div>
                    </div>
                    <div className="col-sm-6">
                        <div className="form-group">
                            <label>Skill 1:</label>
                            <input type="text" className="form-control" onChange={e => setSkill1(e.target.value)} />
                            {errors.skill1 ? <p className="text-danger">{errors.skill1.properties.message}</p> : ""}

                        </div>
                        <div className="form-group">
                            <label>Skill 2:</label>
                            <input type="text" className="form-control" onChange={e => setSkill2(e.target.value)} />
                            {errors.skill2 ? <p className="text-danger">{errors.skill2.properties.message}</p> : ""}

                        </div>
                        <div className="form-group">
                            <label>Skill 3:</label>
                            <input type="text" className="form-control" onChange={e => setSkill3(e.target.value)} />
                            {errors.skill3 ? <p className="text-danger">{errors.skill3.properties.message}</p> : ""}

                        </div>
                    </div>
                </div>
                <input type="submit" className="btn btn-info" value="Add Pet" />
            </form>
        </div>
    )

}

export default PetForm;