/* eslint-disable no-console */
class Environment {
  static isDebug() {
    return process.env.ENVIRONMENT === 'dev';
  }

  static debugLog(...args) {
    if (this.isDebug()) {
      console.debug(...args);
    }
  }
}

module.exports = Environment;
