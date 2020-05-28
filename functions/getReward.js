const readline = require("readline-sync");

async function getReward() {
  let answer = readline.question("\nDoes that sound right? 1. yes 2. no\n");
  let selection = parseInt(answer);

  // Send back zero-value if selection was poor
  if (selection === 2) selection = 0;

  return selection;
}

module.exports = getReward;
