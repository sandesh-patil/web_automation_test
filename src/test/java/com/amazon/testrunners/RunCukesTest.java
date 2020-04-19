package com.amazon.testrunners;

import com.github.mkolisnyk.cucumber.runner.ExtendedCucumber;
import com.github.mkolisnyk.cucumber.runner.ExtendedCucumberOptions;
import com.vimalselvam.cucumber.listener.Reporter;
import cucumber.api.CucumberOptions;
import org.junit.AfterClass;
import org.junit.runner.RunWith;

@ExtendedCucumberOptions(
        retryCount = 0,
        detailedReport = true,
        detailedAggregatedReport = true,
        overviewReport = true,
        coverageReport = true,
        outputFolder = "target/extendedCucumber/")

@CucumberOptions(
        plugin = {"com.vimalselvam.cucumber.listener.ExtentCucumberFormatter:target/extent-report/report.html",
                  "html:target/cucumber-reports/screenshots"},
        features = {"src/test/resources/features"},

        glue = {"classpath:com.amazon.stepdefinitions"},
        tags = {"@amazon"})
//tags={"~@wip", "~@widget","@priority", "@envall,@production", "~@local"})

@RunWith(ExtendedCucumber.class)
public class RunCukesTest {
    @AfterClass
    public static void writeExtentReport() {
        Reporter.loadXMLConfig("src/test/resources/extent-config.xml");
    }
}
