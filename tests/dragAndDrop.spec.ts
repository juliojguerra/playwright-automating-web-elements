import { test, expect } from "@playwright/test";

test.only("Drag and drop a box item", async function ({ page }) {
  await page.goto("https://the-internet.herokuapp.com/drag_and_drop");

  const boxA = page.locator("#column-a");
  const boxB = page.locator("#column-b");

  await boxA.dragTo(boxB);

  await expect(boxA).toBeVisible();
  await expect(boxB).toBeVisible();
});
