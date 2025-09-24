# Test SQA (Playwright)

A minimal Playwright test suite with a page-object for login and an example login test.

## Prerequisites
- Node.js 18+
- npm 9+

## Install
```bash
npm ci
npx playwright install --with-deps | cat
```

## Project Structure
```
pages/
  login.js            # Page Object Model for login flow
  order.js            # Placeholder for order page (if used)
tests/
  login.spec.js       # Login e2e test
playwright.config.js  # Playwright configuration
```

## Key Files
- `pages/login.js`: Exports a `loginPage` class with:
  - `go_to_login_page()`
  - `click_login_register_button()`
  - `login(mobileNumber, otp = '222222')`
  - `fillOtp(otp)` used internally by `login`

- `tests/login.spec.js`: Example test that navigates to the site, triggers login, sets address, and interacts with location UI.

## Usage
- Run all tests headless:
```bash
npm test
```

- Run all tests headed (visible browser):
```bash
npx playwright test --headed
```

- Run a single test file:
```bash
npx playwright test tests/login.spec.js
```

- Debug mode (headed, inspector):
```bash
npx playwright test tests/login.spec.js --debug
```

- View last HTML report:
```bash
npx playwright show-report
```

## Notes
- Geolocation/permissions need to be set on the browser context, not the page:
```ts
await context.setGeolocation({ latitude: 23.8103, longitude: 90.4125 });
await context.grantPermissions(['geolocation'], { origin: 'https://food-web.p-stageenv.xyz' });
```
- Update URLs/selectors if the app DOM or environment changes.

## Common Commands
```bash
# List tests
npx playwright test --list

# Retry on failures
npx playwright test --retries=2

# Record a new test
npx playwright codegen https://food-web.p-stageenv.xyz
```

## Troubleshooting
- TypeError `page.grantPermissions is not a function`: use `context.grantPermissions` instead.
- Ensure selectors like `getByTestId` and `.border` match the current app DOM.
- If tests fail only in CI, ensure browsers are installed via `npx playwright install --with-deps`.
