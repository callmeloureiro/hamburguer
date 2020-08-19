const fetch = require("node-fetch");

const hamburger = async function ({
  DISCORD_WEBHOOK_ID,
  DISCORD_WEBHOOK_TOKEN,
  state,
  payload,
}) {
  const DISCORD_URL = `https://discordapp.com/api/webhooks/${DISCORD_WEBHOOK_ID}/${DISCORD_WEBHOOK_TOKEN}`;

  const messages = {
    processing: "CI/CD iniciando...",
    completed: "CI/CD finalizado!",
    fail: "CI/CD ERRO!",
  };

  const response = await fetch(DISCORD_URL, {
    method: "post",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      username: "Hambúrguer",
      avatar_url:
        "https://cdn.panelinha.com.br/receita/1562096945621-receita.jpg",
      embeds: [
        {
          description: messages[state],
          fields: [
            {
              name: "Repositório",
              value: payload.repository.html_url,
            },
            {
              name: "Branch",
              value: payload.repository.name,
            },
          ],
        },
      ],
    }),
  });

  return response;
};

module.exports = hamburger;
