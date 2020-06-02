const core = require("@actions/core");
const github = require("@actions/github");

const hamburguer = require("./hamburguer");

async function run() {
  try {
    const { payload } = github.context;

    const state = core.getInput("state");
    const DISCORD_WEBHOOK_ID = core.getInput("DISCORD_WEBHOOK_ID");
    const DISCORD_WEBHOOK_TOKEN = core.getInput("DISCORD_WEBHOOK_TOKEN");

    await hamburguer({
      DISCORD_WEBHOOK_ID,
      DISCORD_WEBHOOK_TOKEN,
      state,
      payload,
    });

    return true;
  } catch (error) {
    core.error(error);
    core.setFailed(error.message);
  }
}

run();
