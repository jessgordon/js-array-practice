const User = require('./user');

describe('User Class', () => {
  it('creates a new instance of the User class', () => {
    expect(new User('Uma')).toBeInstanceOf(User);
  });

  it('returns users name when "getName" method is called', () => {
    const uma = new User('Uma')
    expect(uma.getName()).toEqual('Uma');
  });

  it('returns users introduction when "getIntroduction" method is called', () => {
    const uma = new User('Uma')
    expect(uma.getIntroduction()).toEqual('Hi, my name is Uma');
  });

  
});
