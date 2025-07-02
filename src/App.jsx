import React, { useState, useEffect } from 'react';
import { getPatients } from './services/api';
import PatientList from './components/PatientList';
import SearchBar from './components/SearchBar';
import PatientModal from './components/PatientModal';
import StatsBar from './components/StatsBar';


function App() {
  const [patients, setPatients] = useState([]);
  const [selected, setSelected] = useState(null);
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    async function fetchPatients() {
      const data = await getPatients();
      setPatients(data);
    }
    fetchPatients();
  }, []);

  const filtered = patients.filter(p =>
    p.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    p.id.toString().includes(searchTerm)
  );

  return (
    <div className="p-4">
      <SearchBar searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
      <StatsBar patients={filtered} />
      <PatientList patients={filtered} onSelect={setSelected} />
      {selected && <PatientModal patient={selected} onClose={() => setSelected(null)} />}
    </div>
  );
}

export default App;
