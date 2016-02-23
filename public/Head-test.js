// __test__/Head-test.js
//jest.dontMock('../Head');

describe('Head', function() {
  it('ensure text return of head', function() {
    var Head = require('../Head');
  //  console.log('in this Head test.');
    //console.log(Head.render());
    expect(Head.render());
  });
});`
