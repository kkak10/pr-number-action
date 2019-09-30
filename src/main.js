const core = require('@actions/core');
const { context } = require('@actions/github');

async function main() {
  const pr = context.payload.pull_request;

  try {
    if (pr && pr.number) {
      core.setOutput('pr', pr.number.toString());
    } else if (!pr) {
      throw new Error('pull request is not found.');
    } else {
      throw new Error('pull request number is not exist.');
    }
  } catch (err) {
    core.setFailed(err.message)
  }
}

main();
