import { getMessaging } from "firebase/messaging/sw";
import { app } from "../firebase-config";

const firebaseApp = app;
getMessaging(firebaseApp);
console.info("Firebase messaging service worker is set up");
