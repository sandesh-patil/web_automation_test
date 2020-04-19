package com.amazon.stepdefinitions.homepage;

import com.amazon.common.DataHelper;
import com.amazon.pages.homepage.HomePage;
import com.amazon.stepdefinitions.Hooks;
import cucumber.api.java.en.And;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import org.junit.Assert;
import org.openqa.selenium.WebDriver;


public class HomePageSteps {
    public static WebDriver driver;
    HomePage homePage;
    DataHelper dataHelper;

    public HomePageSteps() {
        driver = Hooks.driver;
    }

    @Given("^I land on amazon homepage$")
    public void iLandOnAmazonHomepage() {
        String url = "https://www.amazon.com.au/";
//        String url = "config/url.yml/homepage_url";
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
    public void iEnterASearchItemTextAsInTheInputField(String searchKeyword) {
        homePage = new HomePage(driver);
        homePage.getSearchField().click();
        homePage.getSearchField().sendKeys(searchKeyword);
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
}
