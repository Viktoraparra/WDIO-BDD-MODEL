Feature: User Selection 



    Scenario Outline: TC-001 Select a Selefct a Qa Engineer and verify search
        Given navigate to <page>
        When deel page validate page title <title>
        Then select <role> 
        Then Select <country>
        Then Place search and verify constains in header <country2>
        Examples:
            | page                                              | title | role        | country | country2 |
            | https://growth.deel.training/dev/salary-insights  | Deel  |qa Engineer  | Canada  | Canada   |
        
    
 
