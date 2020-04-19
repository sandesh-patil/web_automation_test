package com.amazon.stepdefinitions.homepage;

import com.amazon.pages.homepage.HomePage;
import com.amazon.stepdefinitions.Hooks;
import cucumber.api.java.en.And;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import org.junit.Assert;
import org.openqa.selenium.WebDriver;

import java.io.FileInputStream;
import java.io.IOException;
import java.io.InputStream;
import java.util.Properties;


public class HomePageSteps {
    public static WebDriver driver;
    HomePage homePage;
    Properties prop = new Properties();


    public HomePageSteps() {
        driver = Hooks.driver;
    }

    @Given("^I land on amazon homepage$")
    public void iLandOnAmazonHomepage() throws IOException {
        InputStream inputStream = new FileInputStream("src/test/resources/config.properties");
        prop.load(inputStream);
        String url = prop.getProperty("testUrl");
        driver.get(url);
    }

    @Then("^I should see amazon logo with link$")
    public void iShouldSeeAmazonLogoWithLink() {
        homePage = new HomePage(driver);
        Assert.assertTrue("Home Page Title is Incorrect", driver.getTitle().equalsIgnoreCase("Amazon.com.au: Shop online for Electronics, Apparel, Toys, Books, DVDs & more"));
        Assert.assertTrue("Home Page Logo link is not displayed", homePage.getLogoLink().isDisplayed());
        Assert.assertEquals("Home Page Logo link url is incorrect", "https://www.amazon.com.au/ref=nav_logo", homePage.getLogoLinkUrl());
    }

    @And("^I should see search results field with search button$")
    public void iShouldSeeSearchResultsFieldWithSearchButton() {
        Assert.assertTrue("Search Input field is not displaying in Home Page", homePage.getSearchField().isDisplayed());
        Assert.assertTrue("Search Submit button is not displaying", homePage.searchSubmitButton().isDisplayed());
    }

    @When("^I enter a search item text as \"([^\"]*)\" in the input field$")
    public void iEnterASearchItemTextAsInTheInputField(int searchKeyword) throws IOException {
        homePage = new HomePage(driver);
        homePage.enterDataInSearchField(searchKeyword);
    }

    @And("^I click on the submit search button$")
    public void iClickOnTheSubmitSearchButton() {
        homePage = new HomePage(driver);
        homePage.searchSubmitButton().click();
    }

    @Then("^I should see the correct search results list displayed$")
    public void iShouldSeeTheCorrectSearchResultsListDisplayed() {
        Assert.assertTrue("Searched List Items are not displaying", homePage.isSearchItemsDisplayed());
    }

    @And("^I select a random item from the search list page$")
    public void iSelectARandomItemFromTheSearchListPage() {
        homePage.selectRandonItem();
    }

    @Then("^I see the detail page opened for the selected item$")
    public void iSeeTheDetailPageOpenedForTheSelectedItem() {
        Assert.assertTrue("Product Title is not displaying", homePage.isProductTitleDisplayed());
    }

    @And("^I click on add to cart button from the selected items detail page$")
    public void iClickOnAddToCartButtonFromTheSelectedItemsDetailPage() {
        homePage.addToCartButton().click();
    }

    @Then("^I should get the item added to my cart as expected$")
    public void iShouldGetTheItemAddedToMyCartAsExpected() {
        Assert.assertTrue("Proceed to checkout Button is Not displaying", homePage.proceedToCheckOutButton().isDisplayed());
        Assert.assertTrue("Added to cart element Not displaying ", homePage.addedToCartDisplay().isDisplayed());
    }


    @And("^I click on proceed to checkout button from added to cart detail page$")
    public void iClickOnProceedToCheckoutButtonFromAddedToCartDetailPage() {
        homePage.proceedToCheckOutButton().click();
    }

    @And("^I login to my account with \"([^\"]*)\" and \"([^\"]*)\"$")
    public void iLoginToMyAccountWithAnd(String arg0, String arg1) {
        /***********
         *  Need to enter test account login username and password details here to login and proceed to purchase
         *  ********/
    }

    @And("^I enter details of my card in the fields to make purchase$")
    public void iEnterDetailsOfMyCardInTheFieldsToMakePurchase() {
        /***********
         *  Test account credit Or Debit card details is required to process this functionality
         *  Alternatively there will be a dedicated environment to add card details and make purcahse in Test Or
         *  Production and then cancel purchase
         *  ********/
    }

    @When("^I click submit to purchase button$")
    public void iClickSubmitToPurchaseButton() {
        /***********
         *  This step requires credit OR debit card details to be entered
         *  ********/
    }

    @Then("^I should see a success message with correct purchase details$")
    public void iShouldSeeASuccessMessageWithCorrectPurchaseDetails() {
        /***********
         *  Assertion implemented for success message OR page with all purchase details displayed as per Business requirements
         *  ********/
    }
}
