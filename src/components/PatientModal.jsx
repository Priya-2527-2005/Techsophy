import React from 'react';

function PatientModal({ patient, onClose }) {
  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
      <div className="bg-white p-4 rounded w-96">
        <h2 className="text-xl font-bold mb-2">{patient.name}</h2>
        <p>ID: {patient.id}</p>
        <p>Age: {patient.age}</p>
        <p>Gender: {patient.gender}</p>
        <p>Visits: {patient.visits}</p>
        <button onClick={onClose} className="mt-4 bg-blue-500 text-white px-4 py-2 rounded">
          Close
        </button>
      </div>
    </div>
  );
}

export default PatientModal;
