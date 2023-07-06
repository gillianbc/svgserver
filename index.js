const express = require('express');

const app = express();

app.get('/image/red', (req, res) => {
  // Set the content type to SVG
  res.setHeader('Content-Type', 'image/svg+xml');

  // Generate your SVG here
  const svgContent = generateRedSVG();

  // Send the SVG as the response
  res.send(svgContent);
});

app.get('/image/danger', (req, res) => {
  // Set the content type to SVG
  res.setHeader('Content-Type', 'image/svg+xml');

  // Generate your SVG here
  const svgContent = generateDangerSVG();

  // Send the SVG as the response
  res.send(svgContent);
});

app.get('/image/foreign', (req, res) => {
  // Set the content type to SVG
  res.setHeader('Content-Type', 'image/svg+xml');

  // Generate your SVG here
  const svgContent = generateForeignObjectSVG();

  // Send the SVG as the response
  res.send(svgContent);
});


// Generate your SVG content
function generateRedSVG() {
  return `
    <svg xmlns="http://www.w3.org/2000/svg" width="200" height="200">
      <rect width="200" height="200" fill="red" />
      <circle cx="100" cy="100" r="50" fill="white" />
    </svg>
  `;
}

function generateForeignObjectSVG() {
  return `
    <svg xmlns="http://www.w3.org/2000/svg" width="400" height="300" viewBox="0 0 400 300">
      <rect x="0" y="0" width="400" height="300" fill="lightgray" />
      <foreignObject x="50" y="50" width="200" height="100">
        <body xmlns="http://www.w3.org/1999/xhtml">
          <div style="background-color: yellow; padding: 10px;">
            <h2>Title</h2>
            <p>This is some text inside a foreignObject.</p>
          </div>
        </body>
      </foreignObject>
    </svg>
  `;
}

function generateDangerSVG() {
  return `
    <svg xmlns="http://www.w3.org/2000/svg" width="200" height="200">
      <rect width="200" height="200" fill="blue" />
      <circle cx="100" cy="100" r="50" fill="white" />
      <script type="text/javascript">alert("Some javascript injected")</script>
    </svg>
  `;
}

// Start the server
app.listen(3000, () => {
  console.log('Server is running on port 3000');
});
