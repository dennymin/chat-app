require('dotenv').config()
const PubNub = require('pubnub')
const pubnub = new PubNub({
  publishKey: process.env.PUBLISH_KEY,
  subscribeKey: process.env.SUBSCRIBE_KEY,
  uuid: process.env.SECRET_KEY
})

pubnub.addListener({
  message: function (event) {

  },
  presence: function (p) {

  }
})

pubnub.subscribe({
  channels: ['the_guide'],
  withPresence: true
})

module.exports = pubnub;
