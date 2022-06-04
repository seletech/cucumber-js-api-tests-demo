Feature: Create new user

@Register
Scenario: Register new user
Given I register new user
And Verify status is 200
Then I do assertion on register API response