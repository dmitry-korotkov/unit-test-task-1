import colorHealth from '../js/app';

test('getHealthy', () => {
  const result = colorHealth({ name: 'Маг', health: 61 });
  expect(result).toBe('healthy');
});

test('getWounded', () => {
  const result = colorHealth({ name: 'Маг', health: 40 });
  expect(result).toBe('wounded');
});

test('getCritical', () => {
  const result = colorHealth({ name: 'Маг', health: 10 });
  expect(result).toBe('critical');
});
