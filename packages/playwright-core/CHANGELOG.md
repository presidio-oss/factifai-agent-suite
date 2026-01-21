# @presidio-dev/playwright-core

## 3.0.0

### Major Changes

- f1a2484: Enhance BrowserService to support external page handling

## 2.0.0

### Major Changes

- d7543ae: Implemented functionality to identify and return elements at given coordinates, supporting automated Playwright script generation using coordinate and selector mapping.

## 1.0.5

### Patch Changes

- b687def: ## CLI Permissions Fix

  - **Fixed critical issue**: Resolved the CLI permissions problem where the `factifai-agent` command wasn't available when installed from npm
  - **Enhanced CI/CD pipeline**: Updated the GitHub Actions workflow to explicitly set executable permissions on CLI files before publishing to npm

  ## Playwright Integration

  - **Removed problematic script**: Eliminated the postinstall script from playwright-core which was causing installation issues
  - **Streamlined dependency management**: Improved how Playwright dependencies are handled to ensure consistent behavior across different environments

  ## Documentation Improvements

  - **Enhanced installation guide**: Updated all documentation to include the critical step of installing Playwright globally before running `npx playwright install --with-deps`
  - **Added troubleshooting information**: Included guidance on resolving common installation issues
  - **Standardized instructions**: Ensured consistent installation instructions across all documentation files including README.md, package documentation, and guides
  - **Improved CI/CD examples**: Updated CI/CD integration examples to reflect the correct installation sequence

  These changes ensure a smoother installation experience and resolve the issues with CLI command availability when installing packages from npm.
