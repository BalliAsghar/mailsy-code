import * as vscode from "vscode";
import Utils from "./utils/functions";

export function activate(context: vscode.ExtensionContext) {
  console.log('Congratulations, your extension "mailsy-code" is now active!');

  let disposable = vscode.commands.registerCommand(
    "mailsy-code.helloWorld",
    async () => await Utils.makeAccount()
  );

  context.subscriptions.push(disposable);
}

export function deactivate() {}
