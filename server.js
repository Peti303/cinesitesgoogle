import express from 'express';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const port = 3000;
const host = '0.0.0.0';

// Serve static assets from project directory
app.use(express.static(__dirname));

// Route handlers for index, references, and webapp4
app.get('/references', (req, res) => {
  res.sendFile(path.join(__dirname, 'references.html'));
});

app.get('/references.html', (req, res) => {
  res.sendFile(path.join(__dirname, 'references.html'));
});

app.get('/webapp4.html', (req, res) => {
  res.sendFile(path.join(__dirname, 'webapp4.html'));
});

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'index.html'));
});

app.listen(port, host, () => {
  console.log(`Server listening on http://${host}:${port}`);
});
