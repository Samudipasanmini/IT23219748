🧪 SwiftTranslator Automation Testing

IT3040 – Software Quality Assurance Assignment

This project contains automated test scripts developed using Playwright to test the SwiftTranslator (Singlish → Sinhala Translator) web application.

🔗 Application Under Test: https://www.swifttranslator.com/

📌 Project Objective

The goal of this assignment is to:

Automate functional and UI test scenarios

Validate Singlish to Sinhala translation accuracy

Identify system behavior under both valid and invalid inputs

Practice real-world test automation using Playwright

🛠 Technologies Used
Tool	Purpose
Playwright	Browser automation framework
TypeScript	Test scripting language
Node.js	Runtime environment
GitHub	Version control & submission
📂 Project Structure
📁 tests/
   └── singlish-to-sinhala.spec.ts   # All automated test cases

📁 playwright-report/                # HTML test reports (ignored in Git)
📁 test-results/                     # Test artifacts (ignored)
📄 playwright.config.ts              # Playwright configuration
📄 package.json                      # Project dependencies
📄 README.md                         # Project documentation

✅ Test Coverage

Total Test Scenarios: 35

Category	Count	Description
Positive Functional	24	Valid Singlish sentences translated correctly
Negative Functional	10	Edge cases, slang, typos, complex inputs
UI Test	1	Clear button functionality
▶️ How to Run the Tests
1️⃣ Install Dependencies
npm install

2️⃣ Install Playwright Browsers
npx playwright install

3️⃣ Run All Tests
npx playwright test

4️⃣ View HTML Report
npx playwright show-report

🧠 Test Strategy
✔ Positive Tests

Verify correct Sinhala output for:

Normal sentences

Questions

Mixed Sinhala + English

Numbers, currency, and time

❌ Negative Tests

Check system robustness with:

Typos

Long joined words

Slang and informal text

Mixed punctuation

Grammar issues

🖥 UI Test

Ensures the Clear Button:

Clears the Singlish input field

Clears the Sinhala output panel

📋 Key Implementation Details

Tests use real-time translation validation

Output is captured from the Sinhala translation panel

Actual outputs are logged in Playwright reports for assignment documentation

Dynamic test generation is done using a test data array

🚫 Ignored Files

The following folders are excluded from GitHub:

node_modules/
/test-results/
/playwright-report/
/blob-report/
/playwright/.cache/
/playwright/.auth/


These contain dependencies and auto-generated test artifacts.

👨‍🎓 Author

Student Name: Dilshan
Module: IT3040 – Software Quality Assurance
Assignment: Test Automation with Playwright
