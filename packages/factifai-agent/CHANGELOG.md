# @presidio-dev/factifai-agent

## 3.0.0

### Major Changes

- f1a2484: Add format options and external page support for Playwright script generation

### Patch Changes

- Updated dependencies [f1a2484]
  - @presidio-dev/playwright-core@3.0.0

## 2.0.0

### Major Changes

- a108f4d: Added a feature for automatic Playwright script generation based on coordinates and selectors after all test cases pass.

### Patch Changes

- Updated dependencies [d7543ae]
  - @presidio-dev/playwright-core@2.0.0

## 1.3.0

### Minor Changes

- 87821a0: Added AWS session token support for Bedrock authentication

## 1.2.0

### Minor Changes

- 32d427c: add support for Azure OpenAI in Factifai Agent

## 1.1.2

### Patch Changes

- Fixed cli breaking bug by downgrading major yargs update

## 1.1.1

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

- Updated dependencies [b687def]
  - @presidio-dev/playwright-core@1.0.6

## 1.1.0

### Minor Changes

- 9c98a27: ## Added Features

  - Added `--skip-analysis` flag to bypass test case quality analysis for improved performance
  - Reorganized output folder structure into a centralized `factifai/` directory
  - Renamed "test report/" directory to "reports/" for cleaner organization
  - Enhanced configuration options for controlling test output and reporting

  ## Performance Improvements

  - Optimized test execution flow with optional analysis step
  - Added configuration system for report and analysis settings

  ## Refactoring

  - Refactored report generation code for better organization
  - Enhanced path handling with centralized directory structure
