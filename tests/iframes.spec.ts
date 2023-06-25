import { test, expect } from "@playwright/test";

test("Verify text is written and displayed in iFrame", async function ({
  page,
}) {
  const exampleText = "This is an example content";

  await page.goto("https://the-internet.herokuapp.com/iframe");

  const textFrameLocator = await page
    .frameLocator("#mce_0_ifr")
    .locator("#tinymce");

  // Fill clears and sets new text
  await textFrameLocator.fill(exampleText);

  await expect(textFrameLocator).toHaveText(exampleText);
});

test("Verify texts in four iframes", async function ({ page }) {
  await page.goto("https://the-internet.herokuapp.com/nested_frames");

  const frameTopLocator = await page.frameLocator("[name='frame-top']");

  const frameLeftBodyLocator = await frameTopLocator
    .frameLocator("[name='frame-left']")
    .locator("body");

  await expect(frameLeftBodyLocator).toHaveText("LEFT");

  const frameMiddleBodyLocator = await frameTopLocator
    .frameLocator("[name='frame-middle']")
    .locator("body");

  await expect(frameMiddleBodyLocator).toHaveText("MIDDLE");

  const frameRightBodyLocator = await frameTopLocator
    .frameLocator("[name='frame-right']")
    .locator("body");

  await expect(frameRightBodyLocator).toHaveText("RIGHT");

  const frameBottomBodyLocator = await page
    .frameLocator("[name='frame-bottom']")
    .locator("body");

  await expect(frameBottomBodyLocator).toHaveText("BOTTOM");
});
