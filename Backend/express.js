const express = require('express');
const Log = require('./middleware/logger'); // ✅ updated path

const app = express();
const PORT = 3000;

app.use(express.json());

app.post('/log', async (req, res) => {
  const { stack, level, package: pkg, message } = req.body;

  try {
    await Log(stack, level, pkg, message);
    res.json({ status: "logged successfully" });
  } catch (err) {
    res.status(500).json({ error: "log failed", details: err.message });
  }
});

app.listen(PORT, () => {
  console.log(`🚀 Server running at http://localhost:${PORT}`);
});
