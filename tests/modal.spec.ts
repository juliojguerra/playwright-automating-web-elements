import { test, expect, Page, Locator } from "@playwright/test";

test("Verify modal is displayed and then closed", async function ({ page }) {
  const modalLocator = page.locator("#modal");
  const modalTitle = page.locator("#modal .modal-title h3");
  const closeButton = page.locator(".modal-footer p");

  await page.goto("https://the-internet.herokuapp.com/entry_ad");

  await expect(modalLocator).toBeVisible();
  await expect(modalTitle).toHaveText(/this is a modal window/i);

  await closeButton.click();

  await expect(modalLocator).not.toBeVisible();
});
