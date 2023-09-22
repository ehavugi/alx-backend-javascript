const chai = require('chai');
const expect = chai.expect;
const sinon = require('sinon');
const sendPaymentRequestToApi = require('./3-payment.js');

function testSpy(a,b, sendPaymentRequestToApi){
   sendPaymentRequestToApi(a,b);
}
describe('sendPaymentRequestToApi', function() {
  it('sendPaymentRequestToApi', function() { 
  let bob = sinon.spy();
  console.log(testSpy(1,2,bob));
  expect(bob.calledOnce);
  });
});
