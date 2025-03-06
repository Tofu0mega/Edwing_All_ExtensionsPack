const express = require('express');
const fs = require('fs');
const path = require('path');
const app = express();

app.get('/files', (req, res) => {
  const folderPath = 'C:/Users/ROG/Downloads/PDFs'; // Replace with the actual folder path

  fs.readdir(folderPath, (err, files) => {
    if (err) {
      console.error('Error reading folder:', err);
      res.status(500).send('Error reading folder');
      return;
    }

    const fileLinks = files.map((file) => {
      const filePath = path.join(folderPath, file);
      const fileUrl = `/files/${encodeURIComponent(file)}`;
      return `<li><a href="${fileUrl}" target="_blank">${file}</a></li>`;
    });

    const html = `<html><body><ul>${fileLinks.join('')}</ul></body></html>`;
    res.send(html);
  });
});

app.get('/files/:file', (req, res) => {
  const folderPath = 'C:/Users/ROG/Downloads/PDFs'; // Replace with the actual folder path
  const fileName = req.params.file;
  const filePath = path.join(folderPath, fileName);

  fs.readFile(filePath, (err, data) => {
    if (err) {
      console.error('Error reading file:', err);
      res.status(500).send('Error reading file');
      return;
    }

    res.set('Content-Type', 'application/pdf');
    res.send(data);
  });
});

app.listen(3000, () => {
  console.log('Server started on port 3000');
});
