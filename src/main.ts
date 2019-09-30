import * as core from '@actions/core';
import * as github from "@actions/github";

async function run() {
  try {
    const pr = github.context.payload.pull_request;

    if (pr && pr.number) {
      core.setOutput('pr', pr.number.toString());
    } else if (!pr) {
      throw new Error('pull request is not found.');
    } else {
      throw new Error('pull request number is not exist.');
    }
  } catch (error) {
    core.setFailed(error.message);
  }
}

run();
