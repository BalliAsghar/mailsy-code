import * as vscode from "vscode";

export function activate(context: vscode.ExtensionContext) {
  context.subscriptions.push(
    vscode.commands.registerCommand("mailsy-code.create", () => {})
  );

  context.subscriptions.push(
    vscode.commands.registerCommand("mailsy-code.delete", () => {})
  );




  context.subscriptions.push(
    vscode.commands.registerCommand("mailsy-code.about", () => {})
  );
  context.subscriptions.push(
    vscode.commands.registerCommand("mailsy-code.mails", () => {})
  );
}

export function deactivate() {}
