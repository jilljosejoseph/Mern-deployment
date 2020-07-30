import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Display from './components/Display';
import { Link, Router } from '@reach/router';
import PetForm from './components/PetForm';
import EditPet from './components/EditPet';
import ViewPet from './components/ViewPet';

function App() {
  return (
    <div className="container">
      <h1>Pet Shelter <Link className="btn btn-info float-right mt-2" to="/new">Add a pet to shelter</Link></h1>


      <h3>These pets are looking for a good home</h3>

      <Router className="my-3">
        <Display path="/" />
        <PetForm path="/new" />
        <EditPet path="/edit/:_id" />
        <ViewPet path="/view/:_id" />
      </Router>
    </div>
  );
}

export default App;
