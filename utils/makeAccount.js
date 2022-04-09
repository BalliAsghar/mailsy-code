const axios = require("axios");
const vscode = require("vscode");

async function MakeAccount() {
  vscode.window.showInformationMessage("Creating account...");
}

module.exports = {
  MakeAccount,
};
