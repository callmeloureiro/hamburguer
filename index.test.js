const hamburguer = require("./hamburguer");

test("send message processing", async () => {
  const mockArgs = {
    payload: {
      repository: {
        html_url: "http://google.com",
      },
    },
    DISCORD_WEBHOOK_ID: "717126286803337286",
    DISCORD_WEBHOOK_TOKEN:
      "6Kdv_EqdnVGItQ9Nr4xcoapefOJO7XdV-qtnX6SOg_41flzOqb5PK3EcUNbxwevdM5YA",
    state: "processing",
  };

  const response = await hamburguer(mockArgs);

  expect(response).toBeTruthy();
});

test("send message completed", async () => {
  const mockArgs = {
    payload: {
      repository: {
        html_url: "http://google.com",
      },
    },
    DISCORD_WEBHOOK_ID: "717126286803337286",
    DISCORD_WEBHOOK_TOKEN:
      "6Kdv_EqdnVGItQ9Nr4xcoapefOJO7XdV-qtnX6SOg_41flzOqb5PK3EcUNbxwevdM5YA",
    state: "completed",
  };

  const response = await hamburguer(mockArgs);

  expect(response).toBeTruthy();
});

test("send message fail", async () => {
  const mockArgs = {
    payload: {
      repository: {
        html_url: "http://google.com",
      },
    },
    DISCORD_WEBHOOK_ID: "717126286803337286",
    DISCORD_WEBHOOK_TOKEN:
      "6Kdv_EqdnVGItQ9Nr4xcoapefOJO7XdV-qtnX6SOg_41flzOqb5PK3EcUNbxwevdM5YA",
    state: "fail",
  };

  const response = await hamburguer(mockArgs);

  expect(response).toBeTruthy();
});

test("fail connection discord", async () => {
  const mockArgs = {
    payload: {
      repository: {
        html_url: "http://google.com",
      },
    },
    DISCORD_WEBHOOK_ID: "717sss126286803337286",
    DISCORD_WEBHOOK_TOKEN:
      "6Kdv_EqdnVGItQ9Nr4xcoapessfOJO7XdV-qtnX6SOg_41flzOqb5PK3EcUNbxwevdM5YA",
    state: "fail",
  };

  const response = await hamburguer(mockArgs);

  expect(response).toBeTruthy();
});
