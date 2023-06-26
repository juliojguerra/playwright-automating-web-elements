import { test, expect } from "@playwright/test";

test("Select an option in Dropdown", async function ({ page }) {
  const option2 = "Option 2";
  const dropdown = await page.locator("#dropdown");
  const selectedOption = await page.locator("option[selected='selected']");

  await page.goto("https://the-internet.herokuapp.com/dropdown");
  await dropdown.selectOption(option2);

  await expect(selectedOption).toHaveText(option2);
});
