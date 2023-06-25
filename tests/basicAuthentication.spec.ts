import { test, expect } from "@playwright/test";

test("Basic Authentication", async function ({ page }) {
  const data = {
    user: "admin",
    password: "admin",
  };

  await page.goto(
    `https://${data.user}:${data.password}@the-internet.herokuapp.com/basic_auth`
  );

  await page.pause();
});
