Feature: To search protractor in google

    @ProtractorScenario
    Scenario: Protractor Google Search
      Given I am on google page
      When I type "Protractor"
      And I click on search button
      And I clear the search text
      Then Google logo should be displayed