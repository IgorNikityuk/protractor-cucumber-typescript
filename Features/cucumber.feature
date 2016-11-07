Feature: To search cucumber in google

    @CucumberScenario
    Scenario: Cucumber Google Search
      Given I am on google page
      When I type "Cucumber"
      And I click on search button
      Then Google logo should be displayed