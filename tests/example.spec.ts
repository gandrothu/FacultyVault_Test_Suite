import { test, expect } from '@playwright/test';
test.beforeEach(async ({ page }) => {
  test.setTimeout(5 * 60 * 1000);
  await page.goto('https://facultyvault.onrender.com/');
  await page.locator('[name="username"]').fill('T-CSE-89');
  await page.locator('[name="password"]').fill('Vasavi@1234');
  await page.locator('[type="submit"]').click();
})
test('Navigate to dashboard', async ({ page }) => {
  expect(page.url()).toContain('dashboard')
});
test('Validate HOD priviliges', async ({ page }) => {

  await expect(page.locator('#faculty_search')).toBeVisible();
  await expect(page.locator('.nav-item',{hasText:"Add Faculty"})).toBeVisible();
  await expect(page.locator('.nav-item',{hasText:"Export Excel"})).toBeVisible();
  await expect(page.locator('.nav-item',{hasText:"Filter Data"})).toBeVisible();
  await expect(page.locator('.nav-item',{hasText:"Change Password"})).toBeVisible();
  await expect(page.locator('.nav-item',{hasText:"Download"})).toBeVisible();
  await expect(page.locator('.nav-item',{hasText:"Logout"})).toBeVisible();
});
test('Validate basic details', async ({ page }) => {
  await expect(page.locator('.container').last()).toContainText('Name: Dr. D JAYA KUMARI');
  await expect(page.locator('.container').last()).toContainText('ID: T-CSE-89');
  await expect(page.locator('.container').last()).toContainText('Position: PROFESSOR & HOD');
  await expect(page.locator('.container').last()).toContainText('Department: CSE');
});
test('Validate "Add or Update" button', async ({ page }) => {

  await expect(page.locator('.btn-primary').first()).toBeVisible();
  await expect(page.locator('.btn-primary').first()).toBeEnabled();


});
