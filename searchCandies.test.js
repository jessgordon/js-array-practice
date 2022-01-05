const searchCandies = require('./candy_shop');

describe('searchCandies', () => {
  it('returns all candy that starts with the characters in the search string', () => {
    expect(searchCandies('Ma', 10)).toEqual([ 'Maltesers', 'Mars' ]);
  });

  it('returns all candy that is below the maximum price', () => {
    expect(searchCandies('Ma', 2)).toEqual(['Mars']);
  });

  it('returns all candy that starts with the characters in the search string', () => {
    expect(searchCandies('S', 10)).toEqual([ 'Skitties', 'Skittles', 'Starburst' ]);
  });

  it('returns all candy that is below the maximum price', () => {
    expect(searchCandies('S', 4)).toEqual([ 'Skitties', 'Skittles' ]);
  });
});