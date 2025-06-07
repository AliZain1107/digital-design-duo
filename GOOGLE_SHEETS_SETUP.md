# 📊 Google Sheets Integration Setup Guide

This guide will help you connect the Styly Pro application form to Google Sheets so that all form submissions are automatically saved.

## 🎯 What We're Building

When someone fills out the Styly Pro application form on your website, their information will automatically be saved to a Google Sheet with these columns:
- Timestamp
- Submission Date
- Full Name
- Email
- Portfolio Link
- Specialization

---

## 📋 STEP 1: Create Your Google Spreadsheet

### 1.1 Open Google Sheets
1. Go to [https://sheets.google.com](https://sheets.google.com)
2. Make sure you're logged into your Google account

### 1.2 Create New Spreadsheet
1. Click the **"+ Blank"** button (big plus icon)
2. A new spreadsheet will open

### 1.3 Rename Your Spreadsheet
1. Click on **"Untitled spreadsheet"** at the top
2. Type: **"Styly Pro Applications"**
3. Press Enter to save

### 1.4 Get Your Spreadsheet ID (IMPORTANT!)
1. Look at the URL in your browser
2. It looks like: `https://docs.google.com/spreadsheets/d/1ABC123XYZ789.../edit`
3. Copy the long ID between `/d/` and `/edit`
4. **Save this ID somewhere** - you'll need it in Step 3!

**Example:** If your URL is:
`https://docs.google.com/spreadsheets/d/1BxiMVs0XRA5nFMdKvBdBZjgmUUqptlbs74OgvE2upms/edit`

Your ID is: `1BxiMVs0XRA5nFMdKvBdBZjgmUUqptlbs74OgvE2upms`

### 1.5 Keep This Tab Open
Don't close this tab - you'll check it later to see if data appears!

---

## 🔧 STEP 2: Create Google Apps Script

### 2.1 Open Google Apps Script
1. Open a new tab
2. Go to [https://script.google.com](https://script.google.com)
3. Make sure you're logged into the same Google account

### 2.2 Create New Project
1. Click **"+ New project"** (blue button)
2. A code editor will open with some default code

### 2.3 Replace the Default Code
1. You'll see a file called `Code.gs` with some default code
2. **Select ALL the default code** (Ctrl+A or Cmd+A)
3. **Delete it**
4. Copy the code from the file `google-apps-script/Code.gs` that was created
5. **Paste it** into the empty editor

### 2.4 Rename Your Project
1. Click **"Untitled project"** at the top
2. Type: **"Styly Pro Form Handler"**
3. Press Enter to save

---

## 🔗 STEP 3: Connect Script to Your Spreadsheet

### 3.1 Find the Connection Line
1. In your Apps Script code, find line 52 (around there)
2. Look for: `const spreadsheet = SpreadsheetApp.getActiveSpreadsheet();`

### 3.2 Replace with Your Spreadsheet ID
1. **Replace that entire line** with:
```javascript
const spreadsheet = SpreadsheetApp.openById('YOUR_SPREADSHEET_ID_HERE');
```

2. **Replace `YOUR_SPREADSHEET_ID_HERE`** with the ID you copied in Step 1.4

**Example:** If your ID is `1BxiMVs0XRA5nFMdKvBdBZjgmUUqptlbs74OgvE2upms`, it should look like:
```javascript
const spreadsheet = SpreadsheetApp.openById('1BxiMVs0XRA5nFMdKvBdBZjgmUUqptlbs74OgvE2upms');
```

### 3.3 Save Your Script
1. Press **Ctrl+S** (or Cmd+S on Mac)
2. Or click the **Save** icon (disk icon)

---

## 🚀 STEP 4: Deploy Your Script as Web App

### 4.1 Start Deployment
1. In Apps Script, click the **"Deploy"** button (top right)
2. Select **"New deployment"**

### 4.2 Configure Deployment Type
1. Click the **gear icon ⚙️** next to "Type"
2. Select **"Web app"**

### 4.3 Set Deployment Settings
Fill out these settings **EXACTLY**:

- **Description**: Type `Styly Pro Form Handler`
- **Execute as**: Select **"Me (your-email@gmail.com)"**
- **Who has access**: Select **"Anyone"** ⚠️ **This is crucial!**

### 4.4 Deploy
1. Click **"Deploy"** button
2. You might see a permission warning - click **"Authorize access"**
3. Choose your Google account
4. Click **"Advanced"** if you see a warning
5. Click **"Go to Styly Pro Form Handler (unsafe)"**
6. Click **"Allow"**

### 4.5 Copy Your Web App URL
1. After deployment, you'll see a **Web app URL**
2. It looks like: `https://script.google.com/macros/s/ABC123.../exec`
3. **Copy this entire URL** - you'll need it in Step 5!
4. Click **"Done"**

---

## 💻 STEP 5: Add URL to Your React Project

### 5.1 Find Your Project Folder
1. Open your React project folder in VS Code (or your editor)
2. Look for files like `package.json`, `src/`, etc.

### 5.2 Create Environment File
1. In the **root folder** (same level as `package.json`)
2. Create a new file called **`.env.local`**
3. If it already exists, open it

### 5.3 Add Your Google Script URL
1. In `.env.local`, add this line:
```
REACT_APP_GOOGLE_SCRIPT_URL=YOUR_WEB_APP_URL_HERE
```

2. **Replace `YOUR_WEB_APP_URL_HERE`** with the URL from Step 4.5

**Example:**
```
REACT_APP_GOOGLE_SCRIPT_URL=https://script.google.com/macros/s/AKfycbxyz123.../exec
```

### 5.4 Restart Your Development Server
1. Stop your React server (Ctrl+C in terminal)
2. Start it again: `npm start`
3. Wait for it to fully load

---

## 🧪 STEP 6: Test Everything

### 6.1 Test the Form
1. Go to your website (usually `http://localhost:3000`)
2. Navigate to the Styly Pro page
3. Click **"Apply Now"** or **"Become Certified Pro"**
4. Fill out the form with test data:
   - **Name**: Test User
   - **Email**: test@example.com
   - **Portfolio**: https://example.com
   - **Specialization**: Interior Design

### 6.2 Submit and Check
1. Click **"Submit Application"**
2. You should see a success message
3. **Go back to your Google Sheet**
4. **Refresh the page**
5. You should see your test data in a new row!

### 6.3 What You Should See
Your Google Sheet should now have:
- **Headers** in the first row (Timestamp, Submission Date, etc.)
- **Your test data** in the second row
- **Purple header** with white text

---

## 🚨 TROUBLESHOOTING

### Problem: "Google Sheets integration not configured"
**Solution:**
1. Check that `.env.local` exists in your project root
2. Make sure the URL starts with `REACT_APP_GOOGLE_SCRIPT_URL=`
3. Restart your development server: `npm start`

### Problem: Form submits but no data in Google Sheet
**Solution:**
1. Check Apps Script **"Executions"** tab for errors
2. Make sure you set **"Who has access"** to **"Anyone"** in Step 4.3
3. Verify your Spreadsheet ID is correct in the script

### Problem: Permission errors
**Solution:**
1. In Apps Script, go to **"Executions"** tab
2. Look for error messages
3. You may need to re-authorize the script

### Problem: CORS errors in browser console
**Solution:**
1. Make sure the script is deployed as **"Web app"**
2. Double-check **"Who has access"** is set to **"Anyone"**

---

## ✅ FINAL CHECKLIST

Before considering this complete, verify:

- [ ] ✅ Google Sheet created and named
- [ ] ✅ Spreadsheet ID copied correctly
- [ ] ✅ Apps Script code pasted and saved
- [ ] ✅ Spreadsheet ID added to script
- [ ] ✅ Script deployed as Web app with "Anyone" access
- [ ] ✅ Web app URL copied
- [ ] ✅ `.env.local` file created with correct URL
- [ ] ✅ Development server restarted
- [ ] ✅ Test form submission successful
- [ ] ✅ Data appears in Google Sheet

## 🎉 SUCCESS!

If all checkboxes are ✅, your Styly Pro application form is now connected to Google Sheets!

Every time someone applies to become a Styly Pro, their information will automatically be saved to your Google Sheet.

## 📧 BONUS: Get Email Notifications (Optional)

If you want to receive an email every time someone applies:

1. In your Apps Script, find the `addApplicationToSheet` function
2. Add this line before the `return true;`:
```javascript
GmailApp.sendEmail('your-email@gmail.com', 'New Styly Pro Application', `New application from ${data.fullName} (${data.email})`);
```
3. Replace `your-email@gmail.com` with your actual email
4. Save and redeploy the script
