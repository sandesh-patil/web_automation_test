package com.amazon.testrunners;

import org.junit.runner.RunWith;

import com.github.mkolisnyk.cucumber.runner.ExtendedCucumber;
import com.github.mkolisnyk.cucumber.runner.ExtendedCucumberOptions;

import cucumber.api.CucumberOptions;

@ExtendedCucumberOptions(
        retryCount = 0,
        detailedReport = true,
        detailedAggregatedReport = true,
        overviewReport = true,
        coverageReport = true,
        outputFolder = "target/extendedCucumber/")

@CucumberOptions(
        plugin={"json:target/cucumber-reports/Cucumber.json",
                "junit:target/cucumber-reports/Cucumber.xml",
                "pretty", "html:target/cucumber-reports" },
        features = {"src/test/resources/features"},

        glue = {"classpath:com.amazon.stepdefinitions"},
        tags={"@amazon"})
//tags={"~@wip", "~@widget","@priority", "@envall,@production", "~@local"})

//Important: This test runner is the only test engine in Maven test.
@RunWith(ExtendedCucumber.class)
public class LocalTestRunner {


}
