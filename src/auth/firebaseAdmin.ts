import * as admin from "firebase-admin";
import { NextApiRequest } from "next";

const verifyIdToken = (token: string) => {
  const firebasePrivateKey: string = process.env.FIREBASE_PRIVATE_KEY ?? "";

  if (!admin.apps.length) {
    admin.initializeApp({
      credential: admin.credential.cert({
        projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID,
        clientEmail: process.env.FIREBASE_CLIENT_EMAIL,
        privateKey: firebasePrivateKey.replace(/\\n/g, "\n"),
      }),
    });
  }

  return admin
    .auth()
    .verifyIdToken(token)
    .catch((e) => {
      console.log("%cError verifying token", "color: red", e);
      return null;
    });
};
export const loadIdToken = async (
  req: NextApiRequest
): Promise<string | null> => {
  if (!req.cookies.token) return null;
  const decodedToken = await verifyIdToken(req.cookies.token);
  console.log("%c Decoded token", "color: green", decodedToken);
  if (!decodedToken) return null;

  return decodedToken.uid;
};
