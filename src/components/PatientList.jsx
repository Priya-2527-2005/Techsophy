import React from 'react';
import PatientCard from './PatientCard';
import './PatientListStyles.css';

function PatientList({ patients, onSelect }) {
  return (
    <div className="grid gap-4 patent-list">
        <div className="list-headings">
            <h4>Name</h4>
            <h4>ID</h4>
            <h4>AGE</h4>
            <h4>Gender</h4>
            <h4>Visits</h4>
        </div>
      {patients.map(p => (
        <PatientCard key={p.id} patient={p} onSelect={onSelect} />
      ))}
      <div className="line"></div>
    </div>
  );
}

export default PatientList;
