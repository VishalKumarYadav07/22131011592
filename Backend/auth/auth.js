const fetch = require('node-fetch'); // Make sure node-fetch@2 is installed

const authenticateUser = async () => {
  const response = await fetch('http://20.244.56.144/evaluation-service/auth', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      email: "vishal.22scse1011622@galgotiasuniversity.edu.in",
      name: "Vishal Kumar Yadav",
      rollNo: "22131011592",
      accessCode: "Muagvq",
      clientID: "b5207cf3-f5e7-49d0-bcce-ef4e0d36907a",
      clientSecret: "akqFfAdPvVXDTAHR"    // 🔁 Replace this
    })
  });

  const data = await response.json();

  if (response.ok) {
    console.log("✅ Token Received:");
    console.log("access_token:", data.access_token);
  } else {
    console.error("❌ Auth Failed:", data.message || data);
  }
};

authenticateUser();
