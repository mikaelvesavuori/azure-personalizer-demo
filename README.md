# Azure Personalizer demo (Node.js)

More or less just a prepackaged version of the [official Microsoft quickstart for Personalizer](https://docs.microsoft.com/en-us/azure/cognitive-services/personalizer/sdk-learning-loop?pivots=programming-language-javascript).

Some small modifications made to add functions that don't exist in the official demo. You will most likely want to code this to be more meaningful for your own use case.

Also, consider setting lower times (in the Azure console) for the reward time value so you can see the reinforcement learning kick in faster.

## Prerequisites

- Have an Azure account
- Be logged in through the environment
- Have access rights to create and delete resources
- Recent Node version installed

## Installation

Run `npm install` or `yarn`.

## Deploy

Export the variables (set them as you like first) in `vars.sh`.

Run `deploy.sh`.

## Remove and delete resources

Run `teardown.sh`.

## Configuration

Once the resources are up in Azure, set the key and endpoint in `config.js`. You should be all set to run the demo after that!

## Running the demo

Run `node index.js`.
