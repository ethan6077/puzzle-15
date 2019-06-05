import { checkIfTileClose } from './index';

it('checkIfTileClose - close tiles return true', () => {
  const checkResult1 = checkIfTileClose([2,2], [1,2]);
  expect(checkResult1).toBe(true);
});

it('checkIfTileClose - distant tiles return false', () => {
  const checkResult1 = checkIfTileClose([1,1], [1,3]);
  expect(checkResult1).toBe(false);
});