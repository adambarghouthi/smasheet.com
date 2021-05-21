import jwt from "next-auth/jwt";
const drive = require("@googleapis/drive");

const secret = process.env.SECRET;

export default async function helloAPI(req, res) {
  const token = await jwt.getToken({ req, secret });

  try {
    const authClient = await drive.auth.getClient({
      scopes: ["https://www.googleapis.com/auth/drive"],
    });
    authClient.setCredentials({
      access_token: token.gapiAccessToken,
      refresh_token: token.gapiRefreshToken,
    });

    const client = await drive.drive({
      version: "v3",
      auth: authClient,
    });

    const createResponse = await client.files.list({
      q: "mimeType='application/vnd.google-apps.spreadsheet'",
    });

    res.status(200).json(createResponse.data.files);

    console.log(createResponse.data);
  } catch (error) {
    console.log(error);
    res.status(403).json({ message: error.message });
  }
}
