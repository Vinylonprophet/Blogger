import { ArrayWithoutCommaPipe } from './array-without-comma.pipe';

describe('ArrayWithoutCommaPipe', () => {
  it('create an instance', () => {
    const pipe = new ArrayWithoutCommaPipe();
    expect(pipe).toBeTruthy();
  });
});
