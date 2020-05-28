const { v1: uuidv1 } = require("uuid");
const Personalizer = require("@azure/cognitiveservices-personalizer");
const CognitiveServicesCredentials = require("@azure/ms-rest-azure-js")
  .CognitiveServicesCredentials;
const readline = require("readline-sync");

// Import functions
const continueLoop = require("./functions/continueLoop");
const getActionsList = require("./functions/getActionsList");
const getContextFeaturesList = require("./functions/getContextFeaturesList");
const getExcludedActionsList = require("./functions/getExcludedActionsList");
const getReward = require("./functions/getReward");

// Config
const config = require("./config");

// Set credentials
const SERVICE_KEY = config.SERVICE_KEY;
const BASE_URI = config.BASE_URI;
const CREDENTIALS = new CognitiveServicesCredentials(SERVICE_KEY);

// Initialize Personalizer client
const personalizerClient = new Personalizer.PersonalizerClient(
  CREDENTIALS,
  BASE_URI
);

// Rank the actions
async function runPersonalizer() {
  let runLoop = true;

  do {
    let rankRequest = {};

    rankRequest.eventId = uuidv1();
    rankRequest.contextFeatures = getContextFeaturesList();
    rankRequest.actions = getActionsList();
    // rankRequest.excludedActions = getExcludedActionsList();

    rankRequest.deferActivation = false;

    let rankResponse = await personalizerClient.rank(rankRequest);

    console.log(
      `\nPersonalization service thinks you would like to have:\n${rankResponse.rewardActionId}`
    );

    let reward = await getReward();

    console.log(
      "\nPersonalization service ranked the actions with the probabilities as below:\n"
    );

    for (let i = 0; i < rankResponse.ranking.length; i++) {
      console.log(JSON.stringify(rankResponse.ranking[i]) + "\n");
    }

    // Send the reward for the action based on user response
    let rewardRequest = {
      value: reward,
    };

    console.log("rewardRequest", rewardRequest);

    await personalizerClient.events.reward(rankRequest.eventId, rewardRequest);

    runLoop = continueLoop();
  } while (runLoop);

  let rankResponse = await personalizerClient.rank(rankRequest);

  let rewardRequest = {
    value: reward,
  };

  await personalizerClient.events.reward(rankRequest.eventId, rewardRequest);
}

runPersonalizer();
