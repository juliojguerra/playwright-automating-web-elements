import { test, expect } from "@playwright/test";

test("Drag and drop a box item", async function ({ page }) {
  await page.goto("https://the-internet.herokuapp.com/drag_and_drop");

  const boxA = page.locator("#column-a");
  const boxB = page.locator("#column-b");

  const boxAContentBefore = await boxA.textContent();
  const boxBContentBefore = await boxB.textContent();

  await boxA.dragTo(boxB);

  const boxAContentAfter = await boxA.textContent();
  const boxBContentAfter = await boxB.textContent();

  expect(boxAContentBefore === boxBContentAfter).toBeTruthy();
  expect(boxBContentBefore === boxAContentAfter).toBeTruthy();
});
