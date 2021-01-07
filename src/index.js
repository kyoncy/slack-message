const core = require('@actions/core');
const { IncomingWebhook } = require('@slack/webhook');

try {
  const webhookUrl = core.getInput('webhook');
  const webhook = new IncomingWebhook(webhookUrl);

  webhook.send({
    text: 'slack message action test',
  }).catch(error => {
    core.setFailed(error.message);
  })
} catch (error) {
  core.setFailed(error.message);
}
