import { workspace } from "vscode";

export function getConfig() {
  return workspace.getConfiguration("mailsy-code");
}

export function setToken(token: string) {
  const config = getConfig();
  config.update("token", token, true);
}

export function getToken() {
  const config = getConfig();
  return config.get("token");
}

export function removeToken() {
  const config = getConfig();
  config.update("token", undefined, true);
}
