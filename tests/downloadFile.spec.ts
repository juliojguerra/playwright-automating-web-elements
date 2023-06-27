import { test, expect } from "@playwright/test";
import fs from "fs";

test("Download file successfully", async function ({ page }) {
  const fileName = "testing.pdf";
  const path = "test-files/downloads/";
  const filePath = `${path}${fileName}`;

  await page.goto("https://the-internet.herokuapp.com/download");

  const downloadPromise = page.waitForEvent("download");
  await page.getByText(fileName).click();
  const download = await downloadPromise;

  await download.path();
  await download.saveAs(filePath);

  const fileExists = fs.existsSync(filePath);

  await expect(fileExists).toBeTruthy();
});
