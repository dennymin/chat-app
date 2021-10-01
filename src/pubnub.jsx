export default const Pubnub = new PubNub({
  publishKey: process.env.PUBLISH_KEY,
  subscribeKey: process.env.SUBSCRIBE_KEY,
  uuid: process.env.SECRET_KEY
})
