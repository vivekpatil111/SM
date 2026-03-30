const { google } = require('googleapis');
const path       = require('path');

const SHEET_ID   = process.env.GOOGLE_SHEET_ID;
const CREDS_PATH = 'D:\\lecturepulse\\config\\google-credentials.json';

async function getSheets() {
  const auth = new google.auth.GoogleAuth({
    keyFile: CREDS_PATH,
    scopes: ['https://www.googleapis.com/auth/spreadsheets'],
  });
  const client = await auth.getClient();
  return google.sheets({ version: 'v4', auth: client });
}

async function appendRow(row) {
  const sheets = await getSheets();
  await sheets.spreadsheets.values.append({
    spreadsheetId   : SHEET_ID,
    range           : 'Sheet1!A1',
    valueInputOption: 'RAW',
    insertDataOption: 'INSERT_ROWS',
    requestBody     : { values: [row] },
  });
}

module.exports = { appendRow };