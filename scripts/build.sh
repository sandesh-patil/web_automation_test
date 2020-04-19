Note: Env configuration script for executing in remote Bamboo CI/CD

# !/bin/bash
nohup Xvfb :99 </dev/null>/dev/null 2>&1 &
echo "START BUILDING..."

if [ "$1" == "" ]
then
	echo "No cucumber tag passed in. Build Finished."
	exit 0
fi

export DISPLAY=:99
export LC_NUMERIC="en_US.UTF-8"

echo "RUNNING AGAINST TEST ENVIRONMENT: $TEST_ENVIRONMENT"

if [ $bamboo_scope == "p1" ]
then
    TAGS="$1 --tags @priority,@regression"
elif [ $bamboo_scope == "p2" ]
then
	TAGS="$1 --tags ~@priority --tags ~@regression"
else
    TAGS="$1"
fi

echo "RUNNING AGAINST ENVIRONMENT: $bamboo_env"

if [ $bamboo_is_encryption = "true" ]
then
    TAGS="--tags @encryptTestData"
else
    TAGS="$TAGS --tags @envall,@$bamboo_env --tags ~@local"
fi

echo "TAGS EXECUTED: $TAGS"

echo "$MAVEN_OPTS"

COMMANDLINE="mvn clean install -U -Dcucumber.options='$TAGS'"


chmod +x drivers/linux/chromedriver
chmod +x drivers/linux/geckodriver

set -o xtrace
eval $COMMANDLINE