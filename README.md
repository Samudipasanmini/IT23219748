
# 🧪 SwiftTranslator Automation Testing

**IT3040 – Software Quality Assurance Assignment**

This project contains automated test scripts created using **Playwright** to test the **SwiftTranslator (Singlish → Sinhala Translator)** web application.

🔗 **Application Under Test:** [https://www.swifttranslator.com/](https://www.swifttranslator.com/)

---

## 📌 Project Objective

The purpose of this assignment is to:

* Automate functional and UI test scenarios
* Verify the accuracy of Singlish to Sinhala translations
* Test system behavior with both valid and invalid inputs
* Apply real-world software test automation practices

---

## 🛠 Technologies Used

| Technology     | Purpose                                |
| -------------- | -------------------------------------- |
| **Playwright** | End-to-end browser automation          |
| **TypeScript** | Test scripting language                |
| **Node.js**    | Runtime environment                    |
| **GitHub**     | Version control and project submission |

---

## 📂 Project Structure

```
📁 tests/
   └── singlish-to-sinhala.spec.ts   # Contains all automated test cases

📁 playwright-report/                # HTML reports (ignored in GitHub)
📁 test-results/                     # Execution artifacts (ignored)
📁 blob-report/                      # Blob reports (ignored)

📄 playwright.config.ts              # Playwright configuration file
📄 package.json                      # Project dependencies and scripts
📄 README.md                         # Project documentation
```

---

## ✅ Test Coverage

Total Test Scenarios: **35**

| Category                  | Count | Description                                   |
| ------------------------- | ----- | --------------------------------------------- |
| Positive Functional Tests | 24    | Valid Singlish sentences translated correctly |
| Negative Functional Tests | 10    | Edge cases, slang, typos, and complex inputs  |
| UI Test                   | 1     | Clear button functionality                    |

---

## ▶️ How to Run the Project

### 1️⃣ Install Dependencies

```bash
npm install
```

### 2️⃣ Install Playwright Browsers

```bash
npx playwright install
```

### 3️⃣ Run All Tests

```bash
npx playwright test
```

### 4️⃣ View the HTML Test Report

```bash
npx playwright show-report
```

---

## 🧠 Test Strategy

### ✔ Positive Tests

These verify correct Sinhala translations for:

* Normal conversational sentences
* Questions
* Mixed Sinhala + English words
* Numbers, currency, and time expressions

### ❌ Negative Tests

These evaluate system robustness using:

* Typographical errors
* Long words without spaces
* Slang and informal language
* Mixed punctuation
* Poor grammar inputs

### 🖥 UI Test

The UI test ensures that the **Clear Button**:

* Empties the Singlish input field
* Clears the Sinhala output panel

---

## 📋 Key Implementation Details

* Real-time translation validation is used
* Sinhala output is captured directly from the translation panel
* Actual outputs are logged into Playwright reports for documentation
* Test cases are dynamically generated using structured test data

---

## 🚫 Ignored Files in GitHub

The following directories are excluded from version control:

```
node_modules/
test-results/
playwright-report/
blob-report/
playwright/.cache/
playwright/.auth/
```

These folders contain dependencies and auto-generated test artifacts.

---

## 👨‍🎓 Author

**Name:** H.M.S.P. Karunathilaka
**Module:** IT3040 – Software Quality Assurance
**Assignment:** Playwright Test Automation Project

---

