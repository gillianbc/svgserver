const express = require('express');

const app = express();

app.get('/image', (req, res) => {
  // Set the content type to SVG
  res.setHeader('Content-Type', 'image/svg+xml');

  // Generate your SVG here
  const svgContent = generateSVG();

  // Send the SVG as the response
  res.send(svgContent);
});

// Generate your SVG content
function generateSVG() {
  return `
    <svg xmlns="http://www.w3.org/2000/svg" width="200" height="200">
      <rect width="200" height="200" fill="blue" />
      <circle cx="100" cy="100" r="50" fill="white" />
    </svg>
  `;
}

// Start the server
app.listen(3000, () => {
  console.log('Server is running on port 3000');
});
