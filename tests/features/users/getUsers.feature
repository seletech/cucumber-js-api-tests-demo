Feature: Users Feature

@Get
  Scenario: Get users
    Given I do get call for list users
    And Verify status is 200
    Then I do assertion for list users get call
    