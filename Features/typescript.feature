Feature: To search typescript in google

    @TypeScriptScenario
    Scenario: Typescript Google Search
      Given I am on google page
      When I type "Typescript"
      And I click on search button
      Then Sign in button should be displayed