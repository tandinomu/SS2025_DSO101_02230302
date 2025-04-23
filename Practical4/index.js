const express = require('express');
const app = express();
const PORT = process.env.PORT || 8080;

const ENV = process.env.NODE_ENV || 'production';
const CONTAINER_ID = process.env.CONTAINER_ID || 'local';


app.use(express.static('public'));

app.get('/', (req, res) => {

  res.send(`
    <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Practical4 - Docker Deployment</title>
        <style>
            body {
                font-family: Arial, sans-serif;
                margin: 0;
                padding: 20px;
                background-color: #e6f2ff; /* Baby blue background */
            }
            h1, h2 {
                text-align: center;
            }
            .container {
                max-width: 800px;
                margin: 0 auto;
                background-color: white;
                padding: 20px;
                border-radius: 8px;
                box-shadow: 0 2px 4px rgba(0,0,0,0.1);
            }
            .info-box {
                background-color: #cce6ff; /* Lighter baby blue */
                padding: 20px;
                border-radius: 5px;
                margin-top: 20px;
            }
        </style>
    </head>
    <body>
        <div class="container">
            <h1>Practical 4 - Docker Deployment</h1>
            
            <div class="container">
                <h2>Docker Image and Deployment</h2>
                <p>Created a Docker image from a simple web app and pushed it to DockerHub. Then containerized the app using a Dockerfile and deployed it to Render via GitHub integration.</p>
                
                <div class="info-box">
                    <h2>Project Details</h2>
                    <p>Created by: Tandin Om</p>
                    <p>Course: SWE</p>
                    <p>Practical: Docker Deployment</p>
                </div>
            </div>
        </div>
    </body>
    </html>
  `);
});

app.listen(PORT, '0.0.0.0', () => {
  console.log(`Server running at http://localhost:${PORT}`);
});