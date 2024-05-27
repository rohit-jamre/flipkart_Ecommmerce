import express from 'express';
import dotenv from 'dotenv';
import bodyParser from 'body-parser';

import Connection from './database/db.js';
import DefaultData from './default.js';
import Router from './routes/route.js';
import cors from 'cors';

const app =express();
dotenv.config();
app.use(cors());
app.use(bodyParser.json({extended:true}));
app.use(bodyParser.urlencoded({extended:true}));
app.use('/', Router);

const PORT = 8000;

const USERNAME = process.env.DB_USERNAME;
const PASSWORD = process.env.DB_PASSWORD;

Connection(USERNAME,PASSWORD); 
 app.listen(PORT, () => console.log (`Server is running succesfully on port ${PORT}`));
 DefaultData();
 
 /*import express from 'express';
 import dotenv from 'dotenv';
 import bodyParser from 'body-parser';
 import cors from 'cors';
 
 import Connection from './database/db.js';
 import DefaultData from './default.js';
 import Router from './routes/route.js';
 
 const app = express();
 dotenv.config();
 
 // Middleware
 app.use(cors());
 app.use(bodyParser.json());
 app.use(bodyParser.urlencoded({ extended: true }));
 
 // Routes
 app.use('/', Router);
 
 const PORT = process.env.PORT || 8000; // Allow dynamic port binding
 
 const USERNAME = process.env.DB_USERNAME;
 const PASSWORD = process.env.DB_PASSWORD;
 
 async function startServer() {
     try {
         await Connection(USERNAME, PASSWORD);
         app.listen(PORT, () => console.log(`Server is running successfully on port ${PORT}`));
         DefaultData(); // Consider if this should be awaited or if it's a non-blocking operation
     } catch (error) {
         console.error('Error starting server:', error);
         // Properly handle error, could be logging, notifying, or crashing the server depending on severity
     }
 }
 
 startServer();
 */
 