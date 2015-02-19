#!/usr/bin/env node

console.log('Attempting to post to slack...');


var Slack = require('machinepack-slack');

// Post a message to the specified channel in Slack.
Slack.postToChannel({
  subdomain: 'brushfire',
  webhookToken: 'XLwUYCLQsA4PXysVkO7cWWQp',
  username: 'my little node script',
  channel: '#general',
  message: process.argv[2] || 'Good morning, boys and girls!',
}).exec({
  // An unexpected error occurred.
  error: function(err) {
    console.error('Unexpected error occurred: ',err);
  },
  // Specified subdomain and webhook token combination does not match any known Slack accounts
  notFound: function() {
    console.error('Specified subdomain and webhook token combination does not match any known Slack accounts');
  },
  // OK.
  success: function() {
    console.log('Message posted to Slack!');
  },
});
