import React, { useState, useEffect } from 'react';
import { navigate } from '@reach/router';
import axios from 'axios';

const ViewPet = props => {
    const [pName, setpName] = useState("");
    const [pType, setpType] = useState("");
    const [pDescription, setpDescription] = useState("");
    const [skill1, setSkill1] = useState("");
    const [skill2, setSkill2] = useState("");
    const [skill3, setSkill3] = useState("");
    const [errors, setErrors] = useState({});

    useEffect( () => {
        axios.get(`http://localhost:8000/api/pet/view/${props._id}`)
            .then(res => {
                console.log(res);
                setpName(res.data.pName);
                setpType(res.data.pType);
                setpDescription(res.data.pDescription);
                setSkill1(res.data.skill1);
                setSkill2(res.data.skill2);
                setSkill3(res.data.skill3);
            }).catch(errors => console.log(errors));
    }, [props._id]);

    const remove = () => {
        axios.delete(`http://localhost:8000/api/pet/${props._id}`)
            .then(res => {
                console.log(res);
                navigate("/")
            }).catch(err => console.log(err));
    }


    return (
        <div className="row">
            
            <form className="col-sm-8 offset-sm-2">
                <div className="row">
                    <div className="col-sm-6">
                        <div className="form-group">
                            <label>Pet Name:</label><br />
                            <label>{pName}</label>
                        </div>
                        <div className="form-group">
                            <label>Pet Type:</label><br />
                            <label>{pType}</label>

                        </div>
                        <div className="form-group">
                            <label>Pet Description:</label><br />
                            <label>{pDescription}</label>

                        </div>
                    </div>
                    <div className="col-sm-6">
                        <div className="form-group">
                            <label>Skill 1:</label><br />
                            <label>{skill1}</label>

                        </div>
                        <div className="form-group">
                            <label>Skill 2:</label><br />
                            <label>{skill2}</label>

                        </div>
                        <div className="form-group">
                            <label>Skill 3:</label><br />
                            <label>{skill3}</label>

                        </div>
                    </div>
                </div>
            </form>
            <div className="col">
                <button className="btn btn-danger" onClick={remove}>Adopt  :{pName}</button>
            </div>
        </div>
    )

}

export default ViewPet;