export default function colorHealth(unit) {
  if (unit.health > 50) return 'healthy';
  if (unit.health >= 15) return 'wounded';
  return 'critical';
}
