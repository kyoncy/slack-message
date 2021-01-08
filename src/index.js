const core = require('@actions/core');
const { IncomingWebhook } = require('@slack/webhook');

try {
  const webhookUrl = core.getInput('webhook');
  const webhook = new IncomingWebhook(webhookUrl);

  const userName = core.getInput('slack_username');
  const iconUrl = core.getInput('slack_icon_url');
  const color = core.getInput('slack_color');
  const title = core.getInput('slack_title');

  webhook.send({
    username: userName,
    icon_url: iconUrl,
    attachments: [{
      color: color,
      fields: [{
        title: title,
        value: 'TODO: commit message area',
      }]
    }]
  }).catch(error => {
    core.setFailed(error.message);
  })
} catch (error) {
  core.setFailed(error.message);
}
