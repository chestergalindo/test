import { plus } from './plus';

test('return value a + b', () => {
  // when
  const value = plus(1, 2);
  const resultExpect = 3;

  //validate if change something or fix spaces

  // then
  expect(value).toBe(resultExpect);
});
