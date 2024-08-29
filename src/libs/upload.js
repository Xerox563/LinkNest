import { initializeApp } from "firebase/app";
import { getStorage, ref, uploadBytes, getDownloadURL } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyBp4N2lKWk8PeFY0nssikHjSol3p4IdTOk",
  authDomain: "linktree-a007a.firebaseapp.com",
  projectId: "linktree-a007a",
  storageBucket: "linktree-a007a.appspot.com",
  messagingSenderId: "944162315140",
  appId: "1:944162315140:web:28f5edc1d7a32a63eddbd1",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const storage = getStorage(app);

export async function upload(ev, callbackFn) {
  const file = ev.target.files?.[0];

  if (file) {
    const fileRef = ref(storage, `uploads/${file.name}`);

    try {
      // Upload file to Firebase Storage
      const snapshot = await uploadBytes(fileRef, file);
      const downloadURL = await getDownloadURL(snapshot.ref);

      // Call the callback function with the download URL
      callbackFn(downloadURL);

      toast.success("Uploaded!");
    } catch (error) {
      console.error("Upload error:", error);
      toast.error(`Upload error: ${error.message}`);
    }
  } else {
    toast.error("No file selected!");
  }
}
