// server/server.js
const express = require('express');
const cors = require('cors');
const app = express();
const PORT = 5000;

app.use(cors());

// Mock URL stats
const urlStats = [
  {
    id: 1,
    shortUrl: "https://aff.md/abc123",
    createdAt: "2025-07-01T10:00:00Z",
    expiresAt: "2025-07-10T10:00:00Z",
    clickCount: 3,
    clicks: [
      {
        timestamp: "2025-07-02T12:45:00Z",
        source: "Facebook",
        location: "Chennai, India"
      },
      {
        timestamp: "2025-07-03T14:30:00Z",
        source: "Email",
        location: "Mumbai, India"
      },
      {
        timestamp: "2025-07-04T09:15:00Z",
        source: "Twitter",
        location: "Delhi, India"
      }
    ]
  }
];

app.get('/api/urls', (req, res) => {
  res.json(urlStats);
});

app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
