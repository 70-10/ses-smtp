module.exports = function (awsSecretKey) {
  const VERSION = new Buffer([2]);
  const MESSAGE = "SendRawEmail";

  const signature = crypto.createHmac("sha256", awsSecretKey).update(MESSAGE).digest();
  return Buffer.concat([VERSION, signature]).toString("base64");
};
