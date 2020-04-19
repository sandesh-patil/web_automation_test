package com.amazon.stepdefinitions;

import com.google.common.io.Files;
import com.vimalselvam.cucumber.listener.Reporter;
import cucumber.api.Scenario;
import cucumber.api.java.After;
import cucumber.api.java.Before;
import org.openqa.selenium.OutputType;
import org.openqa.selenium.TakesScreenshot;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;
import org.openqa.selenium.chrome.ChromeOptions;

import java.io.File;
import java.io.IOException;
import java.util.Collections;

public class Hooks {
    public static WebDriver driver;

    @Before
    /**
     * Delete all cookies at the start of each scenario to avoid
     * shared state between tests
     */
    public void openBrowser() {
        String exePath = "drivers/mac/chromedriver";
        System.setProperty("webdriver.chrome.driver", exePath);
        driver = new ChromeDriver();
        driver.manage().deleteAllCookies();
        driver.manage().window().maximize();
        ChromeOptions options = new ChromeOptions();
        options.addArguments("--headless");
        options.addArguments("--disable-notifications");
        options.setExperimentalOption("excludeSwitches", Collections.singletonList("enable-automation"));
    }

    @After
    /**
     * Take screenshots and Close the Browser
     */
    public void closeBrowser(Scenario scenario) {
        String screenshotName = scenario.getName().replaceAll(" ", "_");
        try {
            /** This takes a screenshot from the driver and save it to the specified location */
            TakesScreenshot ts = (TakesScreenshot) driver;
            File sourcePath = ts.getScreenshotAs(OutputType.FILE);

            /*** Building up the destination path for the screenshot to save
             Also make sure to create a folder 'screenshots' with in the cucumber-report folder */
            File destinationPath = new File(System.getProperty("user.dir") + "/target/cucumber-reports/screenshots/" + screenshotName + ".png");

            /** Copy taken screenshot from source location to destination location */
            Files.copy(sourcePath, destinationPath);

            /** This attach the specified screenshot to the test */
            Reporter.addScreenCaptureFromPath(destinationPath.toString());
        } catch (IOException e) {
        }
        driver.quit();
    }
}
