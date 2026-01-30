import { test, expect } from '@playwright/test';

/**
 * Data extracted from your "my one.xlsx" file.
 * Total scenarios: 35 (24 Positive, 10 Negative, 1 UI)
 */
const testData = [
  { id: 'Pos_Fun_0001', name: 'A simple sentence in past tense', input: 'oyaa hodhin innavaadha?', expected: 'ඔයා හොදින් ඉන්නවාද?' },
    { id: 'Pos_Fun_0002', name: 'Currency and number conversion', input: 'mama dhaen vaeda karanavaa', expected: 'මම දැන් වැඩ කරනවා' },
  { id: 'Pos_Fun_0003', name: 'Currency and number conversion', input: 'mama heta enavaa', expected: 'මම හෙට එනවා' },
  { id: 'Pos_Fun_0004', name: 'Currency and number conversion', input: 'mama iiyee gedhara giyaa', expected: 'මම ඉයෙ ගෙදර ගියා' },
  { id: 'Pos_Fun_0005', name: 'Currency and number conversion', input: 'oyaata kohomadha', expected: 'ඔයාට කොහොමද?' },
  { id: 'Pos_Fun_0006', name: 'Currency and number conversion', input: 'vahaama enna', expected: 'වහාම එන්න' },
  { id: 'Pos_Fun_0007', name: 'Currency and number conversion', input: 'mama ehema karannee naehae', expected: 'මම එහෙම කරන්නේ නෑ' },
  { id: 'Pos_Fun_0008', name: 'Currency and number conversion', input: 'api yamu', expected: 'අපි යමු' },
  { id: 'Pos_Fun_0009', name: 'Currency and number conversion', input: 'karuNaakaralaa mata podi udhavvak karanna puLuvandha?', expected: 'කරුණාකරලා මට පොඩි උදව්වක් කරන්න පුළුවන්ද?' },
  { id: 'Pos_Fun_0010', name: 'Currency and number conversion', input: 'ehema karapan', expected: 'එහෙම කරපන්' },
  { id: 'Pos_Fun_0011', name: 'Currency and number conversion', input: 'mama gedhara yanavaa, passe oyath enna', expected: 'මම ගෙදර යනවා, පස්සේ ඔයත් එන්න' },
  { id: 'Pos_Fun_0012', name: 'Currency and number conversion', input: 'oya enavaanam mama balan innavaa', expected: 'ඔයා එනවනම් මම බලන් ඉන්නවා' },
  { id: 'Pos_Fun_0013', name: 'Currency and number conversion', input: 'mata Google Meeting ekak thiyenavaa', expected: 'මට Google Meeting එකක් තියෙනවා' },
  { id: 'Pos_Fun_0014', name: 'Currency and number conversion', input: 'api trip eka India valata yamu', expected: 'අපි trip එක India වලට යමු' },
  { id: 'Pos_Fun_0015', name: 'Currency and number conversion', input: 'meeting eka 8.00 AM patan gannavaa', expected: 'meeting එක 8.00 AM පටන් ගන්නවා' },
  { id: 'Pos_Fun_0016', name: 'Currency and number conversion', input: 'Rs. 500k vitharai', expected: 'Rs. 500k විතරයි' },
  { id: 'Pos_Fun_0017', name: 'Currency and number conversion', input: 'hari hari', expected: 'හරි හරි' },
  { id: 'Pos_Fun_0018', name: 'Currency and number conversion', input: 'poddak inna', expected: 'පොඩ්ඩක් ඉන්න' },
  { id: 'Pos_Fun_0019', name: 'Currency and number conversion', input: 'oya enavadha', expected: 'ඔයා එනවද' },
  { id: 'Pos_Fun_0020', name: 'Currency and number conversion', input: 'mata eeka karanna baee', expected: 'මට ඒක කරන්න බෑ' },
  { id: 'Pos_Fun_0021', name: 'Currency and number conversion', input: 'suBha sanDhYaavak', expected: 'සුභ සන්ධ්‍යාවක්' },
  { id: 'Pos_Fun_0022', name: 'Currency and number conversion', input: 'mama gedhara yanavaa.\noyaa enavadha', expected: 'මම ගෙදර යනවා.\nඔයා එනවද' },
  { id: 'Pos_Fun_0023', name: 'Currency and number conversion', input: 'mama rata yanavaa', expected: 'මම රට යනවා' },
  { id: 'Pos_Fun_0024', name: 'Currency and number conversion', input: 'mama gedhara giyaama passe mama kaema kanna hadanne. eeta passe api sinama balamu kiyala hithan inne. me wagee deergaha vacana input ekak system eka hariyata hadunagannawa kiyala balamu.', expected: 'මම ගෙදර ගියාම පස්සෙ මම කැම කන්න හඩන්නෙ. ඒට පස්සෙ අපි සිනම බලමු කියල හිතන් ඉන්නේ. මෙ wඅගේ ඩේර්ගහ වcඅන input එකක් system එක හරියට හඩුනගන්නwඅ කියල බලමු.' },
  


  { id: 'Neg_Fun_0001', name: 'Stress test: Joined words (No spaces)', input: 'mamagedharayanavaa', expected: 'මමගෙදරයනවා' },
  { id: 'Neg_Fun_0002', name: 'Typo handling', input: 'mamma bath kwwa', expected: 'මම බත් කෑවා' },
  { id: 'Neg_Fun_0003', name: 'Mixed Singlish + English slang', input: 'maaaadhariyee mage aadhariyee kavurundha sukumaala sundhariyee sadha raajiniyee sadha raajiniyee nuo kavurundha kavurundha aadhariyee', expected: 'මාආදරියේ මගෙ ආදරියේ කවුරුන්ද සුකුමාල සුන්දරියේ සද රාජිනියේ සද රාජිනියේ නුඔ කවුරුන්ද කවුරුන්ද ආදරියේ' },
  { id: 'Neg_Fun_0004', name: 'Informal short forms (u, r)', input: 'oya "the apple" paavichchi karee aeyi?', expected: 'ඔය "තෙ apple" පාවිච්චි කරේ ඇයි?' },
  { id: 'Neg_Fun_0005', name: 'Long input without proper grammar', input: 'paeni rasa musuunu rasak oyatath dhanenavadha ?', expected: 'පැනි රස මුසුඋනු රසක් ඔයටත් දනෙනවද ?' },
  { id: 'Neg_Fun_0006', name: 'Mixed punctuation logic', input: 'Hetaapikohedhayanne', expected: 'හෙටඅපිකොහෙදයන්නෙ' },
  { id: 'Neg_Fun_0007', name: 'English technical terms spelling mistake', input: 'Ane dhuve oyaata pin sidhdha venava mee sathaata kanna dhunna nisaa', expected: 'අනෙ දුවෙ ඔයාට පින් සිද්ද වෙනව මේ සතාට කන්න දුන්න නිසා' },
  { id: 'Neg_Fun_0008', name: 'Abbreviations and dates (Complex)', input: 'waadiwenna', expected: 'වාඩිවෙන්න' },
  { id: 'Neg_Fun_0009', name: 'Complex slang usage', input: 'haritha udhdhyaanaya balanna yamudha?', expected: 'හරිත උද්ද්‍යානය බලන්න යමුද?' },
  { id: 'Neg_Fun_0010', name: 'Short chat slang', input: 'oya kohenda oya phoneeka gaththe?', expected: 'ඔය කොහෙන්ඩ ඔය phoneඑක ගත්තෙ?' },
  
  { id: 'Pos_UI_0001', name: 'Clear input field', input: 'After clearing, input is empty', expected: 'After clearing, input is empty' }
];

