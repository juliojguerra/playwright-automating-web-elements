import { test, expect } from "@playwright/test";

test("", async function ({ page }) {
  const fileName = "testing.pdf";
  const filePath = `test-files/downloads/${fileName}`;
  const inputFile = page.locator("#file-upload");
  const titleFileUploaded = page.getByRole("heading", {
    name: "File Uploaded!",
  });

  await page.goto("https://the-internet.herokuapp.com/upload");

  await inputFile.setInputFiles(filePath);

  await page.locator("#file-submit").click();

  await expect(titleFileUploaded).toBeVisible();
  await expect(page.locator("#uploaded-files")).toHaveText(fileName);

  await page.pause();
});
