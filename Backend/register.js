const fetch = require('node-fetch'); // Make sure node-fetch@2 is installed

const registerUser = async () => {
  const response = await fetch('http://20.244.56.144/evaluation-service/register', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      email: "vishal.22scse1011622@galgotiasuniversity.edu.in",
      name: "Vishal Kumar Yadav",
      mobileNo: "9065167580",
      githubUsername: "VishalKumarYadav07",
      rollNo: "22131011592",
      accessCode: "Muagvq"
    })
  });

  const data = await response.json();

  if (response.ok) {
    console.log("✅ Registration Successful:");
    console.log("clientID:", data.clientID);
    console.log("clientSecret:", data.clientSecret);
  } else {
    console.error("❌ Registration Failed:", data.message || data);
  }
};

registerUser();
