import { initializeApp } from "firebase/app";
import { getMessaging, getToken } from "firebase/messaging";

const firebaseConfig = {
  apiKey: "AIzaSyBPJmljdjDu6IQ9doHUGNswf91UPnqAGOU",
  authDomain: "web--push.firebaseapp.com",
  projectId: "web--push",
  storageBucket: "web--push.appspot.com",
  messagingSenderId: "410200422200",
  appId: "1:410200422200:web:1971aa1dfc11045fbf33cd",
  measurementId: "G-YS33HCTCF1"
};

function requestPermission() {

  console.log("Requesting permission...");
  Notification.requestPermission().then((permission) => {
    if (permission === "granted") {
      console.log("Notification permission granted.");
      const app = initializeApp(firebaseConfig);

      const messaging = getMessaging(app);
      getToken(messaging, {
        vapidKey:
          "BMvIELWMt5Oax23hVAFRSKvpuUkSRc_Rd_x2nqNPUDmIeXM5bpe4OEGxj7B2Qqe9dJfhN7U1po74ZcB6OaGbmn0",
      }).then((currentToken) => {
        if (currentToken) {
        
          console.log("currentToken: ", currentToken);
          document.getElementById('root').textContent = currentToken;

        } else {
          console.log("Can not get token");
        }
      });
    } else {
      console.log("Do not have permission!");
    }
  });
}

requestPermission();