test.describe('IT3040 Assignment: Swift Translator Automation', () => {

  test.beforeEach(async ({ page }) => {
    // Navigate to the translator and wait for it to load
    await page.goto('https://www.swifttranslator.com/', { waitUntil: 'networkidle' });
  });

  
  for (const scenario of testData) {
    if (scenario.id == 'Pos_UI_0001') {

      test(`${scenario.id}: ${scenario.name}`, async ({ page }) => {
        const inputArea = page.getByPlaceholder("Input Your Singlish Text Here.");
        const outputArea = page.locator('div.bg-slate-50');

        // 1. Fill the input first to ensure there is something to clear
        await inputArea.fill('Ammee mama bath kaevaa');

        await page.waitForTimeout(5000); 
    
        // 2. Click the Clear button using the aria-label
        await page.getByText('🗑️ Clear').click();

        // 3. Verify Input field is empty
        // Textareas use .inputValue()
        await expect(inputArea).toHaveValue('');

        // 4. Verify Output field is empty
        // Divs use .toHaveText()
        await expect(outputArea).toHaveText('');
    
        console.log(`${scenario.id}: UI Clear Successful - Both fields are empty.`);
      });


    } else{
      test(`${scenario.id}: ${scenario.name}`, async ({ page }, testInfo) => {
        // 1. Identify Input and Output fields
        // Based on the site structure, we find the first and last textareas
        const inputArea = page.getByPlaceholder("Input Your Singlish Text Here.");
        const outputArea = page.locator('div.bg-slate-50');

        // 2. Perform actions
        await inputArea.fill(scenario.input);
        
        // 3. Wait for real-time conversion (Brief delay for JS to run)
        await page.waitForTimeout(5000); 

        // 4. Capture Actual Output
        const actualOutput = await outputArea.innerHTML();

        // 5. Log for Excel Reporting
        console.log(`TC ID: ${scenario.id}`);
        console.log(`Actual Output: ${actualOutput}`);

        // 6. Attach to report for easy copying
        testInfo.annotations.push({
          type: 'Actual Output (Sinhala)',
          description: actualOutput
        });

        await expect(outputArea).toHaveText(scenario.expected);

        // // 7. Verify Result (Assertions)
        // // Note: Negative scenarios might fail this assertion, which validates the "Failure"
        // if (scenario.id.startsWith('Pos')) {
          
        // } else {
        //   // For Negative scenarios, we expect some inconsistency or capture the bug
        //   console.warn(`[NEG] ${scenario.id} captured result: ${actualOutput}`);
        // }
      });
    }
  }
  
});