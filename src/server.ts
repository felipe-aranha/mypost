import axios from 'axios';
import * as dotenv from 'dotenv';
import express from 'express';

const app = express();

dotenv.config();

app.get('/', async (request, response) => {
  const url = 'https://api.instagram.com/oauth/authorize';
  const appId = process.env.INSTAGRAM_APP_ID;
  const redirectURI = process.env.INSTAGRAM_APP_REDIRECT_URI;

  const fastToken = await axios.get(`${url}?client_id=${appId}&redirect_uri=${redirectURI}&scope=user_profile,user_media&response_type=code`);

  console.log(fastToken);
  return response.json({ message: 'CypherST Server Started' });
});

app.listen();
