function StatsBar({ patients }) {
  const total = patients.length;
  const male = patients.filter(p => p.gender === 'Male').length;
  const female = patients.filter(p => p.gender === 'Female').length;

  return (
    <div className="flex gap-4 mb-4">
      <div>Total: {total}</div>
      <div>Male: {male}</div>
      <div>Female: {female}</div>
    </div>
  );
}
export default StatsBar;