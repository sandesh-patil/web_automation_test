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
  "duration": 2042816917,
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
  "duration": 7669146972,
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
  "duration": 147964668,
  "status": "passed"
});
formatter.match({
  "location": "HomePageSteps.iShouldSeeSearchResultsFieldWithSearchButton()"
});
formatter.result({
  "duration": 102849780,
  "status": "passed"
});
formatter.after({
  "duration": 1617562239,
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
        "1"
      ],
      "line": 23,
      "id": "homepage-tests;verify-user-can-perform-search-items-from-the-search-field-in-homepage;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 1599349355,
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
  "duration": 7097057529,
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
  "name": "I enter a search item text as \"1\" in the input field",
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
      "val": "1",
      "offset": 31
    }
  ],
  "location": "HomePageSteps.iEnterASearchItemTextAsInTheInputField(int)"
});
formatter.result({
  "duration": 651637402,
  "status": "passed"
});
formatter.match({
  "location": "HomePageSteps.iClickOnTheSubmitSearchButton()"
});
formatter.result({
  "duration": 1263409164,
  "status": "passed"
});
formatter.match({
  "location": "HomePageSteps.iShouldSeeTheCorrectSearchResultsListDisplayed()"
});
formatter.result({
  "duration": 5500615550,
  "status": "passed"
});
formatter.after({
  "duration": 858757295,
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
        "1"
      ],
      "line": 34,
      "id": "homepage-tests;verify-user-can-perform-search-items-from-the-search-field-in-homepage;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 1613623086,
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
  "duration": 6569557785,
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
  "name": "I enter a search item text as \"1\" in the input field",
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
      "val": "1",
      "offset": 31
    }
  ],
  "location": "HomePageSteps.iEnterASearchItemTextAsInTheInputField(int)"
});
formatter.result({
  "duration": 1777864910,
  "status": "passed"
});
formatter.match({
  "location": "HomePageSteps.iClickOnTheSubmitSearchButton()"
});
formatter.result({
  "duration": 362899429,
  "status": "passed"
});
formatter.match({
  "location": "HomePageSteps.iSelectARandomItemFromTheSearchListPage()"
});
formatter.result({
  "duration": 2290591110,
  "status": "passed"
});
formatter.match({
  "location": "HomePageSteps.iSeeTheDetailPageOpenedForTheSelectedItem()"
});
formatter.result({
  "duration": 1182156308,
  "status": "passed"
});
formatter.after({
  "duration": 2498028734,
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
        "1"
      ],
      "line": 46,
      "id": "homepage-tests;verify-user-can-search-for-an-item-and-add-to-cart;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 1529683775,
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
  "duration": 9048433394,
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
  "name": "I enter a search item text as \"1\" in the input field",
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
      "val": "1",
      "offset": 31
    }
  ],
  "location": "HomePageSteps.iEnterASearchItemTextAsInTheInputField(int)"
});
formatter.result({
  "duration": 490672107,
  "status": "passed"
});
formatter.match({
  "location": "HomePageSteps.iClickOnTheSubmitSearchButton()"
});
formatter.result({
  "duration": 418209058,
  "status": "passed"
});
formatter.match({
  "location": "HomePageSteps.iSelectARandomItemFromTheSearchListPage()"
});
formatter.result({
  "duration": 2179011310,
  "status": "passed"
});
formatter.match({
  "location": "HomePageSteps.iClickOnAddToCartButtonFromTheSelectedItemsDetailPage()"
});
formatter.result({
  "duration": 5277437433,
  "status": "passed"
});
formatter.match({
  "location": "HomePageSteps.iShouldGetTheItemAddedToMyCartAsExpected()"
});
formatter.result({
  "duration": 96475716,
  "status": "passed"
});
formatter.after({
  "duration": 854586608,
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
        "1",
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
  "duration": 1699141563,
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
  "duration": 3342937022,
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
  "name": "I enter a search item text as \"1\" in the input field",
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
      "val": "1",
      "offset": 31
    }
  ],
  "location": "HomePageSteps.iEnterASearchItemTextAsInTheInputField(int)"
});
formatter.result({
  "duration": 538762618,
  "status": "passed"
});
formatter.match({
  "location": "HomePageSteps.iClickOnTheSubmitSearchButton()"
});
formatter.result({
  "duration": 400247160,
  "status": "passed"
});
formatter.match({
  "location": "HomePageSteps.iSelectARandomItemFromTheSearchListPage()"
});
formatter.result({
  "duration": 1282163300,
  "status": "passed"
});
formatter.match({
  "location": "HomePageSteps.iClickOnAddToCartButtonFromTheSelectedItemsDetailPage()"
});
formatter.result({
  "duration": 3157484577,
  "status": "passed"
});
formatter.match({
  "location": "HomePageSteps.iClickOnProceedToCheckoutButtonFromAddedToCartDetailPage()"
});
formatter.result({
  "duration": 1605182702,
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
  "duration": 1035399,
  "status": "passed"
});
formatter.match({
  "location": "HomePageSteps.iEnterDetailsOfMyCardInTheFieldsToMakePurchase()"
});
formatter.result({
  "duration": 229084,
  "status": "passed"
});
formatter.match({
  "location": "HomePageSteps.iClickSubmitToPurchaseButton()"
});
formatter.result({
  "duration": 30787,
  "status": "passed"
});
formatter.match({
  "location": "HomePageSteps.iShouldSeeASuccessMessageWithCorrectPurchaseDetails()"
});
formatter.result({
  "duration": 41808,
  "status": "passed"
});
formatter.after({
  "duration": 1534904596,
  "status": "passed"
});
});