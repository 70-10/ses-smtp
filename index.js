const crypto = require("crypto");
const Buffer = require("safe-buffer").Buffer;

module.exports = function (awsSecretKey) {
  const VERSION = Buffer.from([2]);
  const MESSAGE = "SendRawEmail";

  const signature = crypto.createHmac("sha256", awsSecretKey).update(MESSAGE).digest();
  return Buffer.concat([VERSION, signature]).toString("base64");
};
