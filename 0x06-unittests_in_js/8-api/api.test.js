const chai = require('chai');
const expect = chai.expect;
const request = require('request');

describe('app', function() {
  var body = "";
  var response;
  var error;
  respnse = request('http://localhost:7865', function (error, response, body) {
  	body = body;
	error = error;
	response = response}
  );
  it("send req", () => { expect(response).to.have.property('statusCode');});
  it("status code ok", () =>{expect(response.statusCode).to.equal(200);});
  it("Body fine", ()=> {expect(body).to.equal('Welcome to the payment system');});
  it("No Error", () => {expect(error).to.equal(null);});
})
