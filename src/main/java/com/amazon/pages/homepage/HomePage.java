package com.amazon.pages.homepage;

import org.apache.poi.hssf.usermodel.HSSFCell;
import org.apache.poi.hssf.usermodel.HSSFSheet;
import org.apache.poi.hssf.usermodel.HSSFWorkbook;
import org.apache.poi.poifs.filesystem.POIFSFileSystem;
import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.ui.ExpectedConditions;
import org.openqa.selenium.support.ui.WebDriverWait;

import java.io.File;
import java.io.FileInputStream;
import java.io.IOException;
import java.util.List;
import java.util.Random;

import static org.apache.poi.ss.usermodel.CellType.STRING;


public class HomePage {
    public WebDriver driver;

    private final By logoLink = By.cssSelector("div#nav-logo > a");
    private final By searchField = By.cssSelector("input#twotabsearchtextbox");
    private final By searchSubmitButton = By.cssSelector("div.nav-right .nav-input");
    private final By searchListItems = By.cssSelector("div.a-section .a-spacing-none");
    private final By searchedLinks = By.cssSelector(".a-link-normal .a-text-normal");
    private final By productTitle = By.cssSelector("span#productTitle");
    private final By searchItemText = By.cssSelector("span.a-size-medium.a-color-base.a-text-normal");
    private final By addToCartButton = By.cssSelector("input#add-to-cart-button");
    private final By navCartCount = By.cssSelector("span#nav-cart-count");
    private final By proceedToChkoutButton = By.cssSelector("a#hlb-ptc-btn-native");
    private final By addedToCartItemDisplay = By.cssSelector("div#huc-v2-order-row-messages");
    public static String itemSelected = "";


    /**
     * Constructor to initialise the driver
     *
     * @param driver
     */
    public HomePage(WebDriver driver) {
        this.driver = driver;
    }

    public WebElement getLogoLink() {
        new WebDriverWait(driver, 10).until(ExpectedConditions.visibilityOfElementLocated(searchField));
        return driver.findElement(logoLink);
    }

    public String getLogoLinkUrl() {
        new WebDriverWait(driver, 10).until(ExpectedConditions.visibilityOfElementLocated(searchField));
        return driver.findElement(logoLink).getAttribute("href");
    }

    public WebElement getSearchField() {
        new WebDriverWait(driver, 10).until(ExpectedConditions.visibilityOfElementLocated(searchField));
        return driver.findElement(searchField);
    }

    public WebElement searchSubmitButton() {
        new WebDriverWait(driver, 10).until(ExpectedConditions.visibilityOfElementLocated(searchSubmitButton));
        return driver.findElement(searchSubmitButton);
    }

    public boolean isSearchItemsDisplayed() {
        new WebDriverWait(driver, 10).until(ExpectedConditions.visibilityOfAllElementsLocatedBy(searchListItems));
        if (driver.findElements(searchListItems).size() >= 1) {
            return true;
        }
        return false;
    }

    public void selectRandonItem() {
        new WebDriverWait(driver, 10).until(ExpectedConditions.visibilityOfAllElementsLocatedBy(searchedLinks));
        List<WebElement> allItems = driver.findElements(searchedLinks);
        Random rand = new Random();
        int randomItem = rand.nextInt(20);
        allItems.get(randomItem).click();
    }

    public String getProductTitle() {
        new WebDriverWait(driver, 10).until(ExpectedConditions.visibilityOfAllElementsLocatedBy(productTitle));
        return driver.findElement(productTitle).getText();
    }

    public String getItemSelected() {
        List<WebElement> allItems = driver.findElements(searchItemText);
        Random rand = new Random();
        int randomItem = rand.nextInt(20);
        itemSelected = allItems.get(randomItem).getText();
        return itemSelected;
    }

    public Boolean isProductTitleDisplayed() {
        new WebDriverWait(driver, 10).until(ExpectedConditions.visibilityOfAllElementsLocatedBy(productTitle));
        return driver.findElement(productTitle).isDisplayed();
    }

    public WebElement addToCartButton() {
        new WebDriverWait(driver, 10).until(ExpectedConditions.visibilityOfAllElementsLocatedBy(addToCartButton));
        return driver.findElement(addToCartButton);
    }

    public WebElement proceedToCheckOutButton() {
        new WebDriverWait(driver, 10).until(ExpectedConditions.visibilityOfAllElementsLocatedBy(proceedToChkoutButton));
        return driver.findElement(proceedToChkoutButton);
    }

    public WebElement addedToCartDisplay() {
        return driver.findElement(addedToCartItemDisplay);
    }

    public void enterDataInSearchField(int searchKeyword) throws IOException {
        // Import excel sheet.
        File srcOne = new File("src/test/resources/testData/default.xls");

        // Load the file.
        FileInputStream finput = new FileInputStream(srcOne);

        POIFSFileSystem fileSystem = new POIFSFileSystem(finput);

        // Load the workbook.
        HSSFWorkbook workbook = new HSSFWorkbook(fileSystem);

        // Load the sheet in which data is stored.
        HSSFSheet sheet = workbook.getSheetAt(0);

        for (int i = 1; i <= sheet.getLastRowNum(); i++) {
            // Import data for Search Keyword
            HSSFCell cell = sheet.getRow(i).getCell(searchKeyword);
            cell.setCellType(STRING);
            driver.findElement(searchField).click();
            driver.findElement(searchField).sendKeys(cell.getStringCellValue());
        }
    }
}
