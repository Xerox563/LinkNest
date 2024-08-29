import * as admin from "firebase-admin";
import * as serviceAccount from "./path/to/serviceAccountKey.json"; // Replace with the path to your service account key

// Initialize Firebase Admin SDK
if (!admin.apps.length) {
  admin.initializeApp({
    credential: admin.credential.cert(serviceAccount),
    storageBucket: process.env.FIREBASE_STORAGE_BUCKET, // Your Firebase Storage bucket name
  });
}

export const bucket = admin.storage().bucket();
