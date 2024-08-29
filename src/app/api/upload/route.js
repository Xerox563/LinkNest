import { initializeApp } from "firebase/app";
import { getStorage, ref, uploadBytes, getDownloadURL } from "firebase/storage";
import uniqid from "uniqid";

// Initialize Firebase with your project's config
const firebaseConfig = {
  apiKey: "AIzaSyBp4N2lKWk8PeFY0nssikHjSol3p4IdTOk",
  authDomain: "linktree-a007a.firebaseapp.com",
  projectId: "linktree-a007a",
  storageBucket: "linktree-a007a.appspot.com",
  messagingSenderId: "944162315140",
  appId: "1:944162315140:web:28f5edc1d7a32a63eddbd1",
};

const app = initializeApp(firebaseConfig);
const storage = getStorage(app);

export async function POST(req) {
  try {
    const formData = await req.formData();

    if (formData.has("file")) {
      const file = formData.get("file");

      if (!(file instanceof Blob)) {
        throw new Error("Invalid file");
      }

      const randomId = uniqid();
      const ext = file.name.split(".").pop();
      const newFilename = `${randomId}.${ext}`;
      const storageRef = ref(storage, newFilename);

      // Upload the file
      await uploadBytes(storageRef, file);

      // Get the download URL
      const downloadURL = await getDownloadURL(storageRef);

      return new Response(JSON.stringify({ downloadURL }), {
        headers: { "Content-Type": "application/json" },
      });
    } else {
      return new Response(JSON.stringify({ error: "No file provided" }), {
        status: 400,
        headers: { "Content-Type": "application/json" },
      });
    }
  } catch (error) {
    console.error("Error uploading file:", error);
    return new Response(JSON.stringify({ error: error.message }), {
      status: 500,
      headers: { "Content-Type": "application/json" },
    });
  }
}
