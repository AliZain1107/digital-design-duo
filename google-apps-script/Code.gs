/**
 * Google Apps Script for Styly Pro Application Form
 * This script receives form submissions and saves them to Google Sheets
 */

// Configuration
const SHEET_NAME = 'Styly Pro Applications'; // Name of the sheet tab
const HEADERS = [
  'Timestamp',
  'Submission Date', 
  'Full Name',
  'Email',
  'Portfolio Link',
  'Specialization'
];

/**
 * Handle POST requests from the application form
 */
function doPost(e) {
  try {
    // Parse the request data
    const data = JSON.parse(e.postData.contents);
    
    // Log the received data for debugging
    console.log('Received application data:', data);
    
    // Get or create the spreadsheet
    const sheet = getOrCreateSheet();
    
    // Add the data to the sheet
    const success = addApplicationToSheet(sheet, data);
    
    if (success) {
      return ContentService
        .createTextOutput(JSON.stringify({ success: true, message: 'Application submitted successfully' }))
        .setMimeType(ContentService.MimeType.JSON);
    } else {
      throw new Error('Failed to add data to sheet');
    }
    
  } catch (error) {
    console.error('Error processing application:', error);
    
    return ContentService
      .createTextOutput(JSON.stringify({ 
        success: false, 
        error: error.toString() 
      }))
      .setMimeType(ContentService.MimeType.JSON);
  }
}

/**
 * Handle GET requests (for testing)
 */
function doGet(e) {
  return ContentService
    .createTextOutput(JSON.stringify({ 
      message: 'Styly Pro Application Form API is running',
      timestamp: new Date().toISOString()
    }))
    .setMimeType(ContentService.MimeType.JSON);
}

/**
 * Get or create the applications sheet
 */
function getOrCreateSheet() {
  const spreadsheet = SpreadsheetApp.getActiveSpreadsheet();
  let sheet = spreadsheet.getSheetByName(SHEET_NAME);
  
  if (!sheet) {
    // Create new sheet if it doesn't exist
    sheet = spreadsheet.insertSheet(SHEET_NAME);
    
    // Add headers
    sheet.getRange(1, 1, 1, HEADERS.length).setValues([HEADERS]);
    
    // Format headers
    const headerRange = sheet.getRange(1, 1, 1, HEADERS.length);
    headerRange.setFontWeight('bold');
    headerRange.setBackground('#4F46E5'); // Purple background
    headerRange.setFontColor('#FFFFFF'); // White text
    
    // Auto-resize columns
    sheet.autoResizeColumns(1, HEADERS.length);
    
    console.log('Created new sheet:', SHEET_NAME);
  }
  
  return sheet;
}

/**
 * Add application data to the sheet
 */
function addApplicationToSheet(sheet, data) {
  try {
    // Prepare the row data in the same order as headers
    const rowData = [
      data.timestamp || new Date().toISOString(),
      data.submissionDate || new Date().toLocaleDateString(),
      data.fullName || '',
      data.email || '',
      data.portfolioLink || '',
      data.specialization || ''
    ];
    
    // Find the next empty row
    const lastRow = sheet.getLastRow();
    const nextRow = lastRow + 1;
    
    // Add the data
    sheet.getRange(nextRow, 1, 1, rowData.length).setValues([rowData]);
    
    // Format the new row
    const newRowRange = sheet.getRange(nextRow, 1, 1, rowData.length);
    newRowRange.setBorder(true, true, true, true, true, true);
    
    // Auto-resize columns if needed
    sheet.autoResizeColumns(1, HEADERS.length);
    
    console.log('Added new application to row:', nextRow);
    
    return true;
  } catch (error) {
    console.error('Error adding data to sheet:', error);
    return false;
  }
}

/**
 * Test function to verify the setup
 */
function testSetup() {
  const sheet = getOrCreateSheet();
  
  // Test data
  const testData = {
    timestamp: new Date().toISOString(),
    submissionDate: new Date().toLocaleDateString(),
    fullName: 'Test User',
    email: 'test@example.com',
    portfolioLink: 'https://example.com/portfolio',
    specialization: 'interior-design'
  };
  
  const success = addApplicationToSheet(sheet, testData);
  
  if (success) {
    console.log('Test setup completed successfully');
    return 'Setup test passed!';
  } else {
    console.error('Test setup failed');
    return 'Setup test failed!';
  }
}
