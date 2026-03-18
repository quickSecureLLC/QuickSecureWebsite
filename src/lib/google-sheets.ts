import { GoogleSpreadsheet } from "google-spreadsheet";
import { JWT } from "google-auth-library";

let cachedDoc: GoogleSpreadsheet | null = null;

export async function getSubscriberSheet() {
  const email = process.env.GOOGLE_SERVICE_ACCOUNT_EMAIL;
  const key = process.env.GOOGLE_PRIVATE_KEY;
  const sheetId = process.env.GOOGLE_SHEET_ID;

  if (!email || !key || !sheetId) {
    throw new Error("Missing Google Sheets env vars");
  }

  if (cachedDoc) {
    return cachedDoc.sheetsByIndex[0];
  }

  const auth = new JWT({
    email,
    // Vercel stores multi-line env vars with literal \n — convert to real newlines
    key: key.replace(/\\n/g, "\n"),
    scopes: ["https://www.googleapis.com/auth/spreadsheets"],
  });

  const doc = new GoogleSpreadsheet(sheetId, auth);
  await doc.loadInfo();
  cachedDoc = doc;

  return doc.sheetsByIndex[0];
}
