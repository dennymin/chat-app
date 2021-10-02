require('dotenv').config()
const PubNub = require('pubnub')
const express = require('express');

const app = express();
app.listen(3000, () => {
  console.log(`express server listening on port 3000`)
})

const pubnub = new PubNub({
  publishKey: process.env.PUBLISH_KEY,
  subscribeKey: process.env.SUBSCRIBE_KEY,
  uuid: process.env.SECRET_KEY
})

pubnub.subscribe({
  channels: ['the_guide'],
  withPresence: true
})

const theChannel = 'channel_one';

app.get('/api', (req, res, next) => {
  pubnub.publish({
    channel: theChannel,
    message: { 'entry': 'hi', 'update': 'hello' },
    function(status, response) {
        res.status(200).json('what is up');
    }
  })
})
