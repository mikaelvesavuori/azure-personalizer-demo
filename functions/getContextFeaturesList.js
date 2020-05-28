const readline = require("readline-sync");

function getContextFeaturesList() {
  let timeOfDayFeatures = ["morning", "afternoon", "evening", "night"];
  let tasteFeatures = ["salty", "sweet"];

  let answer = readline.question(
    "\nWhat time of day is it (enter number)? 1. morning 2. afternoon 3. evening 4. night\n"
  );
  let selection = parseInt(answer);
  let timeOfDay =
    selection >= 1 && selection <= 4
      ? timeOfDayFeatures[selection - 1]
      : timeOfDayFeatures[0];

  answer = readline.question(
    "\nWhat type of food would you prefer (enter number)? 1. salty 2. sweet\n"
  );
  selection = parseInt(answer);
  let taste =
    selection >= 1 && selection <= 2
      ? tasteFeatures[selection - 1]
      : tasteFeatures[0];

  console.log("Selected features:\n");
  console.log("Time of day: " + timeOfDay + "\n");
  console.log("Taste: " + taste + "\n");

  return [
    {
      time: timeOfDay,
    },
    {
      taste: taste,
    },
  ];
}

module.exports = getContextFeaturesList;
