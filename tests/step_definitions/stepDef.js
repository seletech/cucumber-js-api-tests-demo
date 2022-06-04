const { When, Then } = require("@cucumber/cucumber");
const chai = require('chai');
const chaiHttp = require('chai-http')
chai.use(chaiHttp)
const expect = chai.expect;
const request = chai.request;
const apiUsersRes = require('../data/apiUsersGetRes.json')
const createUser = require('../data/createUser.json')

const baseUrl = 'https://reqres.in'
let res;

When(/^I do get call for list users$/, async () => {
  res = await request(baseUrl).get('/api/users');
})

Then(/^Verify status is 200$/, async () => {
  expect(res.statusCode).to.equal(200)
})

Then(/^I do assertion for list users get call$/, async () => {
  expect(res.body.page).to.equal(1);
  expect(res.body.data).to.be.an('array')
  expect(res.body.data[0]).to.have.property('email')
  expect(res.body.data[0]).to.have.property('first_name')
  expect(res.body.data[0]).to.have.property('last_name')
  expect(res.body.data[0]).to.have.property('avatar')
  expect(res.body).to.deep.equal(apiUsersRes)
})

When(/^I register new user$/, async () => {
  res = await request(baseUrl).post('/api/register').send(createUser)
})

Then(/^I do assertion on register API response$/, async () => {
  expect(res.body).to.have.property('id')
  expect(res.body).to.have.property('token')
})