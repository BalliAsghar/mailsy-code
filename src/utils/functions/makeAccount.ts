import * as vscode from "vscode";
import axios from "axios";
import { setToken, getToken } from "../../config";

const URL = "https://api.mail.tm";

export default async function makeAccount() {
  vscode.window.withProgress(
    {
      location: vscode.ProgressLocation.Notification,
      title: "Creating account...",
      cancellable: false,
    },
    async () => {
      try {
        const { email, password } = await genrateRondomEmailAndPassword();

        await axios.post(`${URL}/accounts`, {
          address: email,
          password,
        });

        // get jwt token
        const { data } = await axios.post(`${URL}/token`, {
          address: email,
          password,
        });

        /**
         * TODO:
         * - save token to config
         */

        // show success message
        vscode.window.showInformationMessage(
          `Account created successfully.\n\nEmail: ${email}`
        );
      } catch (error) {
        console.log(error);
        vscode.window.showErrorMessage(error.message);
      }
    }
  );
}

async function getDomain() {
  const { data } = await axios.get("https://api.mail.tm/domains?page=1");

  // get the first domain
  const domain = data["hydra:member"][0].domain;

  return domain;
}

async function genrateRondomEmailAndPassword() {
  return {
    email: `${Math.random().toString(36).substring(7)}@${await getDomain()}`,
    password: Math.random().toString(36).substring(7),
  };
}
