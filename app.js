// app.js
const Log = require('./logger');

// ✅ Your actual token (ONLY the access_token string, nothing else)
const token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJNYXBDbGFpbXMiOnsiYXVkIjoiaHR0cDovLzIwLjI0NC41Ni4xNDQvZXZhbHVhdGlvbi1zZXJ2aWNlIiwiZW1haWwiOiJta2EyNjYyMDA2QGdtYWlsLmNvbSIsImV4cCI6MTc1MTY5NjcwMywiaWF0IjoxNzUxNjk1ODAzLCJpc3MiOiJBZmZvcmQgTWVkaWNhbCBUZWNobm9sb2dpZXMgUHJpdmF0ZSBMaW1pdGVkIiwianRpIjoiNWNjYmRhMGEtNGY2Yy00NmI5LTk3NjgtZTAyOGQ3MTExMWE4IiwibG9jYWxlIjoiZW4tSU4iLCJuYW1lIjoia2F2aWFyYXN1Iiwic3ViIjoiMGM3NTFhNzgtMTdhMS00NTBkLWI1ZmYtMzFkMGRmNzUzNDEzIn0sImVtYWlsIjoibWthMjY2MjAwNkBnbWFpbC5jb20iLCJuYW1lIjoia2F2aWFyYXN1Iiwicm9sbE5vIjoiMjIwNzAxNTE3IiwiYWNjZXNzQ29kZSI6ImNXeWFYVyIsImNsaWVudElEIjoiMGM3NTFhNzgtMTdhMS00NTBkLWI1ZmYtMzFkMGRmNzUzNDEzIiwiY2xpZW50U2VjcmV0IjoiZEh0bXpGbUdja0tKRHBZdSJ9.ACUgsQi5KdeRiySvURK5LKx9kcYAaL1TSgVEk6oNGS4";

// 🧪 Sample Log Calls
Log("backend", "info", "handler", "Info log - middleware started", token);
Log("backend", "error", "db", "Error log - DB connection failed", token);
Log("backend", "fatal", "service", "Fatal log - service crashed", token);
