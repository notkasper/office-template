const fs = require("fs");
const path = require("path");
const config = require("./config");

const getSslKey = () => {
  let key;
  try {
    key = fs.readFileSync(path.join(__dirname, "key.txt"));
  } catch (error) {
    throw new Error(`Error while reading ssl key from file: ${error}`);
  }
  return key.toString();
};

const getSslCert = () => {
  let cert;
  try {
    cert = fs.readFileSync(path.join(__dirname, "cert.txt"));
  } catch (error) {
    throw new Error(`Error while reading ssl cert from file: ${error}`);
  }
  return cert.toString();
};

const getEnv = () => {
  const validEnvs = ["development", "staging", "production"];
  let env = process.argv[2];
  if (!validEnvs.includes(env)) {
    console.error(
      `Invalid env: ${env}\nenv must be one of: [${validEnvs}]. Falling back to development`
    );
    env = "development";
  }
  return env;
};

const getPort = () => {
  const env = getEnv();
  switch (env) {
    case "development":
      return config.development.port;
    case "staging":
      return config.staging.port;
    case "production":
      return config.production.port;
    default:
      throw new Error(`No port specified in config for mode: ${env}`);
  }
};

module.exports = {
  getSslCert,
  getSslKey,
  getEnv,
  getPort
};
