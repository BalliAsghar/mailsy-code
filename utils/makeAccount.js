const axios = require("axios");
const vscode = require("vscode");

const URL = "https://api.mail.tm";

async function MakeAccount(context) {
  vscode.window.withProgress(
    {
      location: vscode.ProgressLocation.Notification,
      title: "Creating account...",
      cancellable: false,
    },
    async () => {
      try {
        const { email, password } = await genrateRondomEmailAndPassword();

        const { data } = await axios.post(`${URL}/accounts`, {
          address: email,
          password,
        });

        // get jwt token
        const { data: token } = await axios.post(`${URL}/token`, {
          address: email,
          password,
        });

        /*
         * Todo:
         * - save the token somewhere safe. e.g. Memento
         * */

        vscode.window.showInformationMessage(
          `Account created: ${data.address}`
        );
      } catch (error) {
        console.log(error);
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

module.exports = {
  MakeAccount,
};
