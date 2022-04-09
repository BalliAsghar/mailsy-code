const vscode = require("vscode");
const { MakeAccount } = require("./utils");
/**
 * @param {vscode.ExtensionContext} context
 */
function activate(context) {
  console.log('Congratulations, your extension "mailsy-code" is now active!');

  let createAccount = vscode.commands.registerCommand(
    "mailsy-code.createAccount",
    MakeAccount
  );

  context.subscriptions.push(createAccount);
}

// this method is called when your extension is deactivated
function deactivate() {}

module.exports = {
  activate,
  deactivate,
};
