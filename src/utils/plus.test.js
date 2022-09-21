import { plus } from './plus';

test('return value a + b', () => {
  // when
  const value = plus(1, 2);
  const resultExpect = 3;

  // then
  expect(value).toBe(resultExpect);
});
