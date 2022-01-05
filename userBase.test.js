const User = require('./user');
const UserBase = require('./userBase');

describe('UserBase Class', () => {

  let users = [ new User('Uma'), new User('Josh'), new User('Ollie')];
  let userBase = new UserBase(users);

  it('creates a new instance of the UserBase class', () => {
    expect(new UserBase(users)).toBeInstanceOf(UserBase);
  });

  it('returns the number of users in the user base', () => {

    expect(userBase.count()).toBe(3);
  });

  it('returns an array of users names when "getName" method is called', () => {
    expect(userBase.getNames()).toEqual([ 'Uma', 'Josh', 'Ollie' ]);
  });

  it('returns an array of users introductions when "getIntroductions" method is called', () => {
    expect(userBase.getIntroductions()).toEqual([
      'Hi, my name is Uma',
      'Hi, my name is Josh',
      'Hi, my name is Ollie'
    ]);
  }); 
});