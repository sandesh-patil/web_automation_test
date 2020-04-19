$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("homePage/HomePage.feature");
formatter.feature({
  "line": 2,
  "name": "Homepage Tests",
  "description": "\nAs a user\nI can see and use homepage functions to search and purchase items of My interest",
  "id": "homepage-tests",
  "keyword": "Feature",
  "tags": [
    {
      "line": 1,
      "name": "@envall"
    },
    {
      "line": 1,
      "name": "@homepage"
    },
    {
      "line": 1,
      "name": "@priority"
    },
    {
      "line": 1,
      "name": "@amazon"
    }
  ]
});
formatter.before({
  "duration": 2107663952,
  "status": "passed"
});
formatter.background({
  "line": 7,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 8,
  "name": "I land on amazon homepage",
  "keyword": "Given "
});
formatter.match({
  "location": "HomePageSteps.iLandOnAmazonHomepage()"
});
formatter.result({
  "duration": 4826005402,
  "status": "passed"
});
formatter.scenario({
  "line": 11,
  "name": "Amazon logo link and search results field is present on homepage",
  "description": "",
  "id": "homepage-tests;amazon-logo-link-and-search-results-field-is-present-on-homepage",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 10,
      "name": "@envall"
    }
  ]
});
formatter.step({
  "line": 12,
  "name": "I should see amazon logo with link",
  "keyword": "Then "
});
formatter.step({
  "line": 13,
  "name": "I should see search results field with search button",
  "keyword": "And "
});
formatter.match({
  "location": "HomePageSteps.iShouldSeeAmazonLogoWithLink()"
});
formatter.result({
  "duration": 911438792,
  "status": "passed"
});
formatter.match({
  "location": "HomePageSteps.iShouldSeeSearchResultsFieldWithSearchButton()"
});
formatter.result({
  "duration": 120325338,
  "status": "passed"
});
formatter.after({
  "duration": 129365467,
  "status": "passed"
});
formatter.scenarioOutline({
  "line": 16,
  "name": "Verify user can perform search items from the search field in homepage",
  "description": "",
  "id": "homepage-tests;verify-user-can-perform-search-items-from-the-search-field-in-homepage",
  "type": "scenario_outline",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 15,
      "name": "@priority"
    },
    {
      "line": 15,
      "name": "@envall"
    }
  ]
});
formatter.step({
  "line": 17,
  "name": "I enter a search item text as \"\u003csearchKeyword\u003e\" in the input field",
  "keyword": "When "
});
formatter.step({
  "line": 18,
  "name": "I click on the submit search button",
  "keyword": "And "
});
formatter.step({
  "line": 19,
  "name": "I should see the correct search results list displayed",
  "keyword": "Then "
});
formatter.examples({
  "line": 21,
  "name": "",
  "description": "",
  "id": "homepage-tests;verify-user-can-perform-search-items-from-the-search-field-in-homepage;",
  "rows": [
    {
      "cells": [
        "searchKeyword"
      ],
      "line": 22,
      "id": "homepage-tests;verify-user-can-perform-search-items-from-the-search-field-in-homepage;;1"
    },
    {
      "cells": [
        "Sony 55 inch TV"
      ],
      "line": 23,
      "id": "homepage-tests;verify-user-can-perform-search-items-from-the-search-field-in-homepage;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 1622026125,
  "status": "passed"
});
formatter.background({
  "line": 7,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 8,
  "name": "I land on amazon homepage",
  "keyword": "Given "
});
formatter.match({
  "location": "HomePageSteps.iLandOnAmazonHomepage()"
});
formatter.result({
  "duration": 9776957600,
  "status": "passed"
});
formatter.scenario({
  "line": 23,
  "name": "Verify user can perform search items from the search field in homepage",
  "description": "",
  "id": "homepage-tests;verify-user-can-perform-search-items-from-the-search-field-in-homepage;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 1,
      "name": "@priority"
    },
    {
      "line": 1,
      "name": "@homepage"
    },
    {
      "line": 1,
      "name": "@amazon"
    },
    {
      "line": 1,
      "name": "@envall"
    }
  ]
});
formatter.step({
  "line": 17,
  "name": "I enter a search item text as \"Sony 55 inch TV\" in the input field",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 18,
  "name": "I click on the submit search button",
  "keyword": "And "
});
formatter.step({
  "line": 19,
  "name": "I should see the correct search results list displayed",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "Sony 55 inch TV",
      "offset": 31
    }
  ],
  "location": "HomePageSteps.iEnterASearchItemTextAsInTheInputField(String)"
});
formatter.result({
  "duration": 323191400,
  "status": "passed"
});
formatter.match({
  "location": "HomePageSteps.iClickOnTheSubmitSearchButton()"
});
formatter.result({
  "duration": 852237431,
  "status": "passed"
});
formatter.match({
  "location": "HomePageSteps.iShouldSeeTheCorrectSearchResultsListDisplayed()"
});
formatter.result({
  "duration": 2541769260,
  "status": "passed"
});
formatter.after({
  "duration": 110402895,
  "status": "passed"
});
formatter.scenarioOutline({
  "line": 26,
  "name": "Verify user can perform search items from the search field in homepage",
  "description": "",
  "id": "homepage-tests;verify-user-can-perform-search-items-from-the-search-field-in-homepage",
  "type": "scenario_outline",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 25,
      "name": "@priority"
    },
    {
      "line": 25,
      "name": "@envall"
    }
  ]
});
formatter.step({
  "line": 27,
  "name": "I enter a search item text as \"\u003csearchKeyword\u003e\" in the input field",
  "keyword": "When "
});
formatter.step({
  "line": 28,
  "name": "I click on the submit search button",
  "keyword": "And "
});
formatter.step({
  "line": 29,
  "name": "I select a random item from the search list page",
  "keyword": "And "
});
formatter.step({
  "line": 30,
  "name": "I see the detail page opened for the selected item",
  "keyword": "Then "
});
formatter.examples({
  "line": 32,
  "name": "",
  "description": "",
  "id": "homepage-tests;verify-user-can-perform-search-items-from-the-search-field-in-homepage;",
  "rows": [
    {
      "cells": [
        "searchKeyword"
      ],
      "line": 33,
      "id": "homepage-tests;verify-user-can-perform-search-items-from-the-search-field-in-homepage;;1"
    },
    {
      "cells": [
        "Sony 55 inch TV"
      ],
      "line": 34,
      "id": "homepage-tests;verify-user-can-perform-search-items-from-the-search-field-in-homepage;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 1731239409,
  "status": "passed"
});
formatter.background({
  "line": 7,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 8,
  "name": "I land on amazon homepage",
  "keyword": "Given "
});
formatter.match({
  "location": "HomePageSteps.iLandOnAmazonHomepage()"
});
formatter.result({
  "duration": 11993345596,
  "status": "passed"
});
formatter.scenario({
  "line": 34,
  "name": "Verify user can perform search items from the search field in homepage",
  "description": "",
  "id": "homepage-tests;verify-user-can-perform-search-items-from-the-search-field-in-homepage;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 1,
      "name": "@priority"
    },
    {
      "line": 1,
      "name": "@homepage"
    },
    {
      "line": 1,
      "name": "@amazon"
    },
    {
      "line": 1,
      "name": "@envall"
    }
  ]
});
formatter.step({
  "line": 27,
  "name": "I enter a search item text as \"Sony 55 inch TV\" in the input field",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 28,
  "name": "I click on the submit search button",
  "keyword": "And "
});
formatter.step({
  "line": 29,
  "name": "I select a random item from the search list page",
  "keyword": "And "
});
formatter.step({
  "line": 30,
  "name": "I see the detail page opened for the selected item",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "Sony 55 inch TV",
      "offset": 31
    }
  ],
  "location": "HomePageSteps.iEnterASearchItemTextAsInTheInputField(String)"
});
formatter.result({
  "duration": 316038377,
  "status": "passed"
});
formatter.match({
  "location": "HomePageSteps.iClickOnTheSubmitSearchButton()"
});
formatter.result({
  "duration": 771936752,
  "status": "passed"
});
formatter.match({
  "location": "HomePageSteps.iSelectARandomItemFromTheSearchListPage()"
});
formatter.result({
  "duration": 1416579406,
  "status": "passed"
});
formatter.match({
  "location": "HomePageSteps.iSeeTheDetailPageOpenedForTheSelectedItem()"
});
formatter.result({
  "duration": 587104524,
  "status": "passed"
});
formatter.after({
  "duration": 104963429,
  "status": "passed"
});
formatter.scenarioOutline({
  "line": 37,
  "name": "Verify user can search for an item and add to cart",
  "description": "",
  "id": "homepage-tests;verify-user-can-search-for-an-item-and-add-to-cart",
  "type": "scenario_outline",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 36,
      "name": "@priority"
    },
    {
      "line": 36,
      "name": "@envall"
    }
  ]
});
formatter.step({
  "line": 38,
  "name": "I enter a search item text as \"\u003csearchKeyword\u003e\" in the input field",
  "keyword": "When "
});
formatter.step({
  "line": 39,
  "name": "I click on the submit search button",
  "keyword": "And "
});
formatter.step({
  "line": 40,
  "name": "I select a random item from the search list page",
  "keyword": "And "
});
formatter.step({
  "line": 41,
  "name": "I click on add to cart button from the selected items detail page",
  "keyword": "And "
});
formatter.step({
  "line": 42,
  "name": "I should get the item added to my cart as expected",
  "keyword": "Then "
});
formatter.examples({
  "line": 44,
  "name": "",
  "description": "",
  "id": "homepage-tests;verify-user-can-search-for-an-item-and-add-to-cart;",
  "rows": [
    {
      "cells": [
        "searchKeyword"
      ],
      "line": 45,
      "id": "homepage-tests;verify-user-can-search-for-an-item-and-add-to-cart;;1"
    },
    {
      "cells": [
        "Sony 55 inch TV"
      ],
      "line": 46,
      "id": "homepage-tests;verify-user-can-search-for-an-item-and-add-to-cart;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 1724600776,
  "status": "passed"
});
formatter.background({
  "line": 7,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 8,
  "name": "I land on amazon homepage",
  "keyword": "Given "
});
formatter.match({
  "location": "HomePageSteps.iLandOnAmazonHomepage()"
});
formatter.result({
  "duration": 11655418187,
  "status": "passed"
});
formatter.scenario({
  "line": 46,
  "name": "Verify user can search for an item and add to cart",
  "description": "",
  "id": "homepage-tests;verify-user-can-search-for-an-item-and-add-to-cart;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 1,
      "name": "@priority"
    },
    {
      "line": 1,
      "name": "@homepage"
    },
    {
      "line": 1,
      "name": "@amazon"
    },
    {
      "line": 1,
      "name": "@envall"
    }
  ]
});
formatter.step({
  "line": 38,
  "name": "I enter a search item text as \"Sony 55 inch TV\" in the input field",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 39,
  "name": "I click on the submit search button",
  "keyword": "And "
});
formatter.step({
  "line": 40,
  "name": "I select a random item from the search list page",
  "keyword": "And "
});
formatter.step({
  "line": 41,
  "name": "I click on add to cart button from the selected items detail page",
  "keyword": "And "
});
formatter.step({
  "line": 42,
  "name": "I should get the item added to my cart as expected",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "Sony 55 inch TV",
      "offset": 31
    }
  ],
  "location": "HomePageSteps.iEnterASearchItemTextAsInTheInputField(String)"
});
formatter.result({
  "duration": 304667189,
  "status": "passed"
});
formatter.match({
  "location": "HomePageSteps.iClickOnTheSubmitSearchButton()"
});
formatter.result({
  "duration": 3512503323,
  "status": "passed"
});
formatter.match({
  "location": "HomePageSteps.iSelectARandomItemFromTheSearchListPage()"
});
formatter.result({
  "duration": 1388082078,
  "status": "passed"
});
formatter.match({
  "location": "HomePageSteps.iClickOnAddToCartButtonFromTheSelectedItemsDetailPage()"
});
formatter.result({
  "duration": 3868949539,
  "status": "passed"
});
formatter.match({
  "location": "HomePageSteps.iShouldGetTheItemAddedToMyCartAsExpected()"
});
formatter.result({
  "duration": 72893772,
  "status": "passed"
});
formatter.after({
  "duration": 117119947,
  "status": "passed"
});
formatter.scenarioOutline({
  "line": 49,
  "name": "Verify user can proceed to checkout and purchase the item selected",
  "description": "",
  "id": "homepage-tests;verify-user-can-proceed-to-checkout-and-purchase-the-item-selected",
  "type": "scenario_outline",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 48,
      "name": "@priority"
    },
    {
      "line": 48,
      "name": "@envall"
    }
  ]
});
formatter.step({
  "line": 50,
  "name": "I enter a search item text as \"\u003csearchKeyword\u003e\" in the input field",
  "keyword": "And "
});
formatter.step({
  "line": 51,
  "name": "I click on the submit search button",
  "keyword": "And "
});
formatter.step({
  "line": 52,
  "name": "I select a random item from the search list page",
  "keyword": "And "
});
formatter.step({
  "line": 53,
  "name": "I click on add to cart button from the selected items detail page",
  "keyword": "And "
});
formatter.step({
  "line": 54,
  "name": "I click on proceed to checkout button from added to cart detail page",
  "keyword": "And "
});
formatter.step({
  "line": 55,
  "name": "I login to my account with \"\u003cusername\u003e\" and \"\u003cpassword\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 56,
  "name": "I enter details of my card in the fields to make purchase",
  "keyword": "And "
});
formatter.step({
  "line": 57,
  "name": "I click submit to purchase button",
  "keyword": "When "
});
formatter.step({
  "line": 58,
  "name": "I should see a success message with correct purchase details",
  "keyword": "Then "
});
formatter.examples({
  "line": 60,
  "name": "",
  "description": "",
  "id": "homepage-tests;verify-user-can-proceed-to-checkout-and-purchase-the-item-selected;",
  "rows": [
    {
      "cells": [
        "searchKeyword",
        "username",
        "password"
      ],
      "line": 61,
      "id": "homepage-tests;verify-user-can-proceed-to-checkout-and-purchase-the-item-selected;;1"
    },
    {
      "cells": [
        "Sony 55 inch TV",
        "xyz@gmail.com",
        "test551"
      ],
      "line": 62,
      "id": "homepage-tests;verify-user-can-proceed-to-checkout-and-purchase-the-item-selected;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 1749669319,
  "status": "passed"
});
formatter.background({
  "line": 7,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 8,
  "name": "I land on amazon homepage",
  "keyword": "Given "
});
formatter.match({
  "location": "HomePageSteps.iLandOnAmazonHomepage()"
});
formatter.result({
  "duration": 6939401225,
  "status": "passed"
});
formatter.scenario({
  "line": 62,
  "name": "Verify user can proceed to checkout and purchase the item selected",
  "description": "",
  "id": "homepage-tests;verify-user-can-proceed-to-checkout-and-purchase-the-item-selected;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 1,
      "name": "@priority"
    },
    {
      "line": 1,
      "name": "@homepage"
    },
    {
      "line": 1,
      "name": "@amazon"
    },
    {
      "line": 1,
      "name": "@envall"
    }
  ]
});
formatter.step({
  "line": 50,
  "name": "I enter a search item text as \"Sony 55 inch TV\" in the input field",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 51,
  "name": "I click on the submit search button",
  "keyword": "And "
});
formatter.step({
  "line": 52,
  "name": "I select a random item from the search list page",
  "keyword": "And "
});
formatter.step({
  "line": 53,
  "name": "I click on add to cart button from the selected items detail page",
  "keyword": "And "
});
formatter.step({
  "line": 54,
  "name": "I click on proceed to checkout button from added to cart detail page",
  "keyword": "And "
});
formatter.step({
  "line": 55,
  "name": "I login to my account with \"xyz@gmail.com\" and \"test551\"",
  "matchedColumns": [
    1,
    2
  ],
  "keyword": "And "
});
formatter.step({
  "line": 56,
  "name": "I enter details of my card in the fields to make purchase",
  "keyword": "And "
});
formatter.step({
  "line": 57,
  "name": "I click submit to purchase button",
  "keyword": "When "
});
formatter.step({
  "line": 58,
  "name": "I should see a success message with correct purchase details",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "Sony 55 inch TV",
      "offset": 31
    }
  ],
  "location": "HomePageSteps.iEnterASearchItemTextAsInTheInputField(String)"
});
formatter.result({
  "duration": 281678086,
  "status": "passed"
});
formatter.match({
  "location": "HomePageSteps.iClickOnTheSubmitSearchButton()"
});
formatter.result({
  "duration": 6565588419,
  "status": "passed"
});
formatter.match({
  "location": "HomePageSteps.iSelectARandomItemFromTheSearchListPage()"
});
formatter.result({
  "duration": 3189363866,
  "status": "passed"
});
formatter.match({
  "location": "HomePageSteps.iClickOnAddToCartButtonFromTheSelectedItemsDetailPage()"
});
formatter.result({
  "duration": 1178162603,
  "status": "passed"
});
formatter.match({
  "location": "HomePageSteps.iClickOnProceedToCheckoutButtonFromAddedToCartDetailPage()"
});
formatter.result({
  "duration": 19637,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "xyz@gmail.com",
      "offset": 28
    },
    {
      "val": "test551",
      "offset": 48
    }
  ],
  "location": "HomePageSteps.iLoginToMyAccountWithAnd(String,String)"
});
formatter.result({
  "duration": 94080,
  "status": "passed"
});
formatter.match({
  "location": "HomePageSteps.iEnterDetailsOfMyCardInTheFieldsToMakePurchase()"
});
formatter.result({
  "duration": 17891,
  "status": "passed"
});
formatter.match({
  "location": "HomePageSteps.iClickSubmitToPurchaseButton()"
});
formatter.result({
  "duration": 26744,
  "status": "passed"
});
formatter.match({
  "location": "HomePageSteps.iShouldSeeASuccessMessageWithCorrectPurchaseDetails()"
});
formatter.result({
  "duration": 76357,
  "status": "passed"
});
formatter.after({
  "duration": 172876720,
  "status": "passed"
});
});