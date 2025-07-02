import './PatientCardStyles.css';
function PatientCard({ patient, onSelect }) {
  return (
    <div onClick={() => onSelect(patient)} className="p-4 shadow rounded bg-white cursor-pointer Patient_Card">
      <h3 className="font-bold">{patient.name}</h3>
      <p>{patient.id}</p>
      <p>{patient.age}</p>
      <p>{patient.gender}</p>
      <p>{patient.visits}</p>
    </div>
  
  );
}
export default PatientCard;






