package com.amazon.pages.homepage;

import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.ui.ExpectedConditions;
import org.openqa.selenium.support.ui.WebDriverWait;

import java.util.List;
import java.util.Random;

public class SearchResultsPage {
    public WebDriver driver;

    private final By searchField = By.cssSelector("input#twotabsearchtextbox");
    private final By searchListSections = By.cssSelector("div.sg-col-inner");
    private final By searchedItems = By.cssSelector("div.a-section .a-spacing-none");
    private final By searchBlock = By.cssSelector("div#search");
    private final By productTitle = By.cssSelector("span#productTitle");

    /**
     * Constructor to initialise the driver
     *
     * @param driver
     */
    public SearchResultsPage(WebDriver driver) {
        this.driver = driver;
    }

    public void selectRandonItem() {
        List<WebElement> allItems = driver.findElement(searchBlock).findElements(searchedItems);
        Random rand = new Random();
        int randonItem = rand.nextInt(allItems.size());
        allItems.get(randonItem).click();
    }

    public String getProductTitle() {
        return driver.findElement(productTitle).getText();
    }

    public Boolean getListItem() {
        new WebDriverWait(driver, 10).until(ExpectedConditions.visibilityOfElementLocated(searchedItems));
        return driver.findElement(searchedItems).isDisplayed();
    }

}
